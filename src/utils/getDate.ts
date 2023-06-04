export const GetDate = () => {
  const today: Date = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  const formattedDate = date.toISOString().split('T')[0];

  return formattedDate;
};

export const GetYesterday = () => {
  const today: Date = new Date();
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1,
  );

  const formattedDate = date.toISOString().split('T')[0];

  return formattedDate;
};
