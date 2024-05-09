import miners from "../assets/miners.json";

const getMiner = (pdu: number) => {
  return miners[19].values.filter((miner) => miner.pdu === pdu);
};

export default function HomePage() {
  return (
    <main className="h-screen w-full p-4">
      <div className="w-full">
        <h3>{miners[19].name}</h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {miners[19].values.map((miners) => (
          <div key={`${miners.pdu}-${miners.port}`}>
            {miners.pdu === miners.port ? (
              <div className="flex w-1/2 flex-wrap gap-2 rounded-md border-[1px] border-slate-400 p-4">
                {getMiner(miners.pdu).map((miner) => (
                  <div key={`${miner.pdu}-${miner.port}s`}>
                    {miner.s === 10 ? (
                      <div className="rounded-md bg-green-600 p-4">
                        {miner.port}
                      </div>
                    ) : miner.s === 20 ? (
                      <div className="rounded-md bg-blue-600 p-4">
                        {miner.port}
                      </div>
                    ) : miner.s === 30 ? (
                      <div className="rounded-md bg-yellow-600 p-4">
                        {miner.port}
                      </div>
                    ) : miner.s === 40 ? (
                      <div className="rounded-md bg-orange-600 p-4">
                        {miner.port}
                      </div>
                    ) : miner.s === 50 ? (
                      <div className="rounded-md bg-red-400 p-4">
                        {miner.port}
                      </div>
                    ) : miner.s === 60 ? (
                      <div className="rounded-md bg-red-600 p-4">
                        {miner.port}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
