// ClipPilot release configuration — update this file before packaging.
// Lemon Squeezy IDs are numeric. Keep every currently entitled variant in
// PRO_VARIANT_IDS; this can include monthly, annual, and lifetime-deal variants.
globalThis.CLIPPILOT_PRODUCT_CONFIG = Object.freeze({
  PRODUCT_NAME: "ClipPilot Pro",
  MONTHLY_PRICE_USD: 5,

  // Replace with your Lemon Squeezy hosted checkout URL.
  CHECKOUT_URL: "https://krrish.lemonsqueezy.com/checkout/buy/8b7ba19a-ab88-4203-964f-dce6297c1594",

  // Replace with the numeric Store ID shown in Lemon Squeezy.
  LEMON_SQUEEZY_STORE_ID: 427880,

  // Add the $5/month variant ID here.
  MONTHLY_VARIANT_IDS: [2005192],

  // Add or remove lifetime-deal variant IDs whenever offers change.
  LIFETIME_VARIANT_IDS: [2005204],

  // License validation interval and offline grace window.
  VALIDATE_EVERY_HOURS: 24,
  OFFLINE_GRACE_HOURS: 72,

  SUPPORT_EMAIL: "support@builtbykris.com"
});


