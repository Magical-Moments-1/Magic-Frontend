export class Category {
    id!: string;
    name!: Text;
    childCategories!: Array<Dictionary>;
    status!: string;
    //productsInCategory!: string[];
    imageUrl!: string;
    isTopCat!: boolean;
    createdAt!: string;
}

export class Dictionary {
    key!: string;
    value!: Text;
}