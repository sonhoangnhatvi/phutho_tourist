import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanyInfo } from "../../actions/fetchCompanyInfo";
import { AppDispatch } from "../../store/store";

function CompanyDataFetcher() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCompanyInfo());
  }, [dispatch]);

  return null; // This component doesn't render anything
}

export default CompanyDataFetcher;
