import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Combo from '../../components/selectList/combo'
import { ComboListProps, ComboProps } from '../../interfaces'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const data: ComboProps[] = [
    {id: 1,name: "あああ"},
    {id: 2,name: "いいい"},
    {id: 3,name: "ううう"},
    {id: 4,name: "えええ"}
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>あああ</h1>
      <Combo key={"aaa"} name={"aaa"} data={data} length={data.length} />
    </>
  )
}
