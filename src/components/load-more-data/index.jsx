import { useEffect } from "react";
import { useState } from "react";
import "./styles.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        //   setProducts(result.products);
        setProducts((prev) => [...prev, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const LoadAdditionalData = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length == 100) {
      setDisableButton(true);
    }
  }, [products]);

  if (loading) {
    return <div>Loading data!! please wait...</div>;
  }

  return (
    <div className="load-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={LoadAdditionalData}>
          Load More Products
        </button>
        {disableButton && <p>You have reached limit of 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMoreData;
