export interface UserMetadata extends Address {
    id: string;
    name: string;
    email: string;
    role: string;
    phone?: string;
    image: string;
}

export interface UserMetaData_Alter extends Address {
    name?: string;
    phone?: string;
    photo_url?: string;
}

export type Address = {
    address_line1?: string;
    address_line2?: string;
    city?: string;
    state?: string;
    postal_code?: string;
}
