export const formatDate = (date: string | Date) => {
  const [year, month, day] = new Date(date)
    .toISOString()
    .split("T")[0]
    .split("-");
  return `${day}/${month}/${year}`;
};
