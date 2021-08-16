import gql from 'graphql-tag';
import { CartFragment, ErrorResultFragment } from '../../fragments';

export default gql`
  ${CartFragment}
  ${ErrorResultFragment}

  mutation addItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $qty) {
      ...Cart
      ...ErrorResult
      ... on InsufficientStockError {
        order {
          ...Cart
        }
      }
    }
  }
`;
