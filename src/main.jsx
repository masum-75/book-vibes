import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './component/RootLayout/RootLayout.jsx'
import Home from './component/Home/Home.jsx'
import Books from './component/Books/Books.jsx'
import BookDetails from './component/BookDetails/BookDetails.jsx'
import NotFound from './component/NotFound.jsx'
import ListedBooks from './component/ListedBooks/ListedBooks.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        loader: async () => fetch("/data/booksData.json"),
        Component: Home,
      },
      {
        path: "/book-details/:id",

        loader: () => fetch("/data/booksData.json"),
        Component: BookDetails,
      },
      {
        path: "/listed-books",
        loader: () => fetch("/data/booksData.json"),
        Component: ListedBooks,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
