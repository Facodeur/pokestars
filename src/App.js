import Banner from "./components/Banner";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import PokeList from "./components/PokeList";

const App = () => {
  return (
    <PokeDataContext.Provider value={"data-api"}>
      <GlobalStyle />
      <Banner />
      <PokeList />
    </PokeDataContext.Provider>
  );
};

export default App;
