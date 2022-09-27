import { Route, Switch } from "react-router-dom";

import Header from "./components/Layout/Header";
import CartView from "./pages/CartView/CartView";
import CreateView from "./pages/CreateView/CreateView";
import EditView from "./pages/EditView/EditView";
import MainView from "./pages/MainView/MainView";

function App() {
  return (
    <>
      <Header />
      <main className="main-wrapper">
        <Switch>
          <Route exact path="/">
            <MainView />
          </Route>
          <Route path="/create">
            <CreateView />
          </Route>
          <Route path="/edit/:id">
            <EditView />
          </Route>
          <Route path="/cart">
            <CartView />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
