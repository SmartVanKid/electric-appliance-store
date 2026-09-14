// ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า (เรียกใช้จากปุ่ม "หยิบใส่ตะกร้า" ในหน้าสินค้าต่างๆ)
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // บันทึกชื่อ ราคา และรูปภาพลงในอาร์เรย์ตะกร้า
    cart.push({ name: name, price: price, image: image });
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // อัปเดตตัวเลขบนไอคอนตะกร้าทันที
    updateCartCount();
    
    alert('เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว!');
}

// ฟังก์ชันอัปเดตตัวเลขจำนวนสินค้าบนไอคอนตะกร้า
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// ทำงานอัตโนมัติเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    // อัปเดตตัวเลขบนตะกร้าทุกครั้งที่เปลี่ยนหน้า
    updateCartCount();
    
    // ส่วนสำหรับการแสดงผลในหน้า cart.html เท่านั้น
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    
    if (!container) return; // ถ้าไม่ใช่หน้า cart.html ให้ข้ามการทำงานส่วนนี้ไป
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // ถ้าไม่มีสินค้าในตะกร้า
    if (cart.length === 0) {
        container.innerHTML = `
            <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <p style="color: var(--text-muted); font-size: 1rem;">ไม่มีสินค้าในตะกร้าของคุณ</p>
        `;
        if (totalElement) totalElement.innerText = '฿0';
        return;
    }
    
    // ถ้ามีสินค้า ให้แสดงรายการพร้อมรูปภาพ
    let htmlContent = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        let itemPrice = Number(item.price) || 0;
        totalPrice += itemPrice;
        
        htmlContent += `
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px; margin-bottom: 1rem; border: 1px solid var(--border-color);">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <img src="${item.image || 'https://via.placeholder.com/80'}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;" alt="${item.name}">
                    <div style="text-align: left;">
                        <h4 style="color: #fff; font-size: 1rem; margin-bottom: 0.3rem;">${item.name}</h4>
                        <p style="color: var(--accent-color); font-weight: bold;">฿${itemPrice.toLocaleString()}</p>
                    </div>
                </div>
                <button onclick="removeFromCart(${index})" style="background: transparent; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.1rem;" title="ลบสินค้า">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    });
    
    container.innerHTML = htmlContent;
    if (totalElement) {
        totalElement.innerText = '฿' + totalPrice.toLocaleString();
    }
});

// ฟังก์ชันลบสินค้าออกจากตะกร้าทีละรายการ
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload(); // รีเฟรชหน้าจอเพื่ออัปเดตรายการใหม่
}

// ฟังก์ชันจำลองการกดสั่งซื้อ
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('ไม่มีสินค้าในตะกร้าของคุณ!');
        return;
    }
    alert('สั่งซื้อสินค้าเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ SmartTech!');
    localStorage.removeItem('cart'); // ล้างข้อมูลในตะกร้าหลังสั่งซื้อ
    location.reload();
}
