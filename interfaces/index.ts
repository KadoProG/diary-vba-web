import { AppProps } from "next/app";

export type ComboList= {
  name: string;
  data: ComboProps[];
  length: number;
}

export type ComboProps = {
  id: number;
  name: string;
}
