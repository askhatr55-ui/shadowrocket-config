/* Скрипт для Blurrr VIP - Исправленный */
let body = $response.body;

if (body) {
    try {
        let obj = JSON.parse(body);
        // Проверяем наличие блока data
        if (!obj.data) obj.data = {};
        
        // Устанавливаем VIP параметры
        obj.data.is_vip = true;
        obj.data.vip_type = "official";
        obj.data.vip_expired_at = 2145916800;
        obj.data.vip_status = 1;
        obj.data.can_use_vip_assets = true;
        
        $done({ body: JSON.stringify(obj) });
    } catch (e) {
        console.log("Ошибка парсинга JSON: " + e);
        $done({}); // Если ошибка в данных, просто пропускаем запрос без изменений
    }
} else {
    $done({});
}
