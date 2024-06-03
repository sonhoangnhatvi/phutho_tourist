import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout/RootLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { DocumentPage } from "./pages/DocumentPage/DocumentPage";
import { RecruitmentPage } from "./pages/RecruitmentPage/RecruitmentPage";
import Error404 from "./pages/Error404/Error404";
import { ArticleDetailPage } from "./pages/ArticleDetailPage/ArticleDetailPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/", // Specific route for product details
        element: <HomePage />, // Example component for product details
      },
      {
        path: "/article/:articleId", // Specific route for product details
        element: <ArticleDetailPage />, // Example component for product details
      },
      {
        path: "/article", // Specific route for product details
        element: <ArticlePage />, // Example component for product details
      },

      {
        path: "/document",
        element: <DocumentPage />,
      },
      {
        path: "/recruitment",
        element: <RecruitmentPage />,
      },
      // Catch-all route for 404 errors
      {
        path: "*", // Matches any unknown path
        element: <Error404 />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
