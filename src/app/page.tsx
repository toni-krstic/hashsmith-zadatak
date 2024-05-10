"use client";

import { useRouter } from "next/navigation";
import miners from "../assets/miners.json";

const getMiner = (pdu: number) => {
  return miners[19].values.filter(
    (miner) => miner.pdu === pdu && miner.s !== undefined,
  );
};

const formatedMiners = miners[19].values
  .map((miner) => {
    if (miner.pdu === miner.port) return getMiner(miner.pdu);
  })
  .filter((miner) => miner !== undefined);

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="flex h-full w-full flex-col gap-3 rounded-md border-[1px] border-slate-400">
      <div className="w-full border-b border-slate-400">
        <h3 className="p-4">{miners[19].name}</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-2 p-4">
        {formatedMiners.map((miners, i) => (
          <div
            key={`${miners ? `${miners[`${i}`]?.pdu}-${miners[`${i}`]?.port}` : "s"}`}
            className={`grid max-w-[390px] grid-cols-9 grid-rows-2 gap-2 rounded-md border-[1px] border-slate-400 p-4`}
          >
            {miners?.map((miner) => (
              <div
                key={`${miner.pdu}-${miner.port}s`}
                className={`${miner.pdu < 4 && miner.port === 4 ? "col-start-4 col-end-10" : ""}`}
              >
                {miner.s === 10 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-green-600 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : miner.s === 20 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-blue-600 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : miner.s === 30 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-yellow-600 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : miner.s === 40 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-orange-600 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : miner.s === 50 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-red-400 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : miner.s === 60 ? (
                  <div
                    className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-red-600 p-4"
                    onClick={() =>
                      router.push(`?miner=${miner.pdu}-${miner.port}`)
                    }
                  >
                    {miner.port}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
