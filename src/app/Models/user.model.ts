import { Address } from "./address.model";

export interface User {
    id: string;
    name: string
    email: string
    userRole: UserRole
    passwordHash: string
    phone: string
    address: Address
    savedShippingDetails: ShippingDetail[]
    // preferredProducts: string[]
    // refreshToken: string
    // refreshTokenExpiryTime: string
    // loginDates: Date[]
    profile: string
    createdAt: Date
}
export interface Login {
    email: string;
    password: string;
}
export interface UserRole {
    dateUpdate: Date;
    role: string;
}
export interface ShippingDetail {
    address: Address;
    name: string;
    phoneNumber: string;
    comments: string;
}
