import { FC } from "react";

interface CoinInfoProps {
  data: object | undefined;
}

const CoinInfo: FC<CoinInfoProps> = ({ data }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-black"></div>
  );
};

export default CoinInfo;
