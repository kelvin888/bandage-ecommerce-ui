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

export type AllProductResponse = {
        data:{
            products: Product[]
        }
    }

    export type SingleProductResponse = {
        data: Product
        
    }

    export type PaginationParams = {
        limit: number;
        skip: number;
    };
    