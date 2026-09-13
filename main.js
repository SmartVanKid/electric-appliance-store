// โหลดข้อมูลตะกร้าจาก localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    let countElements = document.querySelectorAll('#cart-count');
    countElements.forEach(el => {
        el.innerText = cart.length;
    });
}

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`เพิ่ม "${name}" ลงในตะกร้าเรียบร้อยแล้ว! 🛒`);
}

function renderCart() {
    let listContainer = document.getElementById('cart-items-list');
    let totalPriceEl = document.getElementById('total-price');
    
    if (!listContainer) return;

    if (cart.length === 0) {
        listContainer.innerHTML = '<p style="color: var(--text-muted);">ไม่มีสินค้าในตะกร้า</p>';
        if (totalPriceEl) totalPriceEl.innerText = '฿0';
        return;
    }

    let html = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        html += `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid #1e293b;">
                <span>${item.name}</span>
                <div>
                    <span style="color: var(--accent-color); margin-right: 1rem;">฿${item.price.toLocaleString()}</span>
                    <button onclick="removeItem(${index})" style="background: #ef4444; border: none; color: white; padding: 0.2rem 0.6rem; border-radius: 4px; cursor: pointer;">ลบ</button>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = html;
    if (totalPriceEl) totalPriceEl.innerText = `฿${total.toLocaleString()}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('ยังไม่มีสินค้าในตะกร้าครับ!');
        return;
    }
    alert('สั่งซื้อสินค้าสำเร็จ! ขอบคุณที่ใช้บริการ SmartTech ครับ 🎉');
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    renderCart();
}

// รันฟังก์ชันอัปเดตตัวเลขเมื่อเปิดหน้าเว็บ
updateCartCount();
if (window.location.pathname.includes('cart.html')) {
    renderCart();
}
