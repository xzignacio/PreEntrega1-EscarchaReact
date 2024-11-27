const products = [
    {
      id: "1",
      name: "Remera oversize",
      price: 1000,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-1.jpg",
      stock: 25,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "2",
      name: "Remera oversize",
      price: 800,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-2.png",
      stock: 16,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "3",
      name: "Remera oversize",
      price: 1200,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-3.jpg",
      stock: 0,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "4",
      name: "Remera oversize",
      price: 1200,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-4.png",
      stock: 0,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "5",
      name: "Remera oversize",
      price: 800,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-5.png",
      stock: 16,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "6",
      name: "Remera overzise",
      price: 800,
      category: "Remeras",
      img: "../public/img/remera-kurai-streetwear-6.jpg",
      stock: 16,
      description: "Remera de alta calidad estilo urbano para estar a la moda en 2024, estilo oversize | ancho.",
    },
    {
      id: "7",
      name: "Pantalon Baggie",
      price: 1200,
      category: "Pantalon",
      img: "../public/img/pantalon-kurai-1.jpg",
      stock: 0,
      description: "Pantalones de alta calidad, jeans estilo baggie que son mas anchos para mayor comodiad.",
    },
    {
      id: "8",
      name: "Pantalon Baggie",
      price: 1200,
      category: "Pantalon",
      img: "../public/img/pantalon-kurai-2.jpg",
      stock: 0,
      description: "Pantalones de alta calidad, jeans estilo baggie que son mas anchos para mayor comodiad.",
    },
    {
      id: "9",
      name: "Pantalon Baggie",
      price: 1200,
      category: "Pantalon",
      img: "../public/img/pantalon-kurai-3.jpg",
      stock: 0,
      description: "Pantalones de alta calidad, jeans estilo baggie que son mas anchos para mayor comodiad.",
    },
  ];
  
  //todos los productos
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  //productos por categoria
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  //un solo producto por id
  export const getProductByID = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productId));
      }, 1000);
    });
  };
