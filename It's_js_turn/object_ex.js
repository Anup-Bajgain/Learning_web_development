const product ={
    itemName : "flower",
    price: 100,
    discount: 20,
    itemCode: "fwr345"
}

function product(name,price,discount,itemCode) {
    return{
    itemName : name,
    price: price,
    discount: discount,
    itemCode: itemCode
    }
}

const rose = product("rose", 250, 18, "FR_23")

function Product(name,price,discount,itemCode){
    this.itemName  = name,
    this.price = price,
    this.discount = discount,
    this.itemCode = itemCode
    this.Dis = function(){
        return price*(100-discount);
    }
}
const dandelion = new Product("dandelion", 250, 18, "FR_23")