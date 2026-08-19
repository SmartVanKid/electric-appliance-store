// ข้อมูลสินค้า
const productsData = [
    { id: 1, name: 'Neo OLED 8K Smart TV 65"', category: 'tv', price: 45900, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'Crystal QLED 4K TV 55"', category: 'tv', price: 21900, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Voltix CyberMouse Gaming RGB', category: 'mouse', price: 2590, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Voltix Silent Ergonomic Mouse', category: 'mouse', price: 1290, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=500&q=80' },
    { id: 5, name: 'CyberClean Air Purifier Pro', category: 'air', price: 6990, img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=500&q=80' },
    { id: 6, name: 'Quantum Espresso Maker Touch', category: 'kitchen', price: 15900, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=500&q=80' }
];

// จัดการ ตะกร้าสินค้า
let cart = JSON.parse(localStorage.getItem('voltix_cart')) || [];

function updateCartCount() {
    const badges = document.querySelectorAll('.cart-badge');
    badges.forEach(b => b.innerText = cart.length);
}

function addToCart(productId) {
    const item = productsData.find(p => p.id === productId);
    if(item) {
        cart.push(item);
        localStorage.setItem('voltix_cart', JSON.stringify(cart));
        updateCartCount();
        alert(`เพิ่ม ${item.name} ลงในตะกร้าเรียบร้อยแล้ว!`);
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
