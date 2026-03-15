import React from 'react';
import BookCard from '../Book/BookCard';

const Books = ({ books }) => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center'>Books</h1>
      <div className='grid grid-cols-3 gap-3 mt-5'>
        {books.map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;