import { Switch, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./theme/GlobalStyle";
import PokeDataContext from "./context/context";
import useDataApi from "./hooks/useData";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import PokeDetails from "./pages/PokeDetails";
import Footer from "./components/Footer";

const App = ({ className }) => {
  const dataApi = useDataApi();
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
    <PokeDataContext.Provider value={dataApi}>
      <GlobalStyle />
      <div className={className}>
        <Banner />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/pokestar/:name">
            <PokeDetails />
          </Route>
        </Switch>
        <Footer />
      </div>
    </PokeDataContext.Provider>
    </AnimatePresence>
  );
};

export default styled(App)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
