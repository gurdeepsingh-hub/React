export let SortData = (data, path, order) => {
  if (path.includes(".")) {
    const paths = path.split(".");

    data.sort((a, b) => {
      const valueA = a[paths[0]][paths[1]];
      const valueB = b[paths[0]][paths[1]];

      if (valueA < valueB) {
        return -order;
      }
      if (valueA > valueB) {
        return order;
      }
    });
  } else {
    data.sort((a, b) => {
      const valueA = a[path];
      const valueB = b[path];

      if (valueA < valueB) {
        return -order;
      }
      if (valueA > valueB) {
        return order;
      }
    });
  }
  return data;
};
