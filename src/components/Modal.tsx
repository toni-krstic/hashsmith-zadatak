"use client";

import { useSearchParams } from "next/navigation";
import miners from "../assets/miners.json";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

export const Modal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const minerPDUPort = searchParams.get("miner");
  const minerArray = minerPDUPort?.split("-");

  const miner = miners[19].values.filter(
    (minerr) =>
      minerArray &&
      minerr.pdu === Number(minerArray[0]) &&
      minerr.port === Number(minerArray[1]),
  );

  return (
    <>
      {miner[0] && (
        <dialog className="fixed left-0 top-0 z-50 flex h-full w-full flex-col overflow-auto bg-black bg-opacity-50 text-slate-100 backdrop-blur">
          <div
            className="w-full cursor-pointer p-4 text-2xl"
            onClick={() => router.back()}
          >
            X
          </div>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <p>TH5s: {miner[0].TH5s ?? "/"}</p>
            <p>THAvg: {miner[0].THAvg ?? "/"}</p>
            <p>tB: {miner[0].tB ?? "/"}</p>
            <p>freq: {miner[0].freq ?? "/"}</p>
            <p>w: {miner[0].w ?? "/"}</p>
            <p>pdu: {miner[0].pdu ?? "/"}</p>
            <p>port: {miner[0].port ?? "/"}</p>
            <p>
              status:{" "}
              {miner[0].s === 10
                ? "OK"
                : miner[0].s === 20
                  ? "-hashrate"
                  : miner[0].s === 30
                    ? "warning"
                    : miner[0].s === 40
                      ? "minor error"
                      : miner[0].s === 50
                        ? "error"
                        : miner[0].s === 60
                          ? "critical error"
                          : ""}{" "}
            </p>
          </div>
        </dialog>
      )}
    </>
  );
};
