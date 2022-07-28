type ProductType = {
    description: string,
    featuredImage: string,
    handle: string,
    id: string,
    title: string,
    variants: Variant[],
    vendor: string,
    images: Image[],
    options: Option[]
}

type Option = {
    id: string,
    name: string,
    values: string[]
}


type Image = {
    id: string,
    url: string
}

type Variant = {
    id: string,
    title: string,
    price: number
}

export {ProductType, Variant}