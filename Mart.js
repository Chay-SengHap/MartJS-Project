let Mart = {
    shelf_1 : [
        {barcode:1, name : "Coca" ,Available : 12 , price : 2},
        {barcode:2, name : "Coffee" ,Available : 5 , price : 1.8},
        {barcode:3, name : "Cambodia Beer" ,Available : 20 , price : 1.2},
    ],
    shelf_2 : [
        {barcode:4, name : "Suncreen" ,Available : 10 , price : 8},
        {barcode:5, name : "Cleanser" ,Available : 0 , price : 15.5},
        {barcode:6, name : "Face Mask" ,Available : 3 , price : 4},
    ],
    shelf_3 : []


}

const displayShelf = (shelfNum)=>{
    const shelfName = `shelf_${shelfNum}`
    const itemShelf = Mart[shelfName]

    if(!itemShelf){
        console.log("Shelf " , shelfNum , " does not exist")
        return;
    }

    if(itemShelf.length > 0){
        console.log(`\t\t\t===Shelf ${shelfNum} === `)
        for(let i = 0 ; i < itemShelf.length ; i ++){
            console.log(`${i+1} . Barcode : ${itemShelf[i].barcode} , Name : ${itemShelf[i].name} , Price : $${itemShelf[i].price} , Available : ${itemShelf[i].Available}`)
        }
        console.log(`\t\t\t===============`)
        console.log(`Total Items : ${itemShelf.length}`)

    }else if(itemShelf.length === 0 ){
        console.log("Shelf " , shelfNum , " exist but has no item")
    }

}

function updateShelfItem(shelfNum , barcode , update){
    const shelfName = `shelf_${shelfNum}`
    const itemShelf = Mart[shelfName]

   if(!itemShelf){
        console.log("Shelf " , shelfNum , " does not exist")
        return;
    }
    const item = itemShelf.find(existbarcode => existbarcode.barcode === barcode)
    if(!item){
        console.log(`Product with this barcode ${barcode} is not found in shelf ${shelfNum}`)
    }

    Object.assign(item , update)
    console.log(`Shelf ${shelfNum} is  sucessfully updated ` , item)

}

function insertNewProudct(shelfNum , newbarcode , newname , newavailable , newprice){

    const itemShelf = Mart[`shelf_${shelfNum}`];

    if(!itemShelf){
        console.log("Shelf " , shelfNum , " does not exist")
        return;
    }

    const item = itemShelf.find(existbarcode=> existbarcode.barcode === newbarcode)
    if(item){
        console.log(`Product with this barcode ${newbarcode} is already exist in shelf ${shelfNum}`)
        return;
    }

    const newProduct = {
        barcode : newbarcode ,
        name : newname ,
        Available : newavailable,
        price : newprice

    }

    itemShelf.push(newProduct)
    console.log(newProduct)
}

function displayAll(){
    
    for(let i = 1 ; i <= Object.keys(Mart).length ; i++){
        displayShelf(i)
    }

}

function deleteItem(shelfNum  , barcode){
    const shelfName = `shelf_${shelfNum}`
    const itemShelf = Mart[shelfName]

    if(!itemShelf){
        console.log("Shelf " , shelfNum , " does not exist")
        return;
    }

    const item = itemShelf.find(existbarcode=> existbarcode.barcode === barcode)
    if(!item){
        console.log(`Product with this barcode ${barcode} doesnt exist in shelf ${shelfNum}`)
        return;
    }else{
        let index = 0 ;
        for(let i = 0 ; i < itemShelf.length ; i++){
            if(barcode === itemShelf[i].barcode){
                index = i;
            }
        }
        itemShelf.splice(index , 1);
        console.log(`Item with the barcode of ${barcode} from shelf ${shelfNum} is sucessfully removed`)
    }
}
insertNewProudct(3 ,7, "Water" , 5 , 0.5)

insertNewProudct(3 ,8, "Kulen Water" , 24, 0.75)
displayAll();



updateShelfItem( 1 , 1 , {price : 3})

deleteItem(2 , 4)

displayAll()





