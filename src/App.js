import Banner from "./components/Banner";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import PokeList from "./components/PokeList";
import PokeDetails from "./components/PokeDetails";
import useDataApi from "./services/useData";
import { Switch, Route } from "react-router-dom";


const App = () => {

  const dataApi = useDataApi();

  return (
    <PokeDataContext.Provider value={dataApi}>
      <GlobalStyle />
      <Banner />
      <Switch>
        <Route exact path="/">
          <PokeList />
        </Route>
        <Route exact path="/pokestar/:name">
          <PokeDetails />
        </Route>
      </Switch>
      
    </PokeDataContext.Provider>
  );
};

export default App;
