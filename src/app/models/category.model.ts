import { Text } from "./text.model";

export class Category {
    id!: string;
    sku!: string;
    name!: any;
    childCategoriesList!: Array<Dictionary>;
    status!: string;
    //productsInCategory!: string[];
    imageUrl!: string;
    isTopCat!: boolean;
    createdAt!: string;
}

export class Dictionary {
    id!: string;
    name!: any;
}