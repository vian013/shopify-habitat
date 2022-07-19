type ProductType = {
    description: string,
    featuredImage: string,
    handle: string,
    id: string,
    title: string,
    variants: Variant[],
    vendor: string
}

type Variant = {
    id: string,
    title: string,
    price: number
}

export {ProductType, Variant}