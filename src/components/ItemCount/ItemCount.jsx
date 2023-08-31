import { useState } from "react";
import Button from 'react-bootstrap/Button';

function ItemCount({stock}) {
  const [count, setCount] = useState(1);

  const handelDecreaseCount = () =>{
    if(count > 1){
      setCount((prev)=> prev - 1);
    }
  };

  const handelIncreaseCount = () =>{
    if(stock > count){
      setCount((prev)=> prev + 1);
    }
  };

  return (
      <div className="containerButtons">
        <Button variant="danger" onClick={handelDecreaseCount}>-</Button>
        <div>{count}</div>
        <Button variant="info" onClick={handelIncreaseCount}>+</Button>
      </div>
  );
}

export default ItemCount;