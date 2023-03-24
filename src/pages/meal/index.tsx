// このファイルはGitで管理しない
import MealItem from "@/components/mealItems/mealItem";
import { MealRegisteredDate } from "@/interfaces";
import Head from "next/head";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

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
  const data: MealRegisteredDate = {
    id: 1, //number
    stamp_date: new Date(2023, 3 - 1, 24, 0, 0, 0), //Date
    stamp_time: new Date(0, 0, 0, 23, 7, 6), // Date[Timeとして利用]
    memo: "あああ", //string
    type: 1, //number
    res_data: {
      pro: 10,
      fat: 20,
      Carb: 30,
      Cal: 400,
    }, // MealNutrition
  };
  const data2: MealRegisteredDate = {
    id: 2, //number
    stamp_date: new Date(2023, 3 - 1, 24), //Date[日付のみ使用]
    stamp_time: new Date(0, 0, 0, 23, 7, 6), // Date[時刻のみ利用]
    memo: "あああ", //string
    type: 2, //number
    res_data: {
      pro: 10,
      fat: 20,
      Carb: 30,
      Cal: 400,
    }, // MealNutrition
  };

  return (
    <>
      <GlobalStyle />
      <Head>
        <title>食事メモ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>食事メモ</h1>
      <DivComponent>
        <MealItem data={data} />
        <MealItem data={data2} />
      </DivComponent>
      <Link href="/">
        <p>戻る</p>
      </Link>
    </>
  );
}
