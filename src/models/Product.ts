export class Product{
    [key: string]: any;
    constructor(public id: number, public name?: string, public price?: number, public description?: string, public imageUrl?: string){}
}