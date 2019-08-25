export interface Category {
    id?: number;
    name: string;
    slug?: string;
    active: boolean;
    created_at?: { date: string };
    updated_at?: { date: string };
}

export interface ProductCategory {
    product: Product;
    categories: Category[];
}

export interface ProductInput {
    id?: number;
    amount: number;
    readonly created_at?: { date: string }
    readonly updated_at?: { date: string }
    product: Product;
}

export interface ProductOutput {
    id?: number;
    amount: number;
    readonly created_at?: { date: string }
    readonly updated_at?: { date: string }
    product: Product;
}

export interface ProductPhoto {
    id?: number;
    photo_url: string;
    product?: Product;
    readonly created_at?: { date: string }
    readonly updated_at?: { date: string }
}

export interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    readonly slug?: string;
    active: boolean;
    readonly created_at?: { date: string }
    readonly updated_at?: { date: string }
}

export interface User {
    id?: number;
    name: string;
    email: string;
    password?: string;
    profile?: UserProfile;
    readonly created_at?: { date: string }
    readonly updated_at?: { date: string }
}

export interface UserProfile {
    photo_url: string;
    phone_number: string;
    has_photo: boolean;
}

export interface ChatGroup {
    id?: number;
    name: string;
    photo?: File;
    photo_url: string;
    count_users?: number;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };

}