import "./App.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setProductos(res.data.products));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Productos</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map(p => (
          <div key={p.id} className="border p-4">
            <h2 className="font-semibold">{p.title}</h2>
            <p>Precio: ${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

