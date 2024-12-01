

export class Embroidery{
id?:string="" 
color?: Color[];
font?:Font[]
icon?:Icon[]
size:Size[] = []


}
export class Font{
type?: string;
name?:string;
}

export class Icon{
    id?: string;
    price?:number;
    name?:Txt;
    }
export class Color{
    id?: string;
    name?:Txt;
    }
export class Size{
    cm!: number;
    inch!:number;
    price!:number
    }
export class Txt{
     he?: string;
     en?:Txt;
        }