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
      <div>
        {miners[19].values.map((miners) => (
          <div key={`${miners.pdu}-${miners.port}`}>
            {miners.pdu === miners.port ? (
              <div className="flex border-b border-slate-100">
                {getMiner(miners.pdu).map((miner) => (
                  <div key={`${miner.pdu}-${miner.port}s`}>{miner.port}</div>
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
