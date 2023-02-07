export function paginateData(items, currentPage, pageSize) {
  let startIndex = currentPage == 1 ? 0 : (currentPage - 1) * pageSize;

  let data = items.slice(startIndex, startIndex + pageSize);

  return data;
}
