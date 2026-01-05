const obj = JSON.parse($response.body || "{}");
const data = {
    "expires_date": "2099-01-01T00:00:00Z",
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "purchase_date": "2023-01-01T00:00:00Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
};

if (obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    
    // Идентификаторы для VSCO
    const vscoId = "com.circles.fin.premium.yearly";
    const vscoEnt = "membership";

    obj.subscriber.subscriptions[vscoId] = data;
    obj.subscriber.entitlements[vscoEnt] = {
        ...data,
        "product_identifier": vscoId
    };
}

$done({ body: JSON.stringify(obj) });
