import React, {useEffect, useState} from 'react';
import PageWrapper from "../components/PageWrapper";
import {ICharacter, IEpisode} from "../utils/interfaces";
import {Link, useParams} from "react-router-dom";
import useAxios from "../utils/useAxios";
import {Card, Col, Image, Row, Space, Typography} from "antd";
import {ROUTES} from "../utils/router";

const {Text, Title} = Typography;

const CharacterDetail: React.FC = () => {
  const [characterDetail, setCharacterDetail] = useState<ICharacter>();
  const [episodeIds, setEpisodeIds] = useState<string>('');
  const [episodeList, setEpisodeList] = useState<IEpisode[]>([]);
  let {id} = useParams();

  const fetchCharacterDetail = useAxios({
    url: `/api/character/${id}`,
  });

  const fetchEpisodeDetail = useAxios({
    url: `/api/episode/${episodeIds}`,
    canFetch: episodeIds.length > 0
  })

  useEffect(() => {
    if (fetchCharacterDetail.response) {
      setCharacterDetail(fetchCharacterDetail.response);
    }
  }, [fetchCharacterDetail.response]);

  useEffect(() => {
    if (fetchEpisodeDetail.response) {
      if (Array.isArray(fetchEpisodeDetail.response)) {
        setEpisodeList(fetchEpisodeDetail.response);
      } else {
        setEpisodeList([fetchEpisodeDetail.response]);
      }
    }
  }, [fetchEpisodeDetail.response]);

  useEffect(() => {
    if (characterDetail?.episode) {
      const characterEpisodeIds = characterDetail.episode.map(val => val.split('/').slice(-1)).join(',');
      setEpisodeIds(characterEpisodeIds);
    }
  }, [characterDetail]);


  return (
    <PageWrapper
      isLoading={fetchCharacterDetail.loading || fetchEpisodeDetail.loading}
      error={fetchCharacterDetail.error || fetchEpisodeDetail.error}
      title="Character Detail"
    >
      <Title level={2}>Character Detail</Title>
      <Row gutter={[12, 12]}>
        <Col md={6} sm={12}>
          <Image src={characterDetail?.image}/>
        </Col>
        <Col md={6} sm={12}>
          <Card type="inner" title={characterDetail?.name} size="small">
            <Space direction="vertical">
              <Text><Text strong>Status</Text> {characterDetail?.status}</Text>
              <Text><Text strong>Species</Text> {characterDetail?.species}</Text>
              <Text><Text strong>Type</Text> {characterDetail?.type}</Text>
              <Text><Text strong>Gender</Text> {characterDetail?.gender}</Text>
              <Text><Text strong>Location</Text> {characterDetail?.location?.name}</Text>
            </Space>
          </Card>
        </Col>
      </Row>
      <Title level={3}>Episode List</Title>
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
    </PageWrapper>)
}

export default CharacterDetail;