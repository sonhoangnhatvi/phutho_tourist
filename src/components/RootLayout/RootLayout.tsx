import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import CompanyDataFetcher from "../DataFetchingComponent/CompanyDataFetcher";
import { Footer } from "../Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <CompanyDataFetcher />
      <MainNavigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
