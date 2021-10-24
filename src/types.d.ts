type ProductImage = {
  mobile: string
  tablet: string
  desktop: string
}

type ProductGallery = {
  first: ProductImage
  second: ProductImage
  third: ProductImage
}

type ProductInclude = {
  quantity: number
  item: string
}

type Product = {
  id: number
  slug: string
  name: string
  image: ProductImage
  category?: string
  new_label?: boolean
  price: number
  description?: string
  features?: string
  includes?: Array<ProductInclude>
  gallery?: ProductGallery
  others?: Array<Product>
  cartImage?: string
}
