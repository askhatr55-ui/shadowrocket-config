/*
 * Blurrr VIP Unlock by Maasea
 */
let obj = JSON.parse($response.body);

if (obj.data) {
    obj.data.is_vip = true;
    obj.data.vip_type = "official";
    obj.data.vip_status = 1;
    obj.data.vip_expired_at = 2145916800; // 2038 год
    obj.data.can_use_vip_assets = true;
    
    // Если есть данные о текущем пакете, меняем его на годовой
    if (obj.data.current_package) {
        obj.data.current_package.id = "com.blurrr.app.yearly";
        obj.data.current_package.name = "Yearly VIP";
    }
}

$done({ body: JSON.stringify(obj) });
