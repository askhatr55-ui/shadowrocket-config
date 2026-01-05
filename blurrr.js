let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    obj.data = obj.data || {};
    obj.data.is_vip = true;
    obj.data.vip_type = "official";
    obj.data.vip_expired_at = 2145916800;
    obj.data.vip_status = 1;
    obj.data.can_use_vip_assets = true;
    $done({ body: JSON.stringify(obj) });
  } catch (e) {
    $done({});
  }
} else {
  $done({});
}
