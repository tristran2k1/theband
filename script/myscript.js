//open form buy ticket 
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

function showBuyTickets(){
    //alert("Show")
    modal.classList.add('open')
}

function hideBuyTickets(){
    modal.classList.remove('open')
}

function hideBuyTicketsOutSide(event){
    event.stopPropagation()
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click',showBuyTickets)
}

modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',hideBuyTicketsOutSide)


//display header in mobile mode
const headerElement = document.getElementById('header')
const mobileMenu = document.getElementById('mobile-menu')
const headerHeight = headerElement.clientHeight;

console.log(headerElement);

mobileMenu.onclick = function(){
    var isClosed = headerElement.clientHeight === headerHeight;
    if(isClosed){
        headerElement.style.height = 'auto';
    }else{
        headerElement.style.height = null;
    }
}

// hide menu - mobile mode
const menuItems = document.querySelectorAll('#nav li a[href*="#"')
for (var i=0 ; i  < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(e){
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            e.preventDefault();
        }else{
            headerElement.style.height = null;
        }
    }
}


