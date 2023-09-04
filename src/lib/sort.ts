export const sortedList = (list: any[], order: string, sortOrder: string) => {
  switch (order) {
    case "price":
      if (sortOrder == "asc") {
        return [...list].sort(
          (a: any, b: any) => b.current_price - a.current_price
        );
      } else {
        return [...list].sort(
          (a: any, b: any) => a.current_price - b.current_price
        );
      }

    case "volume":
      if (sortOrder == "asc") {
        return [...list].sort((a: any, b: any) => b.market_cap - a.market_cap);
      } else {
        return [...list].sort((a: any, b: any) => a.market_cap - b.market_cap);
      }
    default:
      return list;
  }
};
