import NavBar from "./components/navbar/NavBar"
import Introduction from "./components/introduction/Introduction"
// import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Sidebar from "./components/sidebar/Sidebar"
import "./App.scss"
import {useState} from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Introduction/>
        <Works/>
        {/* <Portfolio/> */}
        <Contact/>
      </div>
    </div>
  );
}

export default App;
