import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { SagaActions } from "../redux/sagas/actions";
import { useCallback } from "react";

const useCategoryFilter = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const filter = useCallback((key: 'category' | 'subCategory', value: string) => {
    const searchParams = new URLSearchParams(location.search);
    if (location.search !== `?${key}=${value}`) {
      searchParams.set(key, value);
      navigate(`/?${key}=${value}`)
      dispatch({ type: SagaActions.FetchProducts, payload: { [key]: value }});
    }
  }, [dispatch, location.search, navigate])
  return filter;
}

export default useCategoryFilter;
