let obj = JSON.parse($response.body || "{}");

const data = {
    "expires_date": "2099-01-01T00:00:00Z",
    "original_purchase_date": "2023-01-01T00:00:00Z",
    "purchase_date": "2023-01-01T00:00:00Z",
    "store": "app_store",
    "ownership_type": "PURCHASED"
};

if (obj.subscriber) {
    obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
    obj.subscriber.entitlements = obj.subscriber.entitlements || {};
    
    const prodId = "com.circles.fin.premium.yearly";
    obj.subscriber.subscriptions[prodId] = data;
    obj.subscriber.entitlements["membership"] = {
        ...data,
        "product_identifier": prodId
    };
}

$done({ body: JSON.stringify(obj) });
