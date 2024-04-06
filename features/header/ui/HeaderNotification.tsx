import { FC } from "react";
import { notifications } from "../lib/constants";

interface HeaderNotificationProps {}

export const HeaderNotification: FC<HeaderNotificationProps> = () => {
  // function formatDate(oldDate: string) {
  //   // Розбиваємо рядок на рік, місяць і день
  //   var parts = oldDate.split("-");
  //   var year = parseInt(parts[0]);
  //   var month = parseInt(parts[1]);
  //   var day = parseInt(parts[2]);

  //   // Створюємо об'єкт дати
  //   var date = new Date(year, month - 1, day);

  //   // Масив з назвами місяців для форматування
  //   var monthNames = [
  //     "Січ",
  //     "Лют",
  //     "Бер",
  //     "Кві",
  //     "Тра",
  //     "Чер",
  //     "Лип",
  //     "Сер",
  //     "Вер",
  //     "Жов",
  //     "Лис",
  //     "Гру",
  //   ];

  //   // Форматуємо дату
  //   var formattedDate =
  //     ("0" + date.getDate()).slice(-2) +
  //     " " +
  //     monthNames[date.getMonth()] +
  //     ", " +
  //     date.getFullYear();
  // }
  return (
    <div className="absolute right-0 top-11 border border-silver bg-white w-80 max-h-96 overflow-y-auto shadow-[0_8px_13px_-3px_rgba(0,0,0,0.07)]">
      <div className="py-3 px-5 text-sm text-silver-darken">Notification</div>
      <div>
        {notifications.map((notification, idx) => (
          <div
            key={idx}
            className="py-3 px-5 border-b border-silver first:border-t even:bg-gray/40"
          >
            <div className="text-sm text-dark">{notification.title}</div>
            <div className="text-sm text-silver-dark">{notification.text}</div>
            <div className="text-xs text-gray-dark mt-3">
              {notification.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
