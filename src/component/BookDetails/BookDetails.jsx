import React from "react";
import { useLoaderData, useParams } from "react-router";
import NotFound from "../NotFound";
import { addToStoredDB, getStoredBook } from "../../utility/localStorage";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const bookDetail = useLoaderData();

  const book = bookDetail.find((b) => b.bookId === bookId);

  if (!book) return <NotFound></NotFound>;

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleRead = () => {
    const isAdded = addToStoredDB(bookId, "readList");
    if (isAdded) {
      alert("Successfully added to Read List!");
    } else {
      alert("This book is already in your Read List.");
    }
    console.log(isAdded)
  };

  const handleWishlist = () => {
    const readList = getStoredBook("readList");
    const isAlreadyRead = readList.find((id) => id === bookId);

    if (isAlreadyRead) {
      alert(
        "You have already read this book, so you can't add it to Wishlist!",
      );
      return;
    }

    const isAdded = addToStoredDB(bookId, "wishlist");
    if (isAdded) {
      alert("Successfully added to Wishlist!");
    } else {
      alert("This book is already in your Wishlist.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-12 flex flex-col lg:flex-row gap-12 bg-white animate-fadeIn">
      {/* Left side: Image */}
      <div className="flex-1 bg-gray-100 rounded-3xl p-16 flex justify-center items-center">
        <img
          src={image}
          alt={bookName}
          className="w-full max-w-sm h-auto shadow-2xl rounded-sm transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right side: Content */}
      <div className="flex-1 font-sans">
        <h1 className="text-4xl font-bold text-[#131313] mb-2">{bookName}</h1>
        <p className="text-xl font-medium text-[#131313cc] mb-4">
          By : {author}
        </p>

        <hr className="border-gray-200 mb-4" />
        <p className="text-xl font-medium text-[#131313cc] mb-4">{category}</p>
        <hr className="border-gray-200 mb-4" />

        <p className="text-[#131313b3] leading-relaxed mb-6">
          <span className="font-bold text-[#131313]">Review : </span>
          {review}
        </p>

        <div className="flex items-center gap-4 mb-8">
          <span className="font-bold text-[#131313]">Tag</span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[#23BE0A] font-medium bg-green-50 px-4 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        <hr className="border-gray-200 mb-6" />

        <div className="grid grid-cols-2 gap-y-3 mb-8 max-w-sm">
          <p className="text-[#131313b3]">Number of Pages:</p>
          <p className="font-bold text-[#131313]">{totalPages}</p>
          <p className="text-[#131313b3]">Publisher:</p>
          <p className="font-bold text-[#131313]">{publisher}</p>
          <p className="text-[#131313b3]">Year of Publishing:</p>
          <p className="font-bold text-[#131313]">{yearOfPublishing}</p>
          <p className="text-[#131313b3]">Rating:</p>
          <p className="font-bold text-[#131313]">{rating}</p>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleRead}
            className="px-8 py-3 border border-[#23BE0A] rounded-lg font-bold text-[#131313] hover:bg-[#23BE0A] hover:text-white transition-colors"
          >
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="px-8 py-3 bg-[#50B1C9] text-white rounded-lg font-bold hover:bg-[#3fa2ba] transition-colors"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
