import "./App.css";
import Footer from "./components/footer/footer.tsx";
import Header from "./components/header/header.tsx";
import MainScreen from "./screens/MainScreen.tsx";

function App() {
  return (
    <div className="App">
      <Header />
      <MainScreen />
      <Footer />
    </div>
  );
}

export default App;
