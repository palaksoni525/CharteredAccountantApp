import "../App.css";
 
 import UpperBody from "../Components/UpperBody";
 import MidBody from "../Components/MidBody";
 import BottomBody from "../Components/BottomBody";
  
function Home() {
  return (
        <div>
          
            <div> 
                <UpperBody />
            </div>
            <div>
                <MidBody />
            </div>
            <div >
              <BottomBody />

            </div>
        </div>
  );
}

export default Home;
