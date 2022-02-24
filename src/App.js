import './App.css';
import Greet from './components/FunctionComponent';
import Welcome from './components/ClassComponent';
import FunctionProps from './components/FunctionProps';
import ClassProps from './components/ClassProps';
import ClassState from './components/ClassState';
import StateDetails from './components/StateDetails';
import DestructuringFunction from './components/DestructuringFunction';
import DestructuringClass from './components/DestructuringClass';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import Form from './components/Form';
//import LifecycleMountingA from './components/LifecycleMountingA';
import LifecycleUpdatingA from './components/LifecycleUpdatingA';
import {Route, Routes} from 'react-router-dom';
import RouterAbout from './components/RouterAbout';
import RouterContact from './components/RouterContact';
import Navbar from './components/Navbar';
import RouterError from './components/RouterError';
import MUIComponents from './components/MUIComponents';
import Electronics from './components/Electronics';
import KitchenAppliances from './components/KitchenAppliances';
import Footer from './components/Footer';
import ProductsHeader from './components/ProductsHeader';
import Tools from './components/Tools';
import Fitness from './components/Fitness';
import Signup from './components/Signup';
import SignupFormik from './components/SignupFormik';
import SignupFormikYup from './components/SignupFormikYup';
import SignupFormikYupReduced from './components/SignupFormikYupReduced';
function App() {
  return (
    <div className="App">






<MUIComponents />
<ProductsHeader />


<Routes>
  <Route path="/" element={<Electronics />} />
  <Route path="/appliances" element={<KitchenAppliances />} />
  <Route path="/tools" element={<Tools />} />
  <Route path="/fitness" element={<Fitness />} />
  <Route path="/signup" element={<SignupFormikYupReduced />} />
</Routes>


<Footer />







{/* <Navbar />
<Routes>
  <Route exact path="/about" element={<RouterAbout />} />
  <Route exact path="/contact" element={<RouterContact />} />
  <Route path="*" element={<RouterError />} />
</Routes> */}

{/* <RouterAbout />
<RouterContact /> */}



{/* <LifecycleMountingA /> */}
{/* <LifecycleUpdatingA />
<Form />
<Greet name="Prakhar" />
<FunctionProps name="Tom">
  <p>child data</p>
   </FunctionProps>

<FunctionProps name="Harry" />
<FunctionProps name="Dick"/>
<Welcome />

<ClassProps number="one"></ClassProps>
<ClassProps number="two"></ClassProps>
<ClassProps number="three"></ClassProps>

<ClassState />
<StateDetails />
<DestructuringFunction fname="Prakhar" lname="Vashishtha" />
<DestructuringClass data1="this1" data2="that2"/>
<FunctionClick />
<ClassClick />
<EventBind />
<ParentComponent /> */}

      
      
    </div>
  );
}


export default App;
