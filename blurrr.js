let obj = JSON.parse($response.body);
if ($request.url.indexOf('user/profile') != -1 || $request.url.indexOf('subscribers') != -1) {
    obj.data = obj.data || {};
    obj.data.is_vip = true;
    obj.data.vip_type = "official";
    obj.data.vip_expired_at = 2145916800; 
    obj.data.vip_status = 1;
    obj.data.can_use_vip_assets = true;
}
$done({ body: JSON.stringify(obj) });
