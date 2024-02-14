<script>
function changerquantite(itemId, change) {
  const quantityElement = document.getElementById("quantity" + itemId[itemId.length - 1]);
  let quantity = parseInt(quantityElement.textContent) + change;
  if (quantity < 0) quantity = 0;
  quantityElement.textContent = quantity;
  updateTotal();
}
function updateTotal() {
        const prices = document.querySelectorAll('.article span[id^="price"]');//cible tous les elements span enfants de la classe article et ayant un id commencant par "price"
        const quantities = document.querySelectorAll('.article span[id^="quantity"]');//cible tous les elements span enfants de la classe article et ayant un id commencant par "quantity"
        let total = 0;
        prices.forEach((price, index) => {
            total += parseInt(price.textContent) * parseInt(quantities[index].textContent);
        });
        document.getElementById('total').textContent = `Total: $${total}`;
    }
</script>
