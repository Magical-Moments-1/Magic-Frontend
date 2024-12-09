import { Review } from "./review.model";
import { Text } from "./text.model";

export class Product {
    id!: string;
    sku!: string;
    name!: any;
    description?: any;
    details?: any;
    color?: any;
    price!: Rate;
    salePrice!: Rate;
    inSale?: boolean;
    quantity!: Quantity[];
    imageUrl!: string;
    galleryImages: string[] = [];
    status?: StatusEnum;
    embroidery?: boolean;
    caption?: boolean;
    specialDelivery?: boolean;
    reviews?: Review[];
    relatives?: any;
    related?: string[];
    createdAt?: Date;
  }
  
  export interface Rate {
    dollar: number;
    nis: number;
  }
  
  export class Quantity {
    size?: string;
    qty?: number;
  }
  

  
  export enum StatusEnum {
    // Define the possible status values if needed
  }
  