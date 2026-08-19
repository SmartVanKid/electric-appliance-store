const productsData = [
    // รายการสินค้าในหมวด TV
    { id: 1, name: 'Neo OLED 8K Smart TV 65"', category: 'tv', price: 45900, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&auto=format&fit=crop&q=80' },
    { id: 2, name: 'Crystal QLED 4K TV 55"', category: 'tv', price: 21900, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600&auto=format&fit=crop&q=80' },
    { id: 3, name: 'Ultra Slim Frame Smart TV 43"', category: 'tv', price: 14500, img: 'https://images.unsplash.com/photo-1571415060716-baff5f7179e6?w=600&auto=format&fit=crop&q=80' },
    
    // รายการสินค้าในหมวด เมาส์
    { id: 4, name: 'Voltix CyberMouse Gaming RGB', category: 'mouse', price: 2590, img: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=80' },
    { id: 5, name: 'Voltix Silent Ergonomic Mouse', category: 'mouse', price: 1290, img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&auto=format&fit=crop&q=80' },
    
    // รายการสินค้าในหมวด เครื่องชงกาแฟ (แก้ไขรูปภาพใหม่ตรงปก 100%)
    { id: 6, name: 'Quantum Espresso เครื่องชงกาแฟสด Touchscreen', category: 'coffee', price: 15900, img: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=600&auto=format&fit=crop&q=80' },
    
    // รายการสินค้าในหมวด สมาร์ตโฮม
    { id: 7, name: 'Voltix Smart Lock ดิจิทัลล็อคประตูอัจฉริยะ', category: 'smart', price: 8900, img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80' }
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
