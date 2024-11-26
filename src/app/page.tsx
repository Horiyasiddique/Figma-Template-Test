import Arrivals from "./components/Arrivals";
import Brands from "./components/Brands";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Payday from "./components/Payday";
import Favorite from "./components/Favorite";
import Mobile from "./components/Mobile";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <Brands/>
      <Arrivals/>
      <Payday/>
      <Favorite/>
      <Mobile/>
      <Contact/>
      <Footer/>
    </div>
  );
}
