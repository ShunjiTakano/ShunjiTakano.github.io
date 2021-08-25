import NavBar from "./components/navbar/NavBar"
import Introduction from "./components/introduction/Introduction"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import "./App.scss"

function App() {
  return (
    <div className="app">
      <NavBar/>
      <div className="sections">
        <Introduction/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
