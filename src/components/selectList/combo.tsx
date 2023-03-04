import { NextPage } from "next";
import styled from "styled-components";
import { useId } from "react";
import { ComboItem } from "@/interfaces";

const BtnOk = styled.button`
  border: 1px solid black;
  padding: 10px;
  margin: 15px 0;
  cursor: pointer;
  background: black;
  color: white;
`;

const BtnDoEdit = styled.button`
  border: 1px solid black;
  background: white;
  padding-left: 24px;
  position: relative;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  &::before {
    content: "";
    background: black;
    display: inline-block;
    position: absolute;
    left: 10px;
    top: 6px;
    width: 2px;
    height: 14px;
  }
  &::after {
    content: "";
    background: black;
    display: inline-block;
    position: absolute;
    left: 4px;
    top: 12px;
    width: 14px;
    height: 2px;
  }
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

type Props = {
  name: string;
  items: ComboItem[];
  length: number;
  setItem(item: ComboItem): void;
};

const Combo: NextPage<Props> = (props) => {
  const comboLists = props.items;
  const comboName = props.name;
  const id = useId();

  const onHandleChange = (data: ComboItem) => {
    props.setItem(data);
  };

  return (
    <>
      <p>
        {comboName}
        <BtnDoEdit>編集する</BtnDoEdit>
      </p>
      {comboLists.map((comboList) => (
        <div key={comboList.id}>
          <InputRadioItem
            name={props.name}
            type="radio"
            id={id + "__" + comboList.id}
            onChange={() => onHandleChange(comboList)}
          ></InputRadioItem>
          <LabelItem htmlFor={id + "__" + comboList.id}>
            {comboList.id}:{comboList.name}
          </LabelItem>
        </div>
      ))}

      <BtnOk>OK</BtnOk>
    </>
  );
};

export default Combo;
