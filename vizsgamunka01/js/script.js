var loginBtn = document.getElementById('loginBtn');
var loginModal = document.getElementById('loginModal');
var couponBanner = document.getElementById('couponBanner');
var couponModal = document.getElementById('couponModal');
var closeBtns = document.querySelectorAll('.close');
var loginForm = document.getElementById('loginForm');
var couponForm = document.getElementById('couponForm');
var cartBtns = document.querySelectorAll('.cart-btn');

//Login modal 
loginBtn.onclick = function () {
    loginModal.style.display = 'block';
}

//Kupon modal 
couponBanner.onclick = function () {
    couponModal.style.display = 'block';
}

//Zárt modal 
closeBtns.forEach(function(btn) {
    btn.onclick = function() {
        loginModal.style.display = 'none';
        couponModal.style.display = 'none';
    }
});

//Zárt modal kívűlre kattintásnál
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == couponModal) {
        couponModal.style.display = 'none';
    }
}

//Bejelentkezési űrlap
loginForm.onsubmit = function(event) {
    event.preventDefault();
    var felhasználónév = document.getElementById('username').value;
    alert('Üdvözöllek újra, ' + felhasználónév + '!' );
    loginModal.style.display = 'none';
    loginForm.reset();
}

//Kupon űrlap
couponForm.onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    alert('Köszönjük! A kedvezményes kód elküldve' + email);
    couponModal.style.display = 'none';
    couponForm.reset();
}

//Hozzáádas kártya gomb 
cartBtns.forEach(function(btn) {
    btn.onclick = function() {
        var product = this.parentElement;
        var productName = product.querySelector('h3').textContect;

        //Change button
        this.textContect = 'Hozzáádva';
        this.style.backgroundColor = '#4CAF50';

        alert(productName + 'hozzáádva a kosárhoz');

        //Reset button
        var button = this;
        setTimeout(function() {
            button.textContect = 'Kosárba';
            button.style.backgroundColor = '';
        }, 2000);
    }
});

//Smooth scroll
var navLinks = document.querySelectorAll ('nav a');

navLinks.forEach(function(link) {
    navLinks.onclick = function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href');
        var targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 150,
                behavior: 'smooth'
            });
        }
    }
})