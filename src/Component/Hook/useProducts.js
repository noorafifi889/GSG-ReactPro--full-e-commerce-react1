import { useState, useEffect } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          id: product.id,
          title: product.title.split(" ").slice(0, 3).join(" "),
          description: product.description,
          price: product.price,
          originalPrice: product.price * 1.2,
          discount: 15,
          reviews: Math.floor(Math.random() * 100),
          image: product.image.replace("http://", "https://"),
        }));
        setProducts(formattedProducts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};