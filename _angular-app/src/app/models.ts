export interface Category {
    id?: number;
    name: string;
    slug?: string;
    active: boolean;
    created_at?: { date: string };
    updated_at?: { date: string };
}