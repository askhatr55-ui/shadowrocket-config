/*
 * VSCO Unlock by NobyDa (2026)
 */
const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
    // Очистка кэша (Request)
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
    $done(resp);
} else if (obj && obj.subscriber) {
    // Выдача подписки (Response)
    const info = {
        "expires_date": "2099-01-01T00:00:00Z",
        "purchase_date": "2023-01-01T00:00:00Z",
        "ownership_type": "PURCHASED",
        "store": "app_store"
    };
    obj.subscriber.subscriptions["com.circles.fin.premium.yearly"] = info;
    obj.subscriber.entitlements["membership"] = {
        ...info,
        "product_identifier": "com.circles.fin.premium.yearly"
    };
    $done({ body: JSON.stringify(obj) });
} else {
    $done({});
}
