export async function storeFront(query, variables = {}) {
  console.log("hello");
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const result = await response.json();
  return result;
}

export function formatPrice(price) {
  return new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  }).format(price);
}
