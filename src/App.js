import Banner from "./components/Banner";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import PokeList from "./components/PokeList";
import useDataApi from "./services/useData";
import { Switch, Route } from "react-router-dom";

const App = () => {

  const dataApi = useDataApi();

  return (
    <PokeDataContext.Provider value={dataApi}>
      <GlobalStyle />
      <Banner />
      <Switch>
        <Route path="/">
          <PokeList />
        </Route>
        
      </Switch>
      
    </PokeDataContext.Provider>
  );
};

export default App;
