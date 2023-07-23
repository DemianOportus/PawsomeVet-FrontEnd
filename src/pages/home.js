import About from "../components/about";
import Footer from "../components/footer";
import Introduction from "../components/introduction";
import Navbar from "../components/navbar";
import Reviews from "../components/reviews";
import ServiceCategories from "../components/serviceCategories.js";


function Home() {
  return (
    <div>
      <div className="my-5 mx-16">
        <Navbar />
        <Introduction />
        <About />
        <Reviews />
        <ServiceCategories />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
