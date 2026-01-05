let obj = JSON.parse($response.body);
obj.data = obj.data || {};
obj.data.is_vip = true;
obj.data.vip_status = 1;
obj.data.vip_type = "official";
obj.data.vip_expired_at = 4070908800; // 2099 год
obj.data.can_use_vip_assets = true;
obj.data.can_use_pro_features = true;
$done({body: JSON.stringify(obj)});
