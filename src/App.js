import "./App.css";
import Greet from "./components/FunctionComponent";
import Welcome from "./components/ClassComponent";
import FunctionProps from "./components/FunctionProps";
import ClassProps from "./components/ClassProps";
import ClassState from "./components/ClassState";
import StateDetails from "./components/StateDetails";
import DestructuringFunction from "./components/DestructuringFunction";
import DestructuringClass from "./components/DestructuringClass";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import Form from "./components/Form";
//import LifecycleMountingA from './components/LifecycleMountingA';
import LifecycleUpdatingA from "./components/LifecycleUpdatingA";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import RouterAbout from "./components/RouterAbout";
import RouterContact from "./components/RouterContact";
import Navbar from "./components/Navbar";
import RouterError from "./components/RouterError";
import MUIComponents from "./components/MUIComponents";
import Electronics from "./components/Electronics";
import KitchenAppliances from "./components/KitchenAppliances";
import Footer from "./components/Footer";
import ProductsHeader from "./components/ProductsHeader";
import Tools from "./components/Tools";
import Fitness from "./components/Fitness";
import Signup from "./components/Signup";
import SignupFormik from "./components/SignupFormik";
import SignupFormikYup from "./components/SignupFormikYup";
import SignupFormikYupReduced from "./components/SignupFormikYupReduced";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import { useFormik } from "formik";
import * as Yup from "yup";
import Profile from "./components/Profile";
import Admin from "./components/Admin";
import Slider from "./components/Slider";
import Mobile from "./components/Mobile";
import Home from "./components/Home";
import Grocery from "./components/Grocery";
import Toys from "./components/Toys";
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [kitchenappliances, setKitchenAppliances] = useState([]);
  const [fashion, setfashion] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [home, setHome] = useState([]);
  const [grocery, setGrocery] = useState([]);
  const [toys, setToys] = useState([]);
  const [dataFromChild, setDataFromChild] = useState("");
  let navigate = useNavigate();
  const [loggenIn, setLoggedIn] = useState(false);
  let localCart = localStorage.getItem("cartItems");
  //for sessions and cookies
  // const [loginStatus, setLoginStatus] = useState("");

  //for sessions and cookies , always need to define this
  // axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:3001/electronics")
      .then((response) => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/kitchenappliances")
      .then((response) => {
        setKitchenAppliances(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/fashion")
      .then((response) => {
        setfashion(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/fashion")
      .then((response) => {
        setfashion(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/mobile")
      .then((response) => {
        setMobile(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/home")
      .then((response) => {
        setHome(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/grocery")
      .then((response) => {
        setGrocery(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3001/toys")
      .then((response) => {
        setToys(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log("error in fetching products");
      });
  }, []);
  // console.log(products);

  //***** cart logic start   ****** */

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  // let stringCart = JSON.stringify(cartItems);
  // localStorage.setItem("cart", stringCart);
  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleResetCart = () => {
    setCartItems([]);
  };

  // ***** cart login end****** */

  // for session and cookies
  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].firstname);
        console.log(loginStatus);
      }
    });
  }, []);

  //for session and cookies
  // const loginStatusParent = (loginStatusChild) => {
  //   setDataFromChild(loginStatusChild);
  // };

  // console.log(dataFromChild);

  // login code

  //for sessions and cookies
  const [loginStatus, setLoginStatus] = useState("");
  const [loginStatusUser, setLoginStatusUser] = useState("");
  const [loggedInUserDetails, setLoggedInUserDetails] = useState([]);

  //for sessions and cookies , always need to define this
  axios.defaults.withCredentials = true;

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Please enter username(First Name)"),
    password: Yup.string().required("Please enter Password"),
  });

  const onSubmit = (values) => {
    axios
      .post("http://localhost:3001/login", {
        username: values.username,
        password: values.password,
      })
      .then((response) => {
        if (response.data.message) {
          // console.log(response.data.message);
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data[0].firstname);
          navigate("/ecommerce");
          setLoginStatusUser(response.data[0].firstname);
          setLoggedIn(true);
          setLoggedInUserDetails(response.data[0]);
          // setCartItems([...response.data.products]);

          //  setLoginStatusUser(response.data[0].firstname);

          //loginStatusChild();
          // props.cbloginStatusParent(loginStatus);
          // console.log(response.data[0].firstname);
        }
      });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  //for session and cookies
  useEffect(() => {
    axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].firstname);
        setLoginStatusUser(response.data.user[0].firstname);
        setLoggedInUserDetails(response.data.user[0]);
        setLoggedIn(true);
        //setCartItems([...response.data.products]);
        //setCartItems([...cartItems, { ...product, quantity: 1 }])
      }
    });
  }, []);
  // const loginStatusChild = () => {
  //   props.cbloginStatusParent(loginStatus);
  // };

  // login code

  //logout code
  const logout = () => {
    axios.get("http://localhost:3001/logout").then((response) => {
      setLoginStatusUser("");
      setLoginStatus("");
      setLoggedIn(false);
      navigate("/ecommerce");
    });
  };
  //logout code
  // useEffect(() => {
  //   localCart = JSON.parse(localCart);
  //   if (localCart) setCartItems(localCart);
  // }, []);

  // console.log(loggedInUserDetails);
  return (
    <div className="App">
      <MUIComponents
        loggedIn={loggenIn}
        logout={logout}
        cartItems={cartItems}
        loggedInUser={loginStatusUser}
      />
      <ProductsHeader />
      {/* <Slider /> */}
      <Routes>
        <Route
          path="/ecommerce"
          element={
            <Electronics
              products={products}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/appliances"
          element={
            <KitchenAppliances
              kitchenappliances={kitchenappliances}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/fashion"
          element={
            <Tools fashion={fashion} handleAddProduct={handleAddProduct} />
          }
        />
        <Route
          path="/mobile"
          element={
            <Mobile mobile={mobile} handleAddProduct={handleAddProduct} />
          }
        />
        <Route
          path="/home"
          element={<Home home={home} handleAddProduct={handleAddProduct} />}
        />
        <Route
          path="/grocery"
          element={
            <Grocery grocery={grocery} handleAddProduct={handleAddProduct} />
          }
        />
        <Route
          path="/toys"
          element={<Toys toys={toys} handleAddProduct={handleAddProduct} />}
        />
        <Route path="/signup" element={<SignupFormikYupReduced />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleResetCart={handleResetCart}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              loginStatus={loginStatus}
              validationSchema={validationSchema}
              initialValues={initialValues}
              formik={formik}
              onSubmit={onSubmit}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile loggedInUserDetails={loggedInUserDetails} />}
        />
        <Route path="/admin" element={<Admin />} />
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
