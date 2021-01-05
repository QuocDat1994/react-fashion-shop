export const getDisplayBillValue = (value: string) => {
  if (isNaN(+value) || value === "") {
    return value;
  }
  return `$${value}`;
};

export const getTotalBill = (values: string[]) => {
  const convertedValues = values
    .filter((value) => {
      return isNaN(+value) ? false : true;
    })
    .map((value) => +value);

  return convertedValues.reduce(
    (total: number, current: number) => total + +current,
    0
  );
};