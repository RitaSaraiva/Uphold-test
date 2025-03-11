import "./App.css";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import MainScreen from "./screens/MainScreen.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="MainScreen">
        <MainScreen />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
