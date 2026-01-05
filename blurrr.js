/*
 * Blurrr VIP Unlock (2026 Stable)
 */
let obj = JSON.parse($response.body);

// Подмена профиля и статуса подписки
if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = "official";
    obj.data.vip_status = 1;
    obj.data.vip_expired_at = 4070908800; // 2099 год
    obj.data.can_use_vip_assets = true;
    
    // Имитация активного пакета
    if (obj.data.current_package) {
        obj.data.current_package = {
            "id": "com.blurrr.app.yearly",
            "name": "Yearly Premium",
            "type": "yearly"
        };
    }
}

$done({ body: JSON.stringify(obj) });
