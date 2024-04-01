const getBookDetails = () => {
  const storedBookDetails = localStorage.getItem("book-details");
  if (storedBookDetails) {
    return JSON.parse(storedBookDetails);
  }
  return [];
};

const saveBookDetails = (id) => {
  const storedBookDetails = getBookDetails();
  const isExist = storedBookDetails.find((bookId) => bookId === id);
  if (!isExist) {
    storedBookDetails.push(id);
    localStorage.setItem("book-details", JSON.stringify(storedBookDetails));
  }
};

export { saveBookDetails, getBookDetails };
