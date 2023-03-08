import { AppProps } from "next/app";

export type ComboListProps = {
  data: ComboProps[];
  length: number;
}

export type ComboProps = {
  id: number;
  name: string;
}
