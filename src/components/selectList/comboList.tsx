import { NextPage } from "next";
import styled from "styled-components";
import { ComboItem } from "@/interfaces";
import { useState } from "react";
import Combo from "./combo";

// const BtnOk = styled.button`
//   border: 1px solid black;
//   padding: 10px;
//   margin: 15px 0;
//   cursor: pointer;
//   background: black;
//   color: white;
// `;

const BtnDoEdit = styled.button<{ isEdit: boolean }>`
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
    transform: ${(props) => (props.isEdit ? "rotate(90deg)" : "none")};
    animation-delay: 0.3s;
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

const DivContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

type Props = {
  name: string;
  items: ComboItem[];
  length: number;
  setItem(item: ComboItem): void;
  stVisible: boolean;
};

const ComboList: NextPage<Props> = (props) => {
  const comboLists = props.items;
  const comboName = props.name;

  const [selectItemid, setSelectItemId] = useState<number>();

  const [stVisible, setStVisible] = useState<boolean>(true);

  const onHandleClick = (data: ComboItem) => {
    setSelectItemId(data.id);
    props.setItem(data);
    setStVisible(false);
  };

  // console.log(`親の呼び出し${props.name}`);

  return (
    <>
      <p>
        {comboName}
        <BtnDoEdit onClick={() => setStVisible(true)} isEdit={stVisible}>
          編集する
        </BtnDoEdit>
      </p>
      {/* <p>選択されたもの: </p> */}
      <DivContainer>
        {comboLists.map((comboList) => (
          <Combo
            key={comboList.id}
            item={comboList}
            selected={comboList.id === selectItemid}
            setItem={(item) => onHandleClick(item)}
            stVisible={stVisible}
          />
        ))}
      </DivContainer>

      {/* <BtnOk>OK</BtnOk> */}
    </>
  );
};

export default ComboList;
