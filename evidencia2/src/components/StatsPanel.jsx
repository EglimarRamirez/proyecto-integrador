function StatsPanel({ products }) {
  if (products.length === 0) return <p>No hay productos para mostrar.</p>;

  const total = products.length;
  const max = products.reduce((a, b) => (a.price > b.price ? a : b));
  const min = products.reduce((a, b) => (a.price < b.price ? a : b));
  const largos = products.filter(p => p.title.length > 20).length;
  const totalPrecio = products.reduce((sum, p) => sum + p.price, 0);
  const promedioDescuento = (products.reduce((sum, p) => sum + p.discountPercentage, 0) / total).toFixed(2);

  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h2 className="text-lg font-bold mb-2">Estadísticas</h2>
      <ul className="list-disc pl-5">
        <li>Total productos: {total}</li>
        <li>Más caro: {max.title} (${max.price})</li>
        <li>Más barato: {min.title} (${min.price})</li>
        <li>Títulos largos (+20 letras): {largos}</li>
        <li>Total precios: ${totalPrecio.toFixed(2)}</li>
        <li>Promedio de descuento: {promedioDescuento}%</li>
      </ul>
    </div>
  );
}

export default StatsPanel;