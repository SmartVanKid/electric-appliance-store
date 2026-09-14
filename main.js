// ฟังก์ชันสำหรับเพิ่มสินค้าลงในตะกร้า
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // ตรวจสอบว่ามีสินค้านี้อยู่ในตะกร้าหรือยัง ถ้ามีแล้วให้เพิ่มจำนวน (+1)
    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        // ถ้ายังไม่มี ให้เพิ่มสินค้าใหม่เข้าไปพร้อมกำหนด quantity เป็น 1
        cart.push({ name: name, price: price, image: image, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว!');
}

// ฟังก์ชันอัปเดตตัวเลขจำนวนสินค้าบนไอคอนตะกร้า
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    let countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = totalCount;
    }
}

// ทำงานอัตโนมัติเมื่อหน้าเว็บโหลดเสร็จ
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    
    const container = document.getElementById('cart-items-container');
    const totalElement = document.getElementById('cart-total');
    
    if (!container) return; // ถ้าไม่ใช่หน้า cart.html ให้ข้าม
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        container.innerHTML = `
            <i class="fa-solid fa-cart-shopping" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
            <p style="color: var(--text-muted); font-size: 1rem;">ไม่มีสินค้าในตะกร้าของคุณ</p>
        `;
        if (totalElement) totalElement.innerText = '฿0';
        return;
    }
    
    let htmlContent = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        let itemPrice = Number(item.price) || 0;
        let itemQty = item.quantity || 1;
        totalPrice += itemPrice * itemQty;
        
        htmlContent += `
            <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px; margin-bottom: 1rem; border: 1px solid var(--border-color); flex-wrap: wrap; gap: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <img src="${item.image || 'https://via.placeholder.com/80'}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 8px;" alt="${item.name}">
                    <div style="text-align: left;">
                        <h4 style="color: #fff; font-size: 1rem; margin-bottom: 0.3rem;">${item.name}</h4>
                        <p style="color: var(--accent-color); font-weight: bold;">฿${itemPrice.toLocaleString()}</p>
                    </div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <!-- ปุ่มเพิ่ม-ลด จำนวนสินค้า -->
                    <div style="display: flex; align-items: center; background: rgba(255,255,255,0.08); border-radius: 6px; border: 1px solid var(--border-color);">
                        <button onclick="changeQuantity(${index}, -1)" style="background: transparent; border: none; color: #fff; padding: 0.3rem 0.8rem; cursor: pointer; font-size: 1rem;">-</button>
                        <span style="color: #fff; padding: 0 0.5rem; font-weight: bold;">${itemQty}</span>
                        <button onclick="changeQuantity(${index}, 1)" style="background: transparent; border: none; color: #fff; padding: 0.3rem 0.8rem; cursor: pointer; font-size: 1rem;">+</button>
                    </div>
                    
                    <button onclick="removeFromCart(${index})" style="background: transparent; border: none; color: #ff4d4d; cursor: pointer; font-size: 1.1rem;" title="ลบสินค้า">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = htmlContent;
    if (totalElement) {
        totalElement.innerText = '฿' + totalPrice.toLocaleString();
    }
});

// ฟังก์ชันปรับเปลี่ยนจำนวนสินค้า (+ หรือ -)
function changeQuantity(index, amount) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity = (cart[index].quantity || 1) + amount;
        
        // ถ้าจำนวนลดลงเหลือ 0 หรือน้อยกว่า ให้ลบสินค้านั้นออกจากตะกร้า
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload(); // รีเฟรชหน้าจอเพื่ออัปเดตราคาและจำนวน
    }
}

// ฟังก์ชันลบสินค้าออกจากตะกร้า
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

// ฟังก์ชันจำลองการกดสั่งซื้อ
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('ไม่มีสินค้าในตะกร้าของคุณ!');
        return;
    }
    alert('สั่งซื้อสินค้าเรียบร้อยแล้ว ขอบคุณที่ใช้บริการ SmartTech!');
    localStorage.removeItem('cart');
    location.reload();
}
// สคริปต์เสริมช่วยบังคับเพิ่มเอฟเฟกต์การ์ดสินค้าทุกหน้า
document.addEventListener("DOMContentLoaded", function() {
    const allCards = document.querySelectorAll('.product-card, .card, [class*="product"], [class*="item"]');
    
    allCards.forEach(card => {
        card.classList.add('product-card');
        card.style.setProperty('background', '#0d1117', 'important');
        card.style.setProperty('border', '1px solid rgba(0, 255, 128, 0.2)', 'important');
        card.style.setProperty('border-radius', '16px', 'important');
        card.style.setProperty('transition', 'transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease', 'important');
        
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px)';
            card.style.borderColor = '#00ff80';
            card.style.boxShadow = '0 12px 30px rgba(0, 255, 128, 0.25), 0 0 15px rgba(0, 255, 128, 0.15)';
            card.style.zIndex = '999';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.borderColor = 'rgba(0, 255, 128, 0.2)';
            card.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
            card.style.zIndex = '1';
        });
    });
});
