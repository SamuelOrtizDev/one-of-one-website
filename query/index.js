export const productQuery = `
query Product {
  products(first:1) {
    edges {
      node {
        variants(first:16) {
          edges {
            node {
              id
              title
              price {
                amount
              }
            }
          }
        }
      }
    }
  }
}
`

export const cartCreateMutation = `
  mutation CartCreate($variant: ID!, $attributes: [AttributeInput!]!) {
    cartCreate(input: {
      lines: [{
        merchandiseId: $variant,
        quantity: 1,
        attributes: $attributes
      }]
    }) {
      cart {
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`;