import { FC } from "react";
import { notifications } from "../lib/constants";
import Link from "next/link";

interface HeaderNotificationDropdownProps {}

export const HeaderNotificationDropdown: FC<
  HeaderNotificationDropdownProps
> = () => {
  function formatDate(date: string) {
    const parts = date.split("-");
    const year = parseInt(parts[0]);
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);

    const newDate = new Date(year, month - 1, day);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const formattedDate =
      ("0" + newDate.getDate()).slice(-2) +
      " " +
      monthNames[newDate.getMonth()] +
      ", " +
      newDate.getFullYear();

    return formattedDate;
  }
  return (
    <div className="absolute right-0 top-11 border border-silver bg-white w-80 max-h-96 overflow-y-auto shadow-[0_8px_13px_-3px_rgba(0,0,0,0.07)]">
      <div className="py-3 px-5 text-sm text-silver-darken">Notification</div>
      <div>
        {notifications.map((notification, idx) => (
          <Link
            href="/"
            key={idx}
            className="py-3 px-5 border-b border-silver first:border-t even:bg-gray/40 block"
          >
            <span className="text-sm text-dark">{notification.title}</span>
            <span className="text-sm text-silver-dark">
              {notification.text}
            </span>
            <span className="text-xs text-gray-dark mt-3">
              {formatDate(notification.date)}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
