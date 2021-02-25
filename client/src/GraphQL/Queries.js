import { gql } from "@apollo/client";

export const LOAD_COLORS = gql`
  query {
    getAllColors {
      colorCategory
      hex
    }
  }
`;

export const LOAD_COLOR = gql`
  query GetColor($hex: String!) {
    getColor(hex: $hex) {
      colorCategory
      hex
    }
  }
`;
