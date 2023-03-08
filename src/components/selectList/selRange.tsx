import { selRangeItem } from "@/interfaces";
import { NextPage } from "next";
import { useState } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  item: selRangeItem;
  setValue(value: number): void;
};

const InputRange = styled.input`
  -webkit-appearance: none; // これ無しだとスタイルがほぼ全く反映されないので注意
  appearance: none;
  cursor: pointer; // カーソルを分かりやすく
  background: gray; // バーの背景色
  height: 2px; // バーの高さ
  /* width: calc(100% - 10px); // スライダーの幅 */
  flex: 1;
  margin: 10px 0;
  /* border-radius: 10px; // バーの端の丸み */
  border: solid 3px white; // バーまわりの線
  outline: 0; /* アウトラインを消して代わりにfocusのスタイルをあてる */
  &:focus {
    box-shadow: 0 0 10px blue;
  }
  // -webkit-向けのつまみ
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // デフォルトのつまみのスタイルを解除
    background: black; // 背景色
    width: 24px; // 幅
    height: 24px; // 高さ
    border-radius: 50%; // 円形に
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
  }
  // -moz-向けのつまみ
  &::-moz-range-thumb {
    background: black; // 背景色
    width: 24px; // 幅
    height: 24px; // 高さ
    border-radius: 50%; // 円形に
    box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.15); // 影
    border: none; // デフォルトの線を消す
  }
  // Firefoxで点線が周りに表示されてしまう問題の解消
  &::-moz-focus-outer {
    border: 0;
  }
  // つまみをドラッグしているときのスタイル
  &:active::-webkit-slider-thumb {
    box-shadow: 0px 5px 10px -2px rgba(0, 0, 0, 0.3);
  }
`;

const InputNum = styled.input`
  background: transparent;
  border: 1px solid black;
  width: 40px;
`;

const DivFlex = styled.div`
  display: flex; // 便利な横並び
`;

const SelRange: NextPage<Props> = (props) => {
  const item = props.item;

  const init: number = item.init ? item.init : item.min;

  const [value, setValue] = useState<number>(init);

  const onHandleChange = (value: string) => {
    let intValue = parseInt(value);
    if (intValue < item.min) intValue = item.min;
    if (intValue > item.max) intValue = item.max;
    setValue(intValue);
    props.setValue(intValue);
  };

  return (
    <>
      <p>{props.name}</p>
      <DivFlex>
        <InputRange
          type="range"
          min={item.min}
          max={item.max}
          value={value}
          onChange={(e) => onHandleChange(e.target.value)}
        />
        <InputNum
          type="number"
          value={value}
          onChange={(e) => onHandleChange(e.target.value)}
        />
      </DivFlex>
    </>
  );
};

export default SelRange;
