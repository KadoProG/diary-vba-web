import GlbHead from "@/components/global/head";
import MealItem_Single from "@/components/mealItems/mealItem_single";
import { MealRegisteredDate, MealRegisteredItem } from "@/interfaces";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import styled from "styled-components";

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

const Home: NextPage<Props> = ({ mealData }) => {
  const router = useRouter();
  const { id } = router.query;

  const [mealItem, setMealItem] = useState<MealRegisteredItem[]>([]);
  const [data_arr, setData_arr] = useState(mealData);

  useMemo(() => {
    if (data_arr) {
      const newMealItem =
        data_arr.find((e) => e.id.toString() === id)?.items ?? [];
      setMealItem(newMealItem);
    }
  }, [data_arr]);

  const onBtnUpdateClick = async () => {
    const newData_arr = await fetchJsonData();
    setData_arr(newData_arr.data);
  };

  return (
    <>
      <GlbHead title={"食事メモ"} description="あああ" cssOption={""} />
      <h1>食事メモ 一回の食事ごと</h1>
      <p>{id}</p>
      <DivTitle></DivTitle>

      <DivComponent>
        {mealItem.map((e) => {
          return <MealItem_Single data={e} key={e.id} />;
        })}
      </DivComponent>
      <ButtonUpdate onClick={() => onBtnUpdateClick()}>更新</ButtonUpdate>
      <Link href="/meal">
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
