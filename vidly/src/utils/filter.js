function FilterGenre(itemList, genre) {
  if (genre == "All Genres") return itemList;
  let filtered = itemList.filter((item) => item.genre.name == genre);
  return filtered;
}

export default FilterGenre;
