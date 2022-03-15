const DATE_SEPARATOR_REGEX = /-/;

const doesDateExist = (year: number, month: number, dateIndex: number) => {
  const validYear = year <= 99 ? 1900 + year : year;
  const date = new Date(validYear, month - 1, dateIndex);

  const doesYearExist = year === date.getFullYear();
  const doesMonthExist = month === date.getMonth() + 1;
  const doesDateIndexExist = dateIndex === date.getDate();

  return doesYearExist && doesMonthExist && doesDateIndexExist;
};

export const isValidDate = (dateString: string) => {
  const [year, month, dateIndex] = dateString
    .split(DATE_SEPARATOR_REGEX, 3)
    .map((value) => parseInt(value, 10));

  return doesDateExist(year, month, dateIndex);
};
