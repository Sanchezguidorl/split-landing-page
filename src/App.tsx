import img1 from "./assets/images/ps52.jpg";
import img2 from "./assets/images/xbox.jpg";
import "./App.css";

function App() {
  return (
    <>
      <div id="App">
        <div id="Image-bg">
          <img src={img1} alt="PlayStation image" />
        </div>
        <div id="Image-overlay">
          <div className="overlay-transparent">
            <div>
            <h1>PlayStation</h1>
            <button className="button button-playstation">Buy Now</button>
            </div>
          </div>
          <div className="image-overlay-container">
            <img src={img2} alt="Xbox image" />
            <div className="image-overlay-content">
            <h1>Xbox</h1>
            <button className="button button-xbox">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
