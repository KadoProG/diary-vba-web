import { NextPage } from "next";

type Props = {
  name: string;
};

const MealItem: NextPage<Props> = (props) => {
  const name = props.name;
  return (
    <>
      <p>あああ</p>
    </>
  );
};

export default MealItem;
