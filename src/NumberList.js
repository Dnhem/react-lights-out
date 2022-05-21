import NumberItem from "./NumberItem";
import { useState } from "react";

let numbers = [ 4, 5, 6, 7, 8, 9, 10 ];
const NumberList = () => {
  const [ nums, setNums ] = useState(numbers);
  const removeNum = num => {
    setNums(nums.filter(n => n !== num));
  };
  const numList = nums.map(n => <NumberItem num={n} remove={removeNum} />);
  return <ul>{numList}</ul>;
};

export default NumberList;
