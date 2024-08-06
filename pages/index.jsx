import ProductHeader from "@/components/ProductHeader";
import ProductList from "@/components/product-list/ProductList";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }
  const decreaseCounter = () => {
    setCounter(counter - 1);
  }

  return (
    <div>
      <p data-cy="counter">{counter}</p>
      <button data-cy="add-button" onClick={increaseCounter}>+</button>
      <button onClick={decreaseCounter}>-</button>
    </div>
  )
}

function ProductPage() {
  const headerTitle = '상품 목록 페이지';

  return (
    <div>
      <Counter></Counter>
      {/* <ProductHeader title={headerTitle} />
      <ProductList /> */}
    </div>
  )
}

export default ProductPage;