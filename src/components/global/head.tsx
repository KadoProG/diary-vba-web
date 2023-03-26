import { NextPage } from "next";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";

type Props = {
  title: string; // Webの上部に表示されるタイトル
  description: string;
  cssOption: string;
};

const GlobalStyle = createGlobalStyle<{ cssOption: string }>`
  * {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    a {
        /* color: $base-color; */
    }
  }

  ${(props) => props.cssOption}
`;

const GlbHead: NextPage<Props> = (props) => {
  // タイトル
  const title = props.title;
  const description = props.description;
  const ICatchImgPath = "http://localhost:3000/images/01.jpg"; // contentsには絶対パスが必要
  return (
    <>
      <GlobalStyle cssOption={props.cssOption} />
      <Head>
        <meta charSet={"UTF-8"} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="php,nextjs,react,web開発,API,Webフロントエンドエンジニア"
        />
        <meta property="og:site_name" content={title + "｜KadoBloG"} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://sub3.fast5-blog.com/" />
        <meta property="og:image" content={ICatchImgPath} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://sub3.fast5-blog.com/" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ICatchImgPath} />

        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/myself_2022-04-22.jpg"
        />
      </Head>
    </>
  );
};

export default GlbHead;
