export type Product = {
        id: number
        title: string
        description: string
        price: number
        discountPercentage: number
        rating: number
        stock: number
        brand: string
        category: string
        thumbnail: string
        images: string[]
}

export type ProductResponse = {
        data:{
            products: Product[]
        }
    }

    export type PaginationParams = {
        limit: number;
        skip: number;
    };
    