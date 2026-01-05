/*
 * VSCO Unlock by NobyDa
 */
const resp = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

if (typeof $response == "undefined") {
    // Часть для Request: удаляем ETag, чтобы сервер прислал полные данные
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    resp.headers = $request.headers;
    $done(resp);
} else if (obj && obj.subscriber) {
    // Часть для Response: рисуем премиум
    const info = {
        "expires_date": "2099-01-01T00:00:00Z",
        "original_purchase_date": "2023-01-01T00:00:00Z",
        "purchase_date": "2023-01-01T00:00:00Z",
        "ownership_type": "PURCHASED",
        "store": "app_store"
    };
    const prod = "com.circles.fin.premium.yearly";
    obj.subscriber.subscriptions[prod] = info;
    obj.subscriber.entitlements["membership"] = {
        ...info,
        "product_identifier": prod
    };
    resp.body = JSON.stringify(obj);
    $done(resp);
} else {
    $done({});
}
