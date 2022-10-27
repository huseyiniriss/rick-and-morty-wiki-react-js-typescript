import React, {useEffect, useState} from 'react';
import PageWrapper from "../components/PageWrapper";
import {IInfo, ILocation} from "../utils/interfaces";
import useAxios from "../utils/useAxios";
import {Card, Col, Pagination, PaginationProps, Row, Space, Typography} from "antd";

const {Text, Title} = Typography;

const LocationList = () => {
  const [locationList, setLocationList] = useState<ILocation[]>([]);
  const [characterInfo, setLocationInfo] = useState<IInfo>();
  const [page, setPage] = useState(1);
  const {response, error, loading} = useAxios({
    url: '/api/location',
    params: {page}
  });

  useEffect(() => {
    if (response) {
      setLocationList(response.results);
      setLocationInfo(response.info);
    }
  }, [response]);

  const onChangePages: PaginationProps['onChange'] = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <PageWrapper isLoading={loading} error={error} title="Location List">
      <Title level={2}>Episode List</Title>
      <Row gutter={[12, 12]}>
        {locationList.map((location) => (
          <Col md={6} sm={12} key={location.id}>
            <Card type="inner" title={location.name} size="small">
              <Space direction="vertical">
                <Text><Text strong>Type</Text> {location.type}</Text>
                <Text><Text strong>Dimension</Text> {location.dimension}</Text>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
      {characterInfo?.count && (
        <Space direction="vertical" align="center">
          <Pagination
            simple
            defaultPageSize={20}
            defaultCurrent={page}
            total={characterInfo?.count}
            onChange={onChangePages}
          />
        </Space>
      )}
    </PageWrapper>
  )
};

export default LocationList;