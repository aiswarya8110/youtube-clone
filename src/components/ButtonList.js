import React from "react";
import Button from './Button';
import buttons from "../utils/buttonData";

const ButtonList = ()=>{
    return (
        <div className="flex">
            {buttons.map((item, index)=> <Button name={item} key={item+index}/>)}
        </div>
    )
};

export default ButtonList;