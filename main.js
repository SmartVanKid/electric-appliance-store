const productsData = [
    { id: 1, name: 'VOLTIX Neo OLED 4K Smart TV 65"', category: 'tv', price: 32900, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600' },
    { id: 2, name: 'VOLTIX Cinema Soundbar 5.1ch', category: 'tv', price: 8900, img: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600' },
    { id: 3, name: 'VOLTIX Smart Inverter Refrigerator', category: 'coffee', price: 24500, img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600' },
    { id: 4, name: 'VOLTIX CyberMouse Gaming RGB', category: 'mouse', price: 2590, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600' },
    { id: 5, name: 'VOLTIX Silent Ergonomic Mouse', category: 'mouse', price: 1290, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600' },
    { id: 6, name: 'Quantum Espresso เครื่องชงกาแฟสด', category: 'coffee', price: 15900, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600' },
    { id: 7, name: 'VOLTIX Smart Lock ดิจิทัลสแกนนิ้ว', category: 'smart', price: 8900, img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600' }
];

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
        alert(`เพิ่ม "${item.name}" ลงในตะกร้าเรียบร้อยแล้ว!`);
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);
