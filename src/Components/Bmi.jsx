import { useMemo, useState } from "react";

const Bmi = () => {
  const [height, setHeight] = useState(70);
  const [weight, setWeight] = useState(180);

const onWeightChange = (event)=>{
    setWeight(event.target.value)

}
const onHeightChange = (event)=>{
    setHeight(event.target.value)

    
}

const OutPut = useMemo(()=>{
    const calculateHeight = height /100;

    return(weight/(calculateHeight*calculateHeight)).toFixed(1)

},[weight,height])


  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div className="input-swction">
        <p className="slider-output">Weight:{weight} kg</p>
        <input
          type="range"
          className="input-slider"
          step={1}
          min={40}
          max={200}
          onChange={onWeightChange}
        />
        <p className="slider-output">Height:{height} cm</p>
        <input type="range" className="input-slider" min={140} max={220}  onChange={onHeightChange}/>
      </div>
      <div className="output-section">
        <p>Your BMI is </p>
        <p className="output">{OutPut}</p>
      </div>
    </div>
  );
};

export default Bmi;
