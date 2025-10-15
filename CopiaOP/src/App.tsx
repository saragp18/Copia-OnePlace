import Categories from "./components/Categories"
import CreateYourStyle from "./components/CreateYourStyle"
import Footer from "./components/Footer"
import HeroPage from "./components/Hero"
import Navbar from "./components/Navbar"
import NewItems from "./components/NewItems"
function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroPage />
        <NewItems />
        <Categories />
        <CreateYourStyle />
        <Footer/>
      </div>  
    </>
  )
}

export default App
