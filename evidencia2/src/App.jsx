import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductList from "./components/ProductList";
import StatsPanel from "./components/StatsPanel";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://dummyjson.com/products?limit=100")
      .then(res => setProducts(res.data.products))
      .catch(err => console.error(err));
  }, []);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <StatsPanel products={filtered} />

      <ProductList products={filtered} />
    </div>
  );
}

export default App
