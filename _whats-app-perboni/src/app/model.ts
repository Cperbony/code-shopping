import {Observable} from "rxjs/Observable";

export interface ChatGroup {
    readonly id: number;
    readonly name: string;
    readonly photo_url: string;
    is_member?: Observable<boolean>;
    last_message?: Observable<ChatMessage>;
    viewed: boolean;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };
}

export interface ChatMessage {
    type: string;
    content: string;
    user_id: string;
    user$?: Observable<{ name: string, photo_url: string }>
    user?: User;
    created_at: number;
}

export interface User {
    id?: number;
    name: string;
    email: string;
    role: Role;
    password?: string;
    profile?: UserProfile;
    readonly created_at?: { date: string };
    readonly updated_at?: { date: string };
}

export enum Role {
    SELLER = 1,
    CUSTOMER = 2
}

export interface UserProfile {
    photo_url: string;
    phone_number: string;
    has_photo: boolean;
    firebase_uid: string;
}

export interface AudioPlatformConfig {
    basePath: string;
    name: string;
    mimeType: string;
    fullPath: string;
}