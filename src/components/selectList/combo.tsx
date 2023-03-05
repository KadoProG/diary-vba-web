import { ComboItem } from "@/interfaces";
import { NextPage } from "next";
import styled from "styled-components";

type Props = {
  item: ComboItem;
  selected: boolean;
  setItem(item: ComboItem): void;
};
const DivItem = styled.div<{ selected: boolean }>`
  display: block;
  border: 1px solid black;
  padding: 10px;
  margin: 5px 0;
  background: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
`;

const Combo: NextPage<Props> = (props) => {
  const item = props.item;

  const onHandleClick = (data: ComboItem) => {
    props.setItem(data);
  };

  return (
    <DivItem selected={props.selected} onClick={() => onHandleClick(item)}>
      {item.id}:{item.name}
    </DivItem>
  );
};
export default Combo;
