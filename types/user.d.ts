export interface UserMetadata {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
    image: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}

export interface UserMetaData_Alter {
    name?: string;
    phone?: string;
    photo_url?: string;
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}

export type Address = {
    street_address?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}