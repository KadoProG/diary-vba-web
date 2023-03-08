import Head from "next/head";
import ComboList from "@/components/selectList/comboList";
import { useEffect, useState } from "react";
import { ComboItem, selRangeItem } from "@/interfaces";
import SelRange from "@/components/selectList/selRange";
import Link from "next/link";

export default function Home() {
  const initComboItem: ComboItem = { id: 0, name: "" };
  const [selectedItem, setSelectedItem] = useState<ComboItem>(initComboItem);
  const [selected2Item, setSelected2Item] = useState<ComboItem>(initComboItem);
  const [value, setValue] = useState<number>();
  const data: ComboItem[] = [
    { id: 1, name: "あああ" },
    { id: 2, name: "いいい" },
    { id: 3, name: "ううう" },
    { id: 4, name: "えええ" },
    { id: 5, name: "その他" },
  ];

  const data2: ComboItem[] = [
    { id: 1, name: "はい" },
    { id: 2, name: "いいえ" },
  ];

  const data3: selRangeItem = {
    min: 0,
    max: 100,
    init: 50,
  };

  // useEffect(() => {
  //   console.log(value);
  // }, [value]);

  return (
    <>
      <Head>
        <title>Next Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>アンケート</h1>
      <Link href="/">
        <p>戻る</p>
      </Link>
      {/* <p>
        {selectedItem === initComboItem
          ? "何も選択されていません"
          : `選択されたものは: ${selectedItem.id}:${selectedItem.name}`}
      </p> */}
      <ComboList
        name={"質問1あああああああああああああああああああああああああ"}
        items={data}
        length={data.length}
        setItem={(item) => setSelectedItem(item)}
        stVisible={selectedItem === initComboItem}
      />
      {/* <p>
        {selected2Item === initComboItem
          ? "何も選択されていません"
          : `選択されたものは: ${selected2Item.id}:${selected2Item.name}`}
      </p> */}
      <ComboList
        name={"質問2"}
        items={data2}
        length={data2.length}
        setItem={(item) => setSelected2Item(item)}
        stVisible={selected2Item === initComboItem}
      />
      <SelRange
        name={"質問3"}
        // min={data3.min}
        // max={data3.max}
        // init={data3.init}
        item={data3}
        setValue={(value) => setValue(value)}
      />
    </>
  );
}