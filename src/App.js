import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Celebrity from "./pages/Celebrity";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            path="/celebrities/:celebrityName"
            component={Celebrity}
          ></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
