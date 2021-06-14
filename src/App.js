import Banner from "./components/Banner";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import PokeList from "./components/PokeList";
import dataService from "./services/dataService"

const App = () => {
  return (
    <PokeDataContext.Provider value={dataService}>
      <GlobalStyle />
      <Banner />
      <PokeList />
    </PokeDataContext.Provider>
  );
};

export default App;
