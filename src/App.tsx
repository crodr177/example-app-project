import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Info from "./pages/Info";
import Header from './components/Header';

import { 
  APP_TITLE, 
  PAGE_TITLE_ABOUT, 
  PAGE_TITLE_CONTACT, 
  PAGE_TITLE_HOME, 
  PAGE_TITLE_INFO 
} from './utils/constants';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <title>{APP_TITLE}</title>
      <Header/>
      <Switch>
        <Route exact path="/" render={(props) => <Home title={PAGE_TITLE_HOME} {...props} />} />
        <Route exact path="/about" render={(props) => <About title={PAGE_TITLE_ABOUT} {...props} />} />
        <Route exact path="/contact" render={(props) => <Contact title={PAGE_TITLE_CONTACT} {...props} />} />
        <Route exact path="/info" render={(props) => <Info title={PAGE_TITLE_INFO} {...props} />} />
      </Switch>
    </Router>
  );
}

export default App;
