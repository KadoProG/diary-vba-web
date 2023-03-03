import { NextPage } from "next";
import { ComboListProps } from "../../interfaces";
import styled from "styled-components"
import { useEffect, useState } from "react";

const BtnOkProps = styled.button`
  border: 1px solid black;
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  background: black;
  color:white;
`;

const LabelItemProps = styled.label`
  display: block;
  border: 1px solid black;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
`;

const InputRadioItemProps = styled.input`
display: none;
&:checked {
  & + label {
    background: black;
    color: white;
  }
}
`;


const Combo: NextPage<ComboListProps> = (props) => {
  const [selId, setSelId] = useState(0);
  const comboLists = props.data;

  const onselect = (selNum: number) => {
    setSelId(selNum);
  }

  const onHandleChange = (id: number) => {
    setSelId(id);
  }

  useEffect(()=> {
    console.log(selId);
  },[selId])

  return (
    <>
      <p>コンボです</p>
      {
        comboLists.map(comboList => (
          <>
            <InputRadioItemProps 
            name={props.name}  
            type="radio" 
            id={"combo__"+comboList.id}
            onChange={()=>(onHandleChange(comboList.id))}
            >              
            </InputRadioItemProps>
            <LabelItemProps 
            htmlFor={"combo__"+comboList.id}
            >{comboList.id}:{comboList.name}
            </LabelItemProps>
          </>
        )
        )
      }

      <BtnOkProps>OK</BtnOkProps>
    </>
  )
}

export default Combo
