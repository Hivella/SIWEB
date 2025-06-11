let products = [
  {
    id: 1,
    name: "T-Shirt SUPIMA Katun Kerah Bulat dengan Lengan Pendek",
    price: 199000,
    stock: 20,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/477678/item/idgoods_53_477678_3x4.jpg?width=494',
  },
  {
    id: 2,
    name: "Jaket Blouson Pendek",
    price: 899000,
    stock: 11,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/475403/item/idgoods_38_475403_3x4.jpg?width=494',
  },
  {
    id: 3,
    name: "AIRism Katun T-Shirt Oversize Kerah Bulat",
    price: 249000,
    stock: 11,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/465185/item/idgoods_02_465185_3x4.jpg?width=494',
  },
];

export async function GET() {
  return Response.json(products);
}

export async function PUT(req: Request) {
  const body = await req.json();
  products = products.map((prod) =>
    prod.id === body.id ? { ...prod, ...body } : prod
  );
  return Response.json({ success: true });
}

export async function POST(req: Request) {
  const newProduct = await req.json();
  const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const productToAdd = { ...newProduct, id: nextId, price: Number(newProduct.price), stock: Number(newProduct.stock) };
  products.push(productToAdd);
  return Response.json({ success: true, product: productToAdd });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  products = products.filter((prod) => prod.id !== Number(id));
  return Response.json({ success: true });
}