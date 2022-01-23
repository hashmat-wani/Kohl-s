var cartItems = document.querySelector('.cartItems');
var cartItemsArr = JSON.parse(localStorage.getItem('cartItems'));

var sum=0
for(var i=0;i<cartItemsArr.length;i++){
    sum+=(+cartItemsArr[i].price);
}
sum = Math.floor(sum/71)
console.log(sum);

document.querySelector("#checkOutTotal").textContent=`$ ${sum}`;
document.querySelector("#carttotalprice").textContent=`$ ${sum}`;
document.querySelector("#totalWithdel").textContent=`$ ${sum+20}`;



for(i=0;i<cartItemsArr.length;i++){
    var cartItem = document.createElement("div")
    cartItem.setAttribute('class',"cartItem");
    cartItems.append(cartItem);

    var subCartImg  = document.createElement("div")
    subCartImg.setAttribute('class',"subCartImg");
    cartItem.append(subCartImg);

    
    var image  = document.createElement("img")
    image.setAttribute('class',"productImg")
    image.setAttribute('src',cartItemsArr[i].image_url);
    subCartImg.append(image);

    var price  = document.createElement("p")
    price.setAttribute('id',"cartPrice")
    price.textContent=`$ ${Math.floor((+cartItemsArr[i].price)/70)}`
    subCartImg.append(price);

    
    var originalPrice  = document.createElement("span")
    originalPrice.setAttribute('id',"cartOrignalPrice")
    originalPrice.textContent=`$ ${Math.floor((+cartItemsArr[i].strikedoffprice)/70)}`
    price.append(originalPrice);

    var subcartdetail = document.createElement("div")
    subcartdetail.setAttribute('class',"subCartDetails");
    cartItem.append(subcartdetail);

    var itemDetails  = document.createElement("p")
    itemDetails.textContent=cartItemsArr[0].name;
    subcartdetail.append(itemDetails);

    var paragraph = document.createElement("p")
    paragraph.setAttribute('class',"size")
    subcartdetail.append(paragraph)

    var size = document.createElement("span")
    size.textContent='Size:M'
    paragraph.append(size)

    var line1=document.createElement("br")
    var line2=document.createElement("br")

    size.append(line1,line2)

    
    var color = document.createElement("span")
    color.textContent='color:light blue'
    paragraph.append(color)
}