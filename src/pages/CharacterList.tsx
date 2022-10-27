import React, {useEffect, useState} from 'react';
import PageWrapper from "../components/PageWrapper";
import {ICharacter, IInfo} from "../utils/interfaces";
import useAxios from "../utils/useAxios";
import {Card, Col, Image, Pagination, PaginationProps, Row, Space, Typography} from "antd";
import {ROUTES} from "../utils/router";
import {Link} from "react-router-dom";

const {Text, Title} = Typography;

const CharacterList = () => {
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);
  const [characterInfo, setCharacterInfo] = useState<IInfo>();
  const [page, setPage] = useState(1);
  const {response, error, loading} = useAxios({
    url: `/api/character`,
    params: {page},
    canFetch: page > 0
  });


  useEffect(() => {
    if (response) {
      setCharacterList(response.results);
      setCharacterInfo(response.info);
    }
  }, [response]);


  const onChangePages: PaginationProps['onChange'] = pageNumber => {
    setPage(pageNumber);
  };

  return (
    <PageWrapper isLoading={loading} error={error} title="Character List">
      <Title level={2}>Character List</Title>
      <Row gutter={[12, 12]}>
        {characterList.map((character) => (
          <Col md={6} sm={12} key={character.id}>
            <Link to={ROUTES.CHARACTER_DETAIL.replace(':id', character?.id)}>
              <Card type="inner" title={character.name} size="small">
                <Space direction="vertical">
                  <Image src={character.image} preview={false}/>
                  <Text>{character.gender} - {character.status}</Text>
                  <Text>
                    <Text type="secondary">Location - </Text>
                    {character.location?.name}
                  </Text>
                </Space>
              </Card>
            </Link>
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

export default CharacterList;