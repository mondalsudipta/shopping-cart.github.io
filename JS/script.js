// Get Elements

let addTocart = document.getElementsByClassName('btn-primary')
for (i = 0; i < addTocart.length; i++) {
    addTocart[i].addEventListener('click', addTocarts)
}

let removebtn = document.getElementsByClassName('btn-danger')
let qtyUpdate = document.getElementsByClassName('item-qty')


// Define Functions

function removebtns(event) {
    let e = event.target;
    //console.log(e);
    let parents = e.parentElement.parentElement.remove();
    //console.log(parents);
}
 
function addTocarts(event) {
    let addToCart = event.target;
    let addTocartEl = addToCart.parentElement
    //console.log(addTocartEl);

    let titlename = addTocartEl.children[0].innerText
    let price = addTocartEl.children[1].innerText
    addTocartupdate(titlename, price)
}

let tbody = document.getElementsByTagName('tbody')[0]
function addTocartupdate(titlename, price) {
    let createElement = document.createElement('tr');
    let titleNames = document.getElementsByClassName('item-title');
    for (i = 0; i < titleNames.length; i++) {
        if (titleNames[i].innerText == titlename) {
            alert('This item already added to your cart');
            return;
        }
    }
    //console.log(titleNames);
    createElement.innerHTML = `<td><h4 class="item-title">${titlename}</h4></td>
    <td><h4 class="item-price">${price}</h4></td>
    <td><input type='number' class='item-qty' value='0'></td>
    <td><h4 class='sub-total'>BDT 0</h4></td>
    <td><button class="btn btn-danger">Remove</button></td>`
    tbody.append(createElement);
    
    for (i = 0; i < removebtn.length; i++) {
        removebtn[i].addEventListener('click', removebtns)
    }
    
    for (i = 0; i < qtyUpdate.length; i++) {
        qtyUpdate[i].addEventListener('click', updateQty)
    }
}


function updateQty(event) {
    let updateEl = event.target;
    let parentsEl = updateEl.parentElement.parentElement
    //console.log(parentsEl);
    let itemPrice = parentsEl.getElementsByClassName('item-price')[0];
    let itemPrices = itemPrice.innerText.replace("BDT" , "");
    let subTotal = parentsEl.getElementsByClassName('sub-total')[0]
    subTotal.innerHTML = updateEl.value * itemPrices;
    if (isNaN(updateEl.value) || updateEl.value<=0) {
        updateEl.value = 1
    }
}


