import {BrowserRouter as Router , Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavB from './components/Home/NavB';
import Slider from './components/Home/Slider';
import More from './components/Home/More';
import Contact from './components/Home/Contact';
import Entreprise from './components/Profile/Entreprise';
import Tabs from './components/Profile/Tabs';
import Signup from './components/Home/Signup';
import Signin from './components/Home/Signin';



function App() {
  return (
    <Router>
    <div className="App">
     
  <Route path="/Home" component={NavB}  />
  <Route path ="/Home" exact component={Slider} />
  <Route path ="/Home" exact  component={More} />
  <Route path = "/Contact" exact  component={Contact} />
  <Route path ="/Profile/Entreprise"   component ={Entreprise} />
  <Route path ="/Profile/Entreprise/Tabs"   component ={Tabs} />
  {/* <Route path = "/Contact/Signup" exact  component={Signup} />   */}
   {/* <Route path = "/Contact/Signin" exact  component={Signin} />   */}
   <Route path = "/Signup" exact  component={Signup} /> 
   <Route path = "/login" exact  component={Signin} />


 


    </div>
    </Router>
  );
}

export default App;
