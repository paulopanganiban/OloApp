export interface Post {
    id?: number;
    userId?: number;
    title?: string;
    body?: string;
    total_count: number;
    incomplete_results: boolean;
    items: any;
}
