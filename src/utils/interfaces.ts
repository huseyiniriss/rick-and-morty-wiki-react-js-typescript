export interface IPageWrapper {
  children: React.ReactNode;
  title?: string;
  isLoading?: boolean;
  error?: string;
}

export interface IEpisode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: string;
  name: string;
  url: string;
}

export interface IInfo {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: string;
  image: string;
  location: any;
  name: string;
  origin: any;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface ICharacterFilter {
  onFilter: any;
  onChangeSort: any;
}

export interface ILocation {
  created: string;
  dimension: string;
  id: string;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export interface IAxiosParams {
  url: string;
  method?: string;
  params?: any;
  data?: any;
  canFetch?: boolean;
}
