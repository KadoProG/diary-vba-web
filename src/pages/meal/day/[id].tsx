import MealItem_Single from "@/components/mealItems/mealItem_single";
import { MealRegisteredItem } from "@/interfaces";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import styled, { createGlobalStyle } from "styled-components";

const DivTitle = styled.div`
  width: 325px;
  max-width: 100vw;
`;

const DivComponent = styled.div`
  /* width: 767px; */
  width: 325px;
  max-width: 100vw;
  border-bottom: 1px solid black;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    a {
        /* color: $base-color; */
    }
  }
`;

export default function Home() {
  const router = useRouter();
  const { id } = router.query;

  const data: MealRegisteredItem[] = [
    {
      id: 1,
      row: 1,
      meal_id: 1,
      meal_ori_name: "シンプル卵焼き",
      meal_ex_name: "卵焼",
      meal_kana_name: "しんぷるたまごやき",
      memo: "美味やでこれは",
      maker_id: 1,
      bln_compound: true,
      created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      price: 0,
      bln_custom: false,
      base_int_quant: 2,
      base_gram_quant: 0,
      pack_quant: 1,
      pack_unit: "個",
      gram_quant: 1, //消すかも
      gram_unit: "",
      base_data: {
        pro: 7.3,
        fat: 6.18,
        Carb: 0.18,
        Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4,
      },
      res_data: {
        pro: 7.3 * 2,
        fat: 6.18 * 2,
        Carb: 0.18 * 2,
        Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4 * 2,
      },
      child: [
        {
          id: 1,
          row: 1,
          meal_id: 1,
          meal_row: 1,
          meal_ori_name: "生卵",
          meal_ex_name: "卵",
          meal_kana_name: "なまたまご",
          meal_memo: "たまごー",
          maker_id: 1,
          created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          price: 0,
          base_type: 1,
          base_visible: 1,
          base_int_quant: 1,
          base_gram_quant: 0,
          pack_quant: 1,
          pack_unit: "個",
          gram_quant: 1,
          gram_unit: "",
          base_data: {
            pro: 7.3,
            fat: 6.18,
            Carb: 0.18,
            Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4,
          },
          res_data: {
            pro: 7.3,
            fat: 6.18,
            Carb: 0.18,
            Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4 * 2,
          },
        },
        {
          id: 1,
          row: 1,
          meal_id: 1,
          meal_row: 2,
          meal_ori_name: "だしの素",
          meal_ex_name: "だしの素",
          meal_kana_name: "だしのもと",
          meal_memo: "卵じゃない、出汁の味だ",
          maker_id: 1,
          created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          price: 0,
          base_type: 1,
          base_visible: 1,
          base_int_quant: 2,
          base_gram_quant: 0,
          pack_quant: 1,
          pack_unit: "g",
          gram_quant: 1,
          gram_unit: "",
          base_data: {
            pro: 0.27,
            fat: 0.01,
            Carb: 0.3,
            Cal: 0.27 * 4 + 0.01 * 9 + 0.3 * 4,
          },
          res_data: {
            pro: 0.27 * 2,
            fat: 0.01 * 2,
            Carb: 0.3 * 2,
            Cal: 0.27 * 4 + 0.01 * 9 + 0.3 * 4 * 2,
          },
        },
        {
          id: 1,
          row: 1,
          meal_id: 1,
          meal_row: 3,
          meal_ori_name: "オリーブオイル",
          meal_ex_name: "ｵﾘｰﾌﾞｵｲﾙ",
          meal_kana_name: "おりーぶおいる",
          meal_memo: "健康的だねぇ〜",
          maker_id: 1,
          created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
          updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
          price: 0,
          base_type: 1,
          base_visible: 1,
          base_int_quant: 2,
          base_gram_quant: 0,
          pack_quant: 2,
          pack_unit: "杯",
          gram_quant: 1,
          gram_unit: "大さじ",
          base_data: {
            pro: 0,
            fat: 12,
            Carb: 0,
            Cal: 12 * 9,
          },
          res_data: {
            pro: 0,
            fat: 12 * 2,
            Carb: 0,
            Cal: 12 * 9 * 2,
          },
        },
      ],
    },
    {
      id: 1,
      row: 2,
      meal_id: 2,
      meal_ori_name: "自炊ご飯（白米）",
      meal_ex_name: "飯",
      meal_kana_name: "じすいごはんはくまい",
      memo: "白いものは毒",
      maker_id: 2,
      bln_compound: false,
      created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      price: 0,
      bln_custom: false,
      base_int_quant: 0,
      base_gram_quant: 160,
      pack_quant: 150,
      pack_unit: "g",
      gram_quant: 1,
      gram_unit: "",
      base_data: {
        pro: 7.3,
        fat: 6.18,
        Carb: 0.18,
        Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4,
      },
      res_data: {
        pro: (7.3 * 160) / 150,
        fat: (6.18 * 160) / 150,
        Carb: (0.18 * 160) / 150,
        Cal: 7.3 * 4 + 6.18 * 9 + (0.18 * 4 * 160) / 150,
      },
      child: [],
    },
    {
      id: 1,
      row: 3,
      meal_id: 3,
      meal_ori_name: "セブンカフェ",
      meal_ex_name: "7ｶﾌｪ",
      meal_kana_name: "せぶんかふぇ",
      memo: "7ｶﾌｪ信者！どうもKadoです",
      maker_id: 3,
      bln_compound: false,
      created_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      created_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      updated_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
      updated_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
      price: 0,
      bln_custom: false,
      base_int_quant: 0,
      base_gram_quant: 1,
      pack_quant: 1,
      pack_unit: "杯",
      gram_quant: 1,
      gram_unit: "",
      base_data: {
        pro: 7.3,
        fat: 6.18,
        Carb: 0.18,
        Cal: 7.3 * 4 + 6.18 * 9 + 0.18 * 4,
      },
      res_data: {
        pro: (7.3 * 160) / 150,
        fat: (6.18 * 160) / 150,
        Carb: (0.18 * 160) / 150,
        Cal: 7.3 * 4 + 6.18 * 9 + (0.18 * 4 * 160) / 150,
      },
      child: [],
    },
  ];

  // const data_child: MealRegisteredItemChild[] = [];

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>食事メモ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>食事メモ 一回の食事ごと</h1>
      <p>{id}</p>
      <DivTitle></DivTitle>

      <DivComponent>
        {data.map((e) => {
          return <MealItem_Single data={e} key={e.id} />;
        })}
      </DivComponent>
      <Link href="/meal">
        <p>戻る</p>
      </Link>
    </>
  );
}
