import Header from "./components/Header";
import Hero from "./components/Hero";
import Special from "./components/Special";
import Product from "./components/Product";
import Place from "./components/place";
import Blog from "./components/Blog";
//import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Header/>
    < main className="main">
      <Hero/>
      <Special />
      <Product />
      <Place/>
      <Blog/>
      <App/>

    </main>
    //<Footer/>
   
    </>
  );
}

export default App;
