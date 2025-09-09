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
  mutation CartCreate(
    $variant: ID!, 
    $imageUrl: String!, 
    $quote: String!, 
    $quotePosition: String!, 
    $orientation: String!, 
    $font: String!
  ) {
    cartCreate(input: {
      lines: [
        {
          merchandiseId: $variant,
          quantity: 1,
          attributes: [
            {
              key: "Image URL",
              value: $imageUrl
            },
            {
              key: "Customized Quote",
              value: $quote
            },
            {
              key: "Quote Position",
              value: $quotePosition
            },
            {
              key: "Orientation",
              value: $orientation
            },
            {
              key: "Font",
              value: $font
            }
          ]
        } 
      ]
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