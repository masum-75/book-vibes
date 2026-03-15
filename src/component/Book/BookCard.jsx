import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const {bookId, bookName, author, image, rating, category, tags, yearOfPublishing } =book;
  return (
    <Link to={`/book-details/${bookId}`} className="block h-full">
      <div className="max-w-[300px] bg-white rounded-2xl shadow-sm border border-gray-100 p-5 font-sans">
        {/* Book Image Section */}
        <div className="bg-[#f3f3f3] rounded-2xl py-8 px-6 flex justify-center items-center mb-5 relative group">
          <img
            src={image}
            alt={bookName}
            className="h-44 w-auto object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          {/* Decorative divider from original design */}
          <div className="absolute -bottom-0.5 w-10 h-1 bg-pink-400 rounded-full"></div>
        </div>

        {/* Tags Mapping */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-1.5 bg-green-50 text-[#23BE0A] text-xs font-bold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Book Info */}
        <h2 className="text-xl font-extrabold text-[#131313] mb-2 leading-tight">
          {bookName}
        </h2>
        <p className="text-sm text-gray-600 mb-5">
          By : <span className="text-[#131313cc] font-semibold">{author}</span>
        </p>

        {/* Dotted Divider */}
        <div className="border-t border-dotted border-gray-200 mb-4"></div>

        {/* Footer: Category & Rating */}
        <div className="flex justify-between items-center text-gray-600">
          <span className="text-sm font-medium">{category}</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-[#131313cc]">{rating}</span>
            <Star size={18} className="text-gray-400" />
          </div>
        </div>

        {/* Subtle Year indicator (Optional) */}
        <p className="text-[10px] text-gray-400 mt-2 text-right italic">
          Published: {yearOfPublishing}
        </p>
      </div>
    </Link>
  );
};

export default BookCard;
