class Product{
    constructor(name,price,discount,itemCode){
        this.itemName  = name;
        this.price = price;
        this.discount = discount;
        this.itemCode = itemCode;
    }
    get itemName() { return this.itemName + " is the product"; }


}

class Furniture extends Product{
    constructor(name,price,discount,itemCode){
        super(name,price,discount,itemCode);
}
    get itemName() { return this.itemName + " is the Furniture"; }
}
let pencil = new Product("pencil",20,5,'P_43');

// const Product1 = class Product{
//     constructor(name,price,discount,itemCode){
//         this.itemName  = name;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode = itemCode;
//     }
//     get getDiscountValue(){
//         return this.discount;
//     }
//     set setDiscountValue(value){
//         this.discount = value;
//     }
//     //pencil1.setDiscountValue=8
// }
// let pencil1 = new Product1("pencil",20,5,'P_43');