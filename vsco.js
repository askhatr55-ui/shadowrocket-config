let resp = {};
let obj = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
} else if (obj && obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    let data = {"expires_date": "2099-01-01T00:00:00Z", "purchase_date": "2023-01-01T00:00:00Z"};
    obj.subscriber.subscriptions["com.circles.fin.premium.yearly"] = data;
    obj.subscriber.entitlements["membership"] = data;
    obj.subscriber.entitlements["membership"].product_identifier = "com.circles.fin.premium.yearly";
    resp.body = JSON.stringify(obj);
}
$done(resp);
