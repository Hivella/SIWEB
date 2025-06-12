let products = [
  {
    id: 1,
    name: "KIDS Kaos Polo Dry Pique",
    price: 149000,
    stock: 20,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/474645/item/idgoods_00_474645_3x4.jpg?width=494',
  },
  {
    id: 2,
    name: "GIRLS Celana Lebar Rib",
    price: 149000,
    stock: 11,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITUqbNGlGsbKAsazVtZRY1TSlaGIyzIPUxA&s',
  },
  {
    id: 3,
    name: "KIDS Celana Rileks Lebar Linen Blend",
    price: 199000,
    stock: 10,
    image: 'https://image.uniqlo.com/UQ/ST3/id/imagesgoods/475771/item/idgoods_31_475771_3x4.jpg?width=494',
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