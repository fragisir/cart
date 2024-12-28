let total = 0;

function addToCart(a) {
    total = total + a;

    document.getElementById('total').textContent = `Total: $${total}`; 

}


function goToCard(a) {

    addToCart(a);
}