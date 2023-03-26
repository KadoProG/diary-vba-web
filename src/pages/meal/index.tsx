// このファイルはGitで管理しない
import MealItem from "@/components/mealItems/mealItem";
import { MealRegisteredDate } from "@/interfaces";
import Link from "next/link";
import styled from "styled-components";
import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import GlbHead from "@/components/global/head";

const DivComponent = styled.div`
  /* width: 767px; */
  width: 325px;
  max-width: 100vw;
  border-bottom: 1px solid black;
`;

const ButtonUpdate = styled.button`
  margin: 5px;
  border: 1px solid black;
  background: white;
  font-size: 14px;
  padding: 4px;
  cursor: pointer;
`;

type SearchMealRegisterData = {
  success: boolean;
  data: MealRegisteredDate[];
};
type Props = {
  mealData: MealRegisteredDate[];
};

// JSONデータを取得[APIより]
const fetchJsonData = async (): Promise<SearchMealRegisterData> => {
  const res = await fetch("http://localhost:3000/api/test");
  const result = res.json();
  return result;
};

const cssOption = `
body {
  background: linear-gradient(to right, #77ffff, #d4d4ff);
  -webkit-animation: amazon__btn 5s linear infinite;
  animation: amazon__btn 5s linear infinite;
}
a {
  color: black;
  text-decoration: none;
}
`;

const Home: NextPage<Props> = ({ mealData }) => {
  const [data_arr, setData_arr] = useState(mealData);

  const onBtnUpdateClick = async () => {
    const newData_arr = await fetchJsonData();
    setData_arr(newData_arr.data);
  };

  return (
    <>
      <GlbHead
        title={"食事登録リスト"}
        description="トップページです"
        cssOption={cssOption}
      />
      <h1>食事メモ</h1>
      <DivComponent>
        {data_arr.map((data) => {
          return <MealItem data={data} key={data.id} />;
        })}
      </DivComponent>
      <ButtonUpdate onClick={() => onBtnUpdateClick()}>更新</ButtonUpdate>
      <Link href="/">
        <p>戻る</p>
      </Link>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const jsonData = await fetchJsonData();
  return {
    props: { mealData: jsonData.data },
  };
};
