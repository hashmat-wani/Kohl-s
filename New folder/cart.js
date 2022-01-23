var cartItems = document.querySelector('.cartItems');
for(i=0;i<3;i++){
    var cartItem = document.createElement("div")
    cartItem.setAttribute('class',"cartItem");
    cartItems.append(cartItem);

    var subCartImg  = document.createElement("div")
    subCartImg.setAttribute('class',"subCartImg");
    cartItem.append(subCartImg);

    
    var image  = document.createElement("img")
    image.setAttribute('class',"productImg")
    image.setAttribute('src',"https://images.unsplash.com/photo-1642698351242-886860f1f804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60");
    subCartImg.append(image);

    var price  = document.createElement("p")
    price.setAttribute('id',"cartPrice")
    price.textContent='$70'
    subCartImg.append(price);

    
    var originalPrice  = document.createElement("span")
    originalPrice.setAttribute('id',"cartOrignalPrice")
    originalPrice.textContent='$50'
    price.append(originalPrice);

    var subcartdetail = document.createElement("div")
    subcartdetail.setAttribute('class',"subCartDetails");
    cartItem.append(subcartdetail);

    var itemDetails  = document.createElement("p")
    itemDetails.textContent='Mens Cuddl Duds® Essentials Robe'
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