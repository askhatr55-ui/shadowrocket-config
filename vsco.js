const headers = $request.headers;
delete headers["x-revenuecat-etag"];
delete headers["X-RevenueCat-ETag"];
$done({ headers });
