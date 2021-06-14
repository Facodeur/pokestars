import Banner from "./components/Banner";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import PokeList from "./components/PokeList";

import useDataApi from "./services/useData";

const App = () => {

  const dataApi = useDataApi();

  return (
    <PokeDataContext.Provider value={dataApi}>
      <GlobalStyle />
      <Banner />
      <PokeList />
    </PokeDataContext.Provider>
  );
};

export default App;
