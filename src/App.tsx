import {BrowserRouter, Switch, Route} from "react-router-dom";
import Form1 from "./components/Form1";
import MainForm from "./components/MainForm";

function App() {
  return (
   <BrowserRouter>
   <Switch>
    <Route exact path="/Form1" component={Form1} />
    <Route exact path="/Form2" component={MainForm} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
