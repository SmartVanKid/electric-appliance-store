let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    let countElements = document.querySelectorAll('#cart-count, #cart-badge');
    let totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    countElements.forEach(el => { el.innerText = totalQty; });
}

function addToCart(name, price, image) {
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + 1;
    } else {
        cart.push({ name: name, price: price, image: image || '', qty: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`เพิ่ม "${name}" ลงในตะกร้าเรียบร้อยแล้ว! 🛒`);
}

function changeQty(index, amount) {
    if (!cart[index].qty) cart[index].qty = 1;
    cart[index].qty += amount;
    
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('ไม่มีสินค้าในตะกร้าครับ');
        return;
    }
    alert('ดำเนินการสั่งซื้อสำเร็จ ขอบคุณที่ใช้บริการ Smart Tech!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    if (typeof renderCart === 'function') renderCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    if (typeof renderCart === 'function') {
        renderCart();
    }
});
