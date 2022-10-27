import React, {useEffect, useState} from 'react';
import {Card, Col, Image, Row, Typography} from 'antd';
import useAxios from "../utils/useAxios";
import {ICharacter, IEpisode} from "../utils/interfaces";
import PageWrapper from "../components/PageWrapper";
import {Link, useParams} from "react-router-dom";
import CharacterFilter from "../components/CharacterFilter";

const {Title} = Typography;

const Episode: React.FC = () => {
  const [episodeDetail, setEpisodeDetail] = useState<IEpisode>();
  const [characterList, setCharacterList] = useState<ICharacter[]>([]);
  const [characters, setCharacters] = useState<string>('');
  const [filteredCharacterList, setFilteredCharacterList] = useState<ICharacter[]>([]);
  const [pageTitle, setPageTitle] = useState<string>('');
  const {id} = useParams();
  const fetchEpisodeDetail = useAxios({
    url: `/api/episode/${id}`,
  });
  const fetchCharacterList = useAxios({
    url: `/api/character/${characters}`,
    canFetch: characters.length > 0
  });

  useEffect(() => {
    if (fetchEpisodeDetail.response) {
      setEpisodeDetail(fetchEpisodeDetail.response);
    }
  }, [fetchEpisodeDetail.response]);

  useEffect(() => {
    if (episodeDetail?.characters) {
      const characters = episodeDetail?.characters.map(val => val.split('/').slice(-1));
      setCharacters(characters.join(','))
    }
    if (episodeDetail?.name && episodeDetail?.episode) {
      setPageTitle(`${episodeDetail?.episode} - ${episodeDetail?.name}`)
    }
  }, [episodeDetail]);

  useEffect(() => {
    if (fetchCharacterList.response) {
      setCharacterList(fetchCharacterList.response);
      setFilteredCharacterList(fetchCharacterList.response);
    }
  }, [fetchCharacterList.response]);

  const onFilterCharacters = (values: any) => {
    const newFilteredCharacterList: ICharacter[] = characterList.filter(val => {
      return (
        (values.name === undefined || val.name.toLowerCase().includes(values.name.toLowerCase())) &&
        (values.status === undefined || val.status.toLowerCase() === values.status) &&
        (values.species === undefined || val.species.toLowerCase().includes(values.species.toLowerCase())) &&
        (values.gender === undefined || val.gender.toLowerCase() === values.gender) &&
        (values.type === undefined || val.type.toLowerCase().includes(values.type.toLowerCase()))
      )
    })
    setFilteredCharacterList(newFilteredCharacterList);
  }

  const onChangeSort = (sortBy: string) => {
    if (sortBy === 'nameAZ') {
      setFilteredCharacterList([...filteredCharacterList].sort((a, b) => a.name.localeCompare(b.name)));
    } else if (sortBy === 'nameZA') {
      setFilteredCharacterList([...filteredCharacterList].sort((a, b) => b.name.localeCompare(a.name)));
    } else {
      setFilteredCharacterList(characterList);
    }
  }

  return (
    <PageWrapper
      isLoading={fetchEpisodeDetail.loading || fetchCharacterList.loading}
      error={fetchEpisodeDetail.error || fetchEpisodeDetail.error}
      title="Episode Detail"
    >
      {pageTitle.length > 0 && <Title level={2}>{pageTitle}</Title>}
      <Row gutter={[16, 16]}>
        <Col sm={6} lg={4}>
          <CharacterFilter onFilter={onFilterCharacters} onChangeSort={onChangeSort}/>
        </Col>
        <Col sm={18} lg={20}>
          <Row gutter={[12, 12]}>
            {filteredCharacterList.map((character) => (
              <Col md={6} sm={12} key={character.id}>
                <Link to={`/character/${character.id}`}>
                  <Card type="inner" title={character.name} size="small">
                    <Image
                      preview={false}
                      src={character.image}
                    />
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </PageWrapper>
  );
};

export default Episode;