import { Navbar } from "./Navbar/Navbar"
import { Banner } from "./Banner/Banner"
import { Menu } from "./Menu/Menu"
import {GlobalStyle} from "./Styles/GlobalStyle"

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <Menu/>
      <div>Hello SliceLine</div>
    </>
    
  );
}

export default App;
