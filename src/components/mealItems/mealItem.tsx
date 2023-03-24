import { MealRegisteredDate, MealType } from "@/interfaces";
import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";

type Props = {
  data: MealRegisteredDate;
};

const DivItem = styled.div`
  border-top: 1px solid black;
  /* border-bottom: 1px solid black; */
`;

const DivMealType = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  width: 60px;
  text-align: center;
  height: 24px;
  line-height: 24px;
  background: rgb(240, 240, 240);
`;

const DivFlex = styled.div<{ justify: string }>`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

const DivMealMid = styled.div`
  flex: 10;
  & p {
    font-size: 16px;
    line-height: 28px;
    &:first-child {
      padding-left: 10px;
    }
    &:last-child {
      flex: 1;
      font-size: 14px;
      text-align: right;
      padding-right: 10px;
      overflow: hidden;
      white-space: nowrap; // 折返し禁止
    }
  }
`;

// 矢印の部分
const DivMealRight = styled.div`
  width: 30px;
  /* position: relative; */
  cursor: pointer;
  & div {
    /* background: green; */
    width: 100%;
    height: 100%;
    position: relative;
    &::before {
      content: "";
      transition: 0.3s;
      position: absolute;
      top: 32px;
      left: 0;
      width: 18px;
      height: 1px;
      background: black;
      transform: rotate(-35deg);
    }
    &::after {
      content: "";
      transition: 0.3s;
      position: absolute;
      top: 22px;
      left: 0;
      width: 18px;
      height: 1px;
      background: black;
      transform: rotate(35deg);
    }

    &:hover {
      &::before {
        height: 2px;
        border-radius: 1px;
        transform: rotate(-35deg) translate(5px, 3px);
      }
      &::after {
        height: 2px;
        border-radius: 1px;
        transform: rotate(35deg) translate(5px, -3px);
      }
    }
  }
`;

const MealItem: NextPage<Props> = (props) => {
  // 食事タイプ（後にデータベースと連携・・・どのコンポーネント、ページで取得すべきか…？）
  const mealType: MealType[] = [
    {
      id: 1,
      ori_name: "朝食",
      kana_name: "ちょうしょく",
      ex_name: "朝食",
      memo: "",
    },
    {
      id: 2,
      ori_name: "昼食",
      kana_name: "昼食",
      ex_name: "昼食",
      memo: "",
    },
    {
      id: 3,
      ori_name: "夕食",
      kana_name: "ゆうしょく",
      ex_name: "夕食",
      memo: "",
    },
    {
      id: 4,
      ori_name: "おやつ",
      kana_name: "おやつ",
      ex_name: "おやつ",
      memo: "",
    },
    {
      id: 5,
      ori_name: "定期ルーティン",
      kana_name: "ていきルーティン",
      ex_name: "定期",
      memo: "",
    },
    {
      id: 6,
      ori_name: "その他",
      kana_name: "そのた",
      ex_name: "その他",
      memo: "",
    },
  ];

  // 食事ー日にち を取得
  const data = props.data;

  // 日にちを取得
  // const stampDate = data.stamp_date;
  const stampTime = data.stamp_time;

  // const strStampDate = `${stampDate.getFullYear()}/${String(
  //   stampDate.getMonth() + 1
  // ).padStart(2, "0")}/${String(stampDate.getDate()).padStart(2, "0")}`;

  // Date型を時刻に変更
  const strStampTime = `${String(stampTime.getHours()).padStart(
    2,
    "0"
  )}:${String(stampTime.getMinutes()).padStart(2, "0")}`;

  // 食事の詳細取得は後ほど作成
  const mealTmpData: string[] = ["卵焼", "飯", "7ｶﾌｪ"];

  return (
    <DivItem>
      <DivFlex justify="none">
        <DivMealType>
          {mealType.find((e) => e.id === data.type)?.ex_name ?? "なし"}
        </DivMealType>
        <DivMealMid>
          <p>
            {mealTmpData.map((value) => {
              return <>{value} </>;
            })}
          </p>
          <DivFlex justify="space-between">
            <p>{strStampTime}</p>
            <p>
              P {data.res_data.pro} F {data.res_data.fat} C {data.res_data.Carb}
            </p>
          </DivFlex>
        </DivMealMid>
        <DivMealRight>
          <Link href={`/meal/day/${data.id}`}>
            <div></div>
          </Link>
        </DivMealRight>
      </DivFlex>
    </DivItem>
  );
};

export default MealItem;
