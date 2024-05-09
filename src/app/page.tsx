import miners from "../assets/miners.json";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

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
    <main className="flex h-full w-full flex-col gap-3 rounded-md border-[1px] border-slate-400">
      <div className="w-full border-b border-slate-400">
        <h3 className="p-4">{miners[19].name}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {formatedMiners.map((miners, i) => (
          <div
            key={`${miners ? `${miners[`${i}`]?.pdu}-${miners[`${i}`]?.port}` : "s"}`}
            className="flex w-[390px] flex-wrap items-center  gap-2 rounded-md border-[1px] border-slate-400 p-4"
          >
            {miners?.map((miner) => (
              <div key={`${miner.pdu}-${miner.port}s`}>
                {miner.s === 10 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-green-600 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: OK</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : miner.s === 20 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: -hashrate</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : miner.s === 30 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-yellow-600 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: Warning</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : miner.s === 40 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-orange-600 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: minor error</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : miner.s === 50 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-red-400 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: error</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ) : miner.s === 60 ? (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="flex h-8 w-8 items-center justify-center rounded-md bg-red-600 p-4">
                        {miner.port}
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>TH5s: {miner.TH5s}</p>
                        <p>THAvg: {miner.THAvg}</p>
                        <p>tB: {miner.tB}</p>
                        <p>freq: {miner.freq}</p>
                        <p>w: {miner.w}</p>
                        <p>pdu: {miner.pdu}</p>
                        <p>port: {miner.port}</p>
                        <p>status: critical error</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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
