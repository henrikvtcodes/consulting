export interface UserMetadata {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
    image: string;
}

export interface UserMetaData_Alter {
    name?: string;
    phone?: string;
    image?: string;
    street_address?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}