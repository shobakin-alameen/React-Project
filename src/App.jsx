import "./App.css"
import Navbar from "./component/navbar/Navbar";
import Nav from "./component/nav/Nav";
import Categories from "./component/categories/Categories";
import Pics from "./component/images/Pics"
import Cards from "./component/cards/Cards";
import Videos from "./component/videos/videos";
import Expert from "./component/expert/Expert";
function App (){
  return (
    <>
      <Navbar/>
      <Nav/>
      <Categories/>
      <Pics/>
      <Cards/>
      <Videos/>
      <Expert/>
    </>
  )
}

export default App;