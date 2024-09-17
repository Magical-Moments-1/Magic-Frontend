import { ObjectId } from "mongodb";
import { Address } from "./Address";

export class Users {

    // id!: ObjectId
    name!: string
    email!: string
    // userTypeId!: ObjectId
    passwordHash!: string
    phone!: string
    // createdAt!: Date
    // address!: Address

}