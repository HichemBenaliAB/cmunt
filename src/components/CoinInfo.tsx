import { FC } from "react";

interface CoinInfoProps {
  data: any | undefined;
}

const CoinInfo: FC<CoinInfoProps> = ({ data }) => {
  console.log(data);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-black ">
      <div className=" p-16 text-xl  cointainer max-w-lg flex flex-col items-start rounded-lg justify-center gap-6 border-2 border-slate-800 bg-white text-slate-800 cursor-pointer hover:bg-slate-50 ">
        <h1 className="font-semibold ">Name : {data?.name} </h1>
        <h1 className="font-semibold ">Market Cap : {data?.market_cap} </h1>
        <h1 className="font-semibold ">Rank : {data?.market_cap_rank} </h1>
        <h1 className="font-semibold ">Volume : {data?.total_volume} </h1>
      </div>
    </div>
  );
};

export default CoinInfo;
