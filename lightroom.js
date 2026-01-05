let obj = JSON.parse($response.body);
obj.entitlements = [{"status":"active","enforcement_method":"f_e","name":"lightroom_mobile_full_bundle","expires_at":"2038-01-01T00:00:00Z"}];
$done({ body: JSON.stringify(obj) });
