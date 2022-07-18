type ProductType = {
    description: string,
    featuredImage: string,
    handle: string,
    id: string,
    title: string,
    variants: Variant[]
}

type Variant = {
    id: string,
    title: string,
}

export {ProductType, Variant}