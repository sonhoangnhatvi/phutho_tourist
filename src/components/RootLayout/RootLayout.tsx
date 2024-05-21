import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation/MainNavigation";
import CompanyDataFetcher from "../DataFetchingComponent/CompanyDataFetcher";

const RootLayout = () => {
  return (
    <div>
      <CompanyDataFetcher />
      <MainNavigation />
      <Outlet />
    </div>
  );
};

export default RootLayout;
