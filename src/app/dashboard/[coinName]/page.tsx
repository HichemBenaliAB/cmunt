import CandleStickChart from "@/components/CandleStickChart";
import { FC } from "react";

interface pageProps {
  params: { coinName: string };
}
const data = [
  {
    t: new Date("2022-01-01").getTime(), // Convert to timestamp
    o: 190,
    h: 100,
    l: 90,
    c: 105,
  },
  {
    t: new Date("2022-02-01").getTime(), // Convert to timestamp
    o: 100,
    h: 110,
    l: 90,
    c: 105,
  },
  {
    t: new Date("2022-03-01").getTime(), // Convert to timestamp
    o: 50,
    h: 110,
    l: 90,
    c: 145,
  },
  {
    t: new Date("2022-04-01").getTime(), // Convert to timestamp
    o: 100,
    h: 110,
    l: 90,
    c: 105,
  },
  {
    t: new Date("2022-05-01").getTime(), // Convert to timestamp
    o: 100,
    h: 110,
    l: 90,
    c: 105,
  },
  {
    t: new Date("2022-06-01").getTime(), // Convert to timestamp
    o: 10,
    h: 200,
    l: 90,
    c: 105,
  },
];
const page: FC<pageProps> = ({ params }) => {
  const { coinName } = params;
  return (
    <div>
      {coinName}
      <CandleStickChart data={data} />
    </div>
  );
};

export default page;
