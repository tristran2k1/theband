
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')


/*------------------------------Function-------------------------------------*/
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


/*--------------------------------Event-------------------------------------*/
modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',hideBuyTicketsOutSide)