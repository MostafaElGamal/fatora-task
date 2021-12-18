export const storeArrayInLocalStorage = (id, localStorageName) => {
  let idsArray;
  const gifId = id;
  const itemIds = localStorage.getItem(localStorageName);
  if (itemIds) {
    idsArray = itemIds.split(",");
    idsArray.push(gifId);
    localStorage.setItem(localStorageName, idsArray);
  } else {
    idsArray = [gifId];
  }
  localStorage.setItem(localStorageName, idsArray);
};
