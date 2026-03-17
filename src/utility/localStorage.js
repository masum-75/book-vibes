const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }
  return [];
};

const addToStoredDB = (id, listName) => {
  const storeBookData = getStoredBook(listName);

  if (storeBookData.includes(id)) {
    return false; 
  } else {
    const updatedData = [...storeBookData, id];
    localStorage.setItem(listName, JSON.stringify(updatedData));
    return true; 
  }
};

export {addToStoredDB,getStoredBook}