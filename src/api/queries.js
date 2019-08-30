export const products = `query products {
  products {
    id
    name
    description
    rating
    price
    images {
      url
      alt
    }
  }
}`;
