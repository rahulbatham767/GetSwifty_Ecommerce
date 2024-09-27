export const FormatPrice = (price) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

export const NameSlice = (str) => {
  if (str.length > 20) {
    return str.slice(0, 30) + "...";
  }
  return str;
};
