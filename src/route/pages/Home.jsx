import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner";
import Services from "./Services";
import PhotoGallery from "../../components/PhotoGallery";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";


const Home = () => {

    // const services = useLoaderData()
    return (
        <div className="my-10 mx-auto ">
          <div>
          <Banner></Banner>
          </div>

          <div className="mt-10">
            <Services></Services>
          </div>

          <div className="my-10">
            <PhotoGallery></PhotoGallery>
          </div>
          <div>
              <Testimonial></Testimonial>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>

    );
};

export default Home;