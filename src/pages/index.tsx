import GlbHead from "@/components/global/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <GlbHead
        title={"トップページ"}
        description="あああ"
        cssOption={"boby{background:red}"}
      />
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
