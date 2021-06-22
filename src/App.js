import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./services/context";
import useDataApi from "./services/useData";
import Banner from "./components/Banner";
import PokeList from "./components/PokeList";
import PokeDetails from "./components/PokeDetails";
import Footer from "./components/Footer";

const App = ({ className }) => {
  const dataApi = useDataApi();

  return (
    <PokeDataContext.Provider value={dataApi}>
      <GlobalStyle />
      <div className={className}>
        <Banner />
        <Switch>
          <Route exact path="/">
            <PokeList />
          </Route>
          <Route exact path="/pokestar/:name">
            <PokeDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </PokeDataContext.Provider>
  );
};

export default styled(App)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
