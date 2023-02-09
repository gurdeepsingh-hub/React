export function paginateData(items, currentPage, pageSize) {
  let startIndex = currentPage == 1 ? 0 : (currentPage - 1) * pageSize;
  if (startIndex > items.length) return items;
  let data = items.slice(startIndex, startIndex + pageSize);

  return data;
}
