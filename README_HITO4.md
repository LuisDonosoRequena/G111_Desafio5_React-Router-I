# Pizzería Mamma Mía — Hito 4: Consumo de APIs con React


## Requisitos
- Node.js y npm instalados.
- Backend de pizzas corriendo en `http://localhost:5000`.

## Ejecutar backend
En la carpeta del backend, instalar dependencias y levantar servidor:
```bash
npm install
npm start
```

## Ejecutar frontend
Desde la carpeta de este proyecto:
```bash
npm install
npm run dev
```

## Endpoints consumidos
- Listado: `GET http://localhost:5000/api/pizzas` (Home, usa `fetch` y `useEffect`).
- Detalle fijo: `GET http://localhost:5000/api/pizzas/p001` (Pizza, usa `fetch` y `useEffect`).

La vista de Home y el detalle de pizza se muestran para poder verificar ambos requerimientos. El botón “Añadir al carrito” es visual y no tiene funcionalidad, como solicita el documento del Hito 4.
