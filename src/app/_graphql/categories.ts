export const PRODUCT_CATEGORIES = `categories {
  title
  id
  breadcrumbs {
    id
    label
  }
}`

export const CATEGORIES = `
query Categories {
  Categories(limit: 300) {
    docs {
      id
      title
      media {
        url
        alt
        width
        height
      }
    }
  }
}
`
