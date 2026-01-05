let obj = JSON.parse($response.body);
obj.subscriber.subscriptions = {"com.vsco.subscription.yearly": {"is_sandbox": false, "ownership_type": "PURCHASED", "billing_issues_detected_at": null, "period_type": "normal", "expires_date": "2038-01-01T00:00:00Z", "purchase_date": "2023-01-01T00:00:00Z", "store": "app_store"}};
obj.subscriber.entitlements = {"pro": {"expires_date": "2038-01-01T00:00:00Z", "purchase_date": "2023-01-01T00:00:00Z", "product_identifier": "com.vsco.subscription.yearly"}};
$done({body: JSON.stringify(obj)});
