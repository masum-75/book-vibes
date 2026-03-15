import React, { Suspense } from 'react';
import Banner from '../Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
     const books = useLoaderData();
     console.log(books);
    return (
      <div >
        <Banner></Banner>
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Books books={books}></Books>
        </Suspense>
      </div>
    );
};

export default Home;