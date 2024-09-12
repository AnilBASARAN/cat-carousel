
import './App.css';
import Button from "./Button.jsx";
import CATS from "./cat.js";
import {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  const [number,setNumber] = useState(2);
  const [isActiveRight, setIsActiveRight] = useState(true);
  const [isActiveLeft, setIsActiveLeft] = useState(true);
  
  const buttonLeftStyle ="text-center bg-green-200 w-[45px] h-[45px] rounded-lg m-2"
  
  
  const buttonRightStyle ="text-center bg-green-200 w-[45px] h-[45px] rounded-lg m-2"
  
  

  const clickHandlerLeft=()=>{
    
    if (number >= 1) {
              setIsActiveRight(true);
              setNumber(number - 1);
            } else {
              setIsActiveLeft(false);
            }
    
  }

   const clickHandlerRight=()=>{
     
      if (number < CATS.length-1) {
              setNumber(number + 1);
              setIsActiveLeft(true);
            } else {
              setIsActiveRight(false);
            }
    
  }
  
  return (

    
    <div className="flex flex-row items-center justify-center">
    
    <Button
      isOn = {isActiveLeft}
      stylee= {buttonLeftStyle}
      eventHandler={clickHandlerLeft}
      direction ="fa-solid fa-chevron-left" />
      
    <div className=" mainContainer flex flex-col items-center justify-center h-screen">

      
      
      <img
        className="border border-black rounded-t-lg w-[250px] h-[200px] object-cover"
        alt=''
        src={CATS[number].imageUrl} />
      <div className="infoContainer border w-[250px] border-slate-600 rounded-b-lg flex flex-col" >
      

    <div className="p-4 ">

       <div className="flex">
      <div className="mr-2 w-16">name</div>
      <div>{CATS[number].name}</div>
      </div>

    <div className="flex">
      <div className="mr-2 w-16">age</div>
      <div>{CATS[number].age}</div>
      </div>

        <div className="flex">
      <div className="mr-2 w-16">breed</div>
      <div>{CATS[number].breed}</div>
      </div>

        <div className="flex">
      <div className="mr-2 w-16">location</div>
      <div>{CATS[number].location}</div>
      </div>
      
    </div>

        
      </div>
    </div>

      <Button
        isOn = {isActiveRight}
        stylee= {buttonRightStyle}
        
        eventHandler={clickHandlerRight}
        direction ="fa-solid fa-chevron-right" />
      </div>
  );
};

export default App;
