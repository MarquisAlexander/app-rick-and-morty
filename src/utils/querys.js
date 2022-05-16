import {gql} from 'apollo-boost';

export const GET_CHARACTERS = gql`
  query ($page: Int, $name: String) {
    characters(page: $page, filter: {name: $name}) {
      results {
        name
        image
        id
      }
    }
  }
`;

export const GET_DETAILS_CHARACTER = gql`
  {
    character(id: 1) {
      name
      image
      episode {
        name
        air_date
        episode
      }
    }
  }
`;

export const GET_EPISODES = gql`
  query ($page: Int, $name: String) {
    episodes(page: $page, filter: {name: $name}) {
      info {
        count
      }
      results {
        name
        air_date
        id
      }
    }
  }
`;

export const GET_DETAILS_EPISODE = gql`
  query ($id: ID!) {
    episode(id: $id) {
      name
      air_date
      characters {
        name
        image
        id
      }
    }
  }
`;
