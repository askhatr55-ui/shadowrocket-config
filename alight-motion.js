/*
 * Alight Motion VIP Unlock (Classic Working Version)
 */

let obj = JSON.parse($response.body);

obj = {
  "result": "success",
  "accountStatus": {
    "isVip": true,
    "vipType": "official",
    "vipExpiredAt": 4070908800000, // 2099 год
    "licenses": [
      {
        "id": "com.alightcreative.motion.full_subscription_yearly",
        "period": "yearly",
        "status": "active",
        "type": "official",
        "expiredAt": 4070908800000
      }
    ]
  }
};

$done({ body: JSON.stringify(obj) });
