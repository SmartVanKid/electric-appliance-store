// footer.js - สคริปต์สำหรับสร้าง Footer อัตโนมัติทุกหน้า
document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer style="background-color: rgba(7, 9, 14, 0.95); color: #c9d1d9; border-top: 1px solid rgba(0, 255, 128, 0.2); margin-top: auto; padding: 3rem 0 1.5rem 0; font-size: 0.88rem; width: 100%;">
        <div style="width: 90%; max-width: 1200px; margin: 0 auto 2rem auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem; text-align: left;">
            <div>
                <a href="index.html" style="display: inline-block; margin-bottom: 1rem; font-size: 1.4rem; font-weight: 800; color: #fff; text-decoration: none;">
                    <i class="fa-solid fa-bolt" style="color:#00ff80;"></i> Smart<span>Tech</span>
                </a>
                <p style="font-size: 0.85rem; line-height: 1.6; max-width: 320px; color: #94a3b8;">
                    ศูนย์รวมเครื่องใช้ไฟฟ้าและอุปกรณ์สมาร์ทโฮมแท้ 100% พร้อมบริการติดตั้งและรับประกันศูนย์ไทย
                </p>
            </div>
            <div>
                <h4 style="color: #00ff80; margin-bottom: 1rem; font-size: 0.95rem;">หมวดสินค้า</h4>
                <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem;">
                    <li><a href="ac.html" style="color: #94a3b8; text-decoration: none;">เครื่องปรับอากาศ (แอร์)</a></li>
                    <li><a href="washing.html" style="color: #94a3b8; text-decoration: none;">เครื่องซักผ้าฝาหน้า & ฝาบน</a></li>
                    <li><a href="kitchen.html" style="color: #94a3b8; text-decoration: none;">เครื่องครัวเตาแม่เหล็กไฟฟ้า IH</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: #00ff80; margin-bottom: 1rem; font-size: 0.95rem;">บริการลูกค้า</h4>
                <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; font-size: 0.85rem;">
                    <li><a href="shipping.html" style="color: #94a3b8; text-decoration: none;">ตรวจสอบสถานะการจัดส่ง</a></li>
                    <li><a href="warranty.html" style="color: #94a3b8; text-decoration: none;">เงื่อนไขการรับประกัน</a></li>
                    <li><a href="service.html" style="color: #94a3b8; text-decoration: none;">ติดต่อศูนย์บริการและติดตั้ง</a></li>
                </ul>
            </div>
            <div>
                <h4 style="color: #00ff80; margin-bottom: 1rem; font-size: 0.95rem;">ติดต่อเรา</h4>
                <p style="font-size: 0.85rem; margin-bottom: 0.5rem; color: #94a3b8;"><i class="fa-solid fa-phone" style="color: #00ff80;"></i> 091-856-8317</p>
                <p style="font-size: 0.85rem; margin-bottom: 1rem; color: #94a3b8;"><i class="fa-solid fa-envelope" style="color: #00ff80;"></i> frame3053@gmail.com</p>
                <div>
                    <a href="https://www.facebook.com/pha.nu.wichy.suwrrn.ratn" target="_blank" title="Facebook ของฉัน">
                        <i class="fa-brands fa-facebook" style="font-size: 1.5rem; color: #fff; background: #1877f2; padding: 8px; border-radius: 50%;"></i>
                    </a>
                </div>
            </div>
        </div>
        <div style="width: 90%; max-width: 1200px; margin: 0 auto; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 1.5rem; text-align: center; font-size: 0.8rem;">
            <p>&copy; 2026 SmartTech Electric Store. All rights reserved.</p>
        </div>
    </footer>`;

    const existingFooter = document.querySelector('footer');
    if (existingFooter) {
        existingFooter.outerHTML = footerHTML;
    } else {
        document.body.insertAdjacentHTML('beforeend', footerHTML);
    }
});
