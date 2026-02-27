export default async function handler() {
  const res = await fetch(
    "https://www.bhimagold.com/products/" +
    "antique-finished-and-studded-22kt-gold-drops-" +
    "ngo-stdr-osp-s-l-ox-25779567.json"
  );
  const data = await res.json();
  const price = parseFloat(data.product.variants[0].price);
  return Response.json({ price: Math.round(price) }, {
    headers: { "Access-Control-Allow-Origin": "*" }
  });
}