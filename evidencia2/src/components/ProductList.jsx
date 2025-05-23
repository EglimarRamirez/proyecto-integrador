function ProductList({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {products.map(p => (
        <div key={p.id} className="border p-2">
          <h2 className="font-semibold">{p.title}</h2>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;