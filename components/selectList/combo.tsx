import { NextPage } from "next";
import { ComboListProps } from "../../interfaces";
import styled from "styled-components";
import { useState } from "react";


const Combo: NextPage<ComboListProps> = (props) => {
  const [num, setNum] = useState(0);
  const comboLists = props.data;
  
  const onselect = (selNum: number) => {
    setNum(selNum);
  }
  return (
    <>
    <p>コンボです</p>
    {
      comboLists.map(comboList => {
        const BtnCombo = styled.div`
        border: 1px solid black;
        font-size: 16px;
        line-height: 16px;
        padding: 10px;
        margin: 2px 0;
        cursor: pointer;
        background: ${num === comboList.id ? "black":"white"};
        color: ${num === comboList.id ? "white":"black"};
        `;
        return (
        <BtnCombo 
        // background={num === comboList.id ? "black":"transparent"}
        // fontWeight={num === comboList.id ? "bold": "normal"}
        onClick={()=>onselect(comboList.id)}
        >{comboList.id}:{comboList.name}</BtnCombo>)
      })
    }
    </>
  )
}

export default Combo