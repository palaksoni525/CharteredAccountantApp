
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Details from "./Components/Details/Details.js";
import { BrowserRouter as Router,Route, Routes} from "react-router-dom"
 import UpperBody from "./Components/UpperBody";
 import MidBody from "./Components/MidBody";
 import BottomBody from "./Components/BottomBody";
  
function App() {
  return (
        // <div>
        //     <Header />
        //     <div> 
        //         <UpperBody />
        //     </div>
        //     <div>
        //         <MidBody />
        //     </div>
        //     <div >
        //       <BottomBody />

        //     </div>
        //     <Footer />
        // </div>

        <Router>
          <Header/>
           <Routes>
           <Route exact path="/"  element={<Home />} />
           <Route exact path="/details/:id"  element=<Details />/>
           </Routes>

           <Footer />
          </Router>
  );
}

export default App;
