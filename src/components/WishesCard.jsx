import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import { useEffect, useState } from "react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function WishesCard({ item }) {
  const isoDate = item.created_at;
  const formatted = dayjs(isoDate)
    .tz("Asia/Jakarta")
    .locale("id")
    .format("DD MMMM YYYY [jam] HH:mm");

  return (
    <div className="flex gap-3 justify-start mb-6">
      <div className="w-12 h-12 rounded-full bg-blue-800 text-white flex items-center justify-center font-semibold text-lg">
        {item.name[0]}
      </div>

      <div>
        <h2 className="font-bold flex items-center gap-1">
          {item.name}{" "}
          {item.presence === "hadir" ? (
            <span className="text-green-500 text-sm">✅</span>
          ) : (
            <span className="text-red-500 text-sm">❌</span>
          )}
        </h2>
        <p className="whitespace-pre-line">{item.message}</p>
        {/* <p className="text-sm italic text-gray-400 mt-1">
          {formatted(item.createdAt)}
        </p> */}
        <p className="text-sm italic text-gray-400 mt-1">{formatted} WIB</p>
      </div>
    </div>
  );
}
