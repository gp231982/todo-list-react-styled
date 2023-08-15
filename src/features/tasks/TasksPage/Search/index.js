import { useLocation, useHistory } from "react-router-dom";
import Input from "../../Input";
import { Wrapper } from "./styled";
import searchQueryParamName from "../searchQueryParamName";

const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = (e) => {
    const searchParams = new URLSearchParams(location.search);

    if (e.target.value.trim() === "") {
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, e.target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <Wrapper>
      <Input
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </Wrapper>
  );
};

export default Search;
