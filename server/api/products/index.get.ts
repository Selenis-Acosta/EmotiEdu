export default defineEventHandler(async (event)=>{
  const products =[
    {
      id: 1,
      title: "Producto 1",
      price: 100,
      description: "Producto 1"
    },
    {
      id: 2,
      title: "Producto 2",
      price: 200,
      description: "Producto 2"
    },
    {
      id: 3,
      title: "Producto 3",
      price: 100,
      description: "Producto 3"
    },
  ];

  return products;

  // return $fetch('https://fakestoreapi.com/products')
  // https://672dfaf3fd897971564485cb.mockapi.io/api/

})