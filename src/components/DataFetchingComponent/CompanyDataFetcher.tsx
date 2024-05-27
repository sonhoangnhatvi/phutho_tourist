import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCompanyInfo } from "../../actions/fetchCompanyInfo";
import { AppDispatch } from "../../store/store";
import { fetchArticles } from "../../actions/fetchArticles";
import { fetchkeyService } from "../../actions/fetchKeyService";

function CompanyDataFetcher() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCompanyInfo());
    dispatch(fetchArticles());
    dispatch(fetchkeyService());
  }, [dispatch]);

  return null; // This component doesn't render anything
}

export default CompanyDataFetcher;
