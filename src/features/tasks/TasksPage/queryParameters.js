import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (paramName) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(paramName);
};

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  const replaceQueryParameter = ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return replaceQueryParameter;
};
