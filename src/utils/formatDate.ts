export const formatDate = (date: string | Date) => {
  const dateISO = new Date(date).toISOString();
  const [hours, minutes, seconds]: any = dateISO
    .split("T")[1]
    .split(".")[0]
    .split(":");
  const [year, month, day] = dateISO.split("T")[0].split("-");

  return `${day}/${month}/${year} - ${hours - 3}:${minutes}:${seconds}`;
};
