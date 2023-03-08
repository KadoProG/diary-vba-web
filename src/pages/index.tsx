import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>あああ</h1>
      <Link href="./questionnaire">
        <p>アンケートに答える</p>
      </Link>
      <Link href="./meal">
        <p>食事メモのテストサイト</p>
      </Link>
    </>
  );
}
