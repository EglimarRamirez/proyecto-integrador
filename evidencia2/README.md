#  Evidencia 2 - Aplicación React con Axios, Filtros y Estadísticas

Este proyecto fue desarrollado en React utilizando Axios para consumir una API pública. Permite buscar productos, filtrarlos en tiempo real y mostrar estadísticas dinámicas. La estructura está organizada en componentes simples y reutilizables.

---

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

---

## 🌐 API externa consumida

Este proyecto utiliza la siguiente API pública para obtener productos:

- [DummyJSON Products API](https://dummyjson.com/products)

---

## ⚙️ Componentes del proyecto

El código está dividido en tres componentes principales:

### `App.jsx`
Componente principal que:
- Obtiene los productos de la API
- Maneja el estado de búsqueda
- Filtra productos
- Renderiza los otros componentes

### `ProductList.jsx`
- Recibe los productos filtrados como prop
- Muestra la lista en forma de tarjetas

### `StatsPanel.jsx`
- Calcula y muestra estadísticas sobre los productos filtrados

---

## 📊 Estadísticas mostradas

1. Total de productos filtrados
2. Producto más caro (título y precio)
3. Producto más barato (título y precio)
4. Cantidad de títulos con más de 20 caracteres
5. Precio total de los productos filtrados
6. Promedio de descuento (`discountPercentage`)

Todas las estadísticas se recalculan automáticamente al filtrar.

---

## 🔎 Búsqueda y comportamiento

- La búsqueda es dinámica y en tiempo real.
- Si el campo de búsqueda está vacío, se muestran todos los productos.
- Las estadísticas se actualizan en función de los resultados filtrados.

---

## 🎨 Diseño básico

- Se utilizaron clases de Tailwind CSS para aplicar un diseño simple.
- Las estadísticas están separadas visualmente con fondo gris claro.
- Las tarjetas de producto están organizadas en una grilla.

---

🖼 Captura de pantalla

![Captura del Proyecto](./screenshot1.png)





