import React, {useEffect, useState} from 'react';
import {Card, Col, Pagination, PaginationProps, Row, Space, Typography} from 'antd';
import useAxios from "../utils/useAxios";
import {IEpisode, IInfo} from "../utils/interfaces";
import PageWrapper from "../components/PageWrapper";
import {Link} from "react-router-dom";
import {ROUTES} from "../utils/router";

const {Text, Title} = Typography;

const Episode: React.FC = () => {
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([]);
  const [episodeInfo, setEpisodeInfo] = useState<IInfo>();
  const [page, setPage] = useState<number>(1);
  const {response, error, loading} = useAxios({
    url: '/api/episode',
    params: {page}
  });

  useEffect(() => {
    if (response) {
      setEpisodeList(response?.results);
      setEpisodeInfo(response.info);
    }
  }, [response]);

  const onChangePages: PaginationProps['onChange'] = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <PageWrapper isLoading={loading} error={error} title="Episode List">
      <Title level={2}>Episode List</Title>
      <Row gutter={[12, 12]}>
        {episodeList.map((episode) => (
          <Col md={6} sm={12} key={episode.id}>
            <Link to={ROUTES.EPISODE_DETAIL.replace(':id', episode?.id)}>
              <Card type="inner" title={episode.name} size="small">
                <Space direction="vertical">
                  <Text><Text strong>Episode</Text> {episode.episode}</Text>
                  <Text><Text strong>Air Date</Text> {episode.air_date}</Text>
                  <Text><Text strong>Character Count</Text> {episode.characters.length}</Text>
                </Space>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
      {episodeInfo?.count && (
        <Space direction="vertical" align="center">
          <Pagination
            simple
            defaultPageSize={20}
            defaultCurrent={page}
            total={episodeInfo?.count}
            onChange={onChangePages}
          />
        </Space>
      )}
    </PageWrapper>
  );
};

export default Episode;