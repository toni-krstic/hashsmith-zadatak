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
  return (
    <main className="h-screen w-full p-4">
      <div className="w-full">
        <h3 className="p-2">{miners[19].name}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {formatedMiners.map((miners, i) => (
          <div
            key={`${miners ? `${miners[`${i}`]?.pdu}-${miners[`${i}`]?.port}` : "s"}`}
            className="flex w-[420px] flex-wrap gap-2 rounded-md border-[1px] border-slate-400 p-4"
          >
            {miners?.map((miner) => (
              <div key={`${miner.pdu}-${miner.port}s`}>
                {miner.s === 10 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 p-4">
                    {miner.port}
                  </div>
                ) : miner.s === 20 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 p-4">
                    {miner.port}
                  </div>
                ) : miner.s === 30 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-600 p-4">
                    {miner.port}
                  </div>
                ) : miner.s === 40 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-600 p-4">
                    {miner.port}
                  </div>
                ) : miner.s === 50 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-400 p-4">
                    {miner.port}
                  </div>
                ) : miner.s === 60 ? (
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 p-4">
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
