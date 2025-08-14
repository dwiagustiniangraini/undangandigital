import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function WishesCard({ item }) {
  if (!item) return null;

  const isoDate = item.created_at;
  const formatted = dayjs(isoDate)
    .tz("Asia/Jakarta")
    .locale("id")
    .format("DD MMMM YYYY [jam] HH:mm");

  return (
    <div className="flex gap-3 mb-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-800 text-white font-semibold text-lg">
        {item.name?.charAt(0) || "?"}
      </div>

      <div className="flex-1">
        <h2 className="font-bold flex items-center gap-1">
          {item.name || "Tamu"}
          {item.presence === "hadir" ? (
            <span className="text-green-500 text-sm">✅</span>
          ) : (
            <span className="text-red-500 text-sm">❌</span>
          )}
        </h2>
        <p className="whitespace-pre-line mr-7">{item.message || "-"}</p>
        <p className="text-sm italic text-gray-400 mt-1">{formatted} WIB</p>
      </div>
    </div>
  );
}
