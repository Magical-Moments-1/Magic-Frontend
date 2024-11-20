import { Text } from "./text.model";

export class Category {
    id!: string;
    name!: Text;
    childCategoriesList!: Array<Dictionary>;
    status!: string;
    //productsInCategory!: string[];
    imageUrl!: string;
    isTopCat!: boolean;
    createdAt!: string;
}

export class Dictionary {
    id!: string;
    name!: Text;
}