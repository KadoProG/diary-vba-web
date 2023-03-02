import { AppProps } from "next/app";

export type ComboListProps = {
  name: string;
  data: ComboProps[];
  length: number;
}

export type ComboProps = {
  id: number;
  name: string;
}
