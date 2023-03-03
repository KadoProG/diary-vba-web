import { NextPage } from "next";
import styled from "styled-components"
import { useEffect, useId, useState } from "react";

const BtnOk = styled.button`
  border: 1px solid black;
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  background: black;
  color:white;
`;

const LabelItem = styled.label`
  display: block;
  border: 1px solid black;
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
`;

const InputRadioItem = styled.input`
display: none;
&:checked {
  & + label {
    background: black;
    color: white;
  }
}
`;

type ComboList = {
  name: string;
  data: ComboProps[];
  length: number;
  setItem(item: ComboProps): void;
}

export type ComboProps = {
  id: number;
  name: string;
}

const Combo: NextPage<ComboList> = (props) => {

  const comboLists = props.data;
  const id = useId();

  const onHandleChange = (data: ComboProps) => {
    props.setItem(data);
  }



  return (
    <>
      <p>コンボです</p>
      {
        comboLists.map(comboList => (
          <div key={comboList.id}>
            <InputRadioItem
              name={props.name}
              type="radio"
              id={id + "__" + comboList.id}
              onChange={() => (onHandleChange(comboList))}
            >
            </InputRadioItem>
            <LabelItem
              htmlFor={id + "__" + comboList.id}
            >{comboList.id}:{comboList.name}
            </LabelItem>
          </div>
        )
        )
      }

      <BtnOk>OK</BtnOk>
    </>
  )
}

export default Combo