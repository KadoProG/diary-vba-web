import { MealMaker, MealRegisteredItem } from "@/interfaces";
import { NextPage } from "next";
import styled from "styled-components";

type Props = {
  data: MealRegisteredItem;
};

const DivItem = styled.div`
  border-top: 1px solid black;
  /* border-bottom: 1px solid black; */
`;

const DivMealImage = styled.div`
  /* margin-top: 10px; */
  border: 1px solid black;
  /* width: 60px; */
  /* height: 24px; */
  margin: 6px;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 24px;
  background: rgb(240, 240, 240);
`;

const DivFlex = styled.div<{ justify: string }>`
  display: flex;
  justify-content: ${(props) => props.justify};
`;

const PMealQuant = styled.div`
  position: absolute;
  background: rgb(240, 240, 240);
  right: 0;
  bottom: 10px;
`;

const DivMealMid = styled.div`
  flex: 1;
  position: relative;
  // heightは62pxになるように
  & p {
    // 上[メーカー]に適用
    &:first-child {
      font-size: 14px;
      line-height: 18px;
    }

    // 真ん中[食品名称]に適用
    font-size: 16px;
    line-height: 26px;

    // 下[PFCバランス]に適用
    &:last-child {
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap; // 折返し禁止
    }
  }
`;

// 矢印の部分
const DivMealRight = styled.div`
  width: 30px;
  height: 100%;
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

const MealItem_Single: NextPage<Props> = (props) => {
  // // 食事タイプ（後にデータベースと連携・・・どのコンポーネント、ページで取得すべきか…？）
  // const mealType: MealType[] = [
  //   {
  //     id: 1,
  //     ori_name: "朝食",
  //     kana_name: "ちょうしょく",
  //     ex_name: "朝食",
  //     memo: "",
  //   },
  //   {
  //     id: 2,
  //     ori_name: "昼食",
  //     kana_name: "昼食",
  //     ex_name: "昼食",
  //     memo: "",
  //   },
  //   {
  //     id: 3,
  //     ori_name: "夕食",
  //     kana_name: "ゆうしょく",
  //     ex_name: "夕食",
  //     memo: "",
  //   },
  //   {
  //     id: 4,
  //     ori_name: "おやつ",
  //     kana_name: "おやつ",
  //     ex_name: "おやつ",
  //     memo: "",
  //   },
  //   {
  //     id: 5,
  //     ori_name: "定期ルーティン",
  //     kana_name: "ていきルーティン",
  //     ex_name: "定期",
  //     memo: "",
  //   },
  //   {
  //     id: 6,
  //     ori_name: "その他",
  //     kana_name: "そのた",
  //     ex_name: "その他",
  //     memo: "",
  //   },
  // ];

  // メーカー・ブランド・自炊等タイプ
  const mealMakerType: MealMaker[] = [
    {
      id: 1,
      ori_name: "自炊・料理",
      ex_name: "自炊",
      kana_name: "じすい・りょうり",
      memo: "自分で作るんです",
    },
    {
      id: 2,
      ori_name: "Web情報",
      ex_name: "Web",
      kana_name: "うぇぶ",
      memo: "Webサイト等からのデータ",
    },
    {
      id: 3,
      ori_name: "セブンイレブン",
      ex_name: "セブン",
      kana_name: "せぶんいれぶん",
      memo: "日本の大手コンビニ",
    },
  ];

  // 食事ー単体 を取得
  const data = props.data;

  // 個数
  const strTmpQuant =
    data.base_int_quant !== 0
      ? data.base_int_quant + data.pack_unit
      : data.base_gram_quant + data.pack_unit;

  const strQuant =
    data.gram_unit === "" ? strTmpQuant : strTmpQuant + "/" + data.gram_unit;

  return (
    <DivItem>
      <DivFlex justify="none">
        <DivMealImage></DivMealImage>
        <DivMealMid>
          <p>
            {mealMakerType.find((e) => e.id === data.maker_id)?.ex_name ??
              "不明なメーカー"}
          </p>
          <p>{data.meal_ori_name}</p>
          <DivFlex justify="space-between">
            <p>
              P {Math.round(data.res_data.pro * 100) / 100} F{" "}
              {Math.round(data.res_data.fat * 100) / 100} C{" "}
              {Math.round(data.res_data.Carb * 100) / 100}
            </p>
          </DivFlex>
          <PMealQuant>{strQuant}</PMealQuant>
        </DivMealMid>
        <DivMealRight>
          {/* <Link href={`/meal/day/${data.id}`}> */}
          <div></div>
          {/* </Link> */}
        </DivMealRight>
      </DivFlex>
    </DivItem>
  );
};

export default MealItem_Single;
