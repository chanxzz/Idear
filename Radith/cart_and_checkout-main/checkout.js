document.getElementById('open-popup').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var address = document.getElementById('address').value.trim();
    var country = document.getElementById('country').value.trim();
    var city = document.getElementById('city').value.trim();

    var errorMessage = '';

    if (name === '' && phone === '' && address === '' && country === '' && city === '') {
        errorMessage = 'Enter valid input.<br>'; // Error message when all fields are empty
    }

    if (errorMessage !== '') {
        // Display error message
        var errorMessageDiv = document.getElementById('error-message');
        errorMessageDiv.innerHTML = '<div class="error">' + errorMessage + '</div>';
        errorMessageDiv.style.visibility = 'visible'; // Make the error message div visible
        return; // Stop further execution
    }

    // If all fields are valid, hide error message div
    document.getElementById('error-message').style.visibility = 'hidden';

    // Show success popup
    document.querySelector(".popup").classList.add("active");
});

document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
let listCart = [];
function checkCart(){
        var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
        if(cookieValue){
            listCart = JSON.parse(cookieValue.split('=')[1]);
        }
}
checkCart();
addCartToHTML();
function addCartToHTML(){
    // clear data default
    let listCartHTML = document.querySelector('.returnCart .list');
    listCartHTML.innerHTML = '';

    let totalQuantityHTML = document.querySelector('.totalQuantity');
    let totalPriceHTML = document.querySelector('.totalPrice');
    let totalQuantity = 0;
    let totalPrice = 0;
    // if has product in Cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = 
                    `<img src="${product.image}">
                    <div class="info">
                        <div class="name">${product.name}</div>
                        <div class="price">$${product.price}/1 product</div>
                    </div>
                    <div class="quantity">${product.quantity}</div>
                    <div class="returnPrice">$${product.price * product.quantity}</div>`;
                listCartHTML.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
                totalPrice = totalPrice + (product.price * product.quantity);
            }
        })
    }
    totalQuantityHTML.innerText = totalQuantity;
    totalPriceHTML.innerText = '$' + totalPrice;
}