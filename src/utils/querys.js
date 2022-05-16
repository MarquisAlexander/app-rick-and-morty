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
