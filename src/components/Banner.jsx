import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-[250px] md:h-[500px] lg:h-[700px] md:mt-20 mx-auto max-w-[1300px] rounded-lg" data-aos="zoom-out">
            <div className="hero h-[250px] md:h-[500px] lg:h-[700px]" style={{backgroundImage: 'url(https://i.ibb.co/thW4pbr/banner-img-2.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">New life start from here. We are kind to part of this and make it remarkable</p>
      <Link to="/booking">
      <button className="btn bg-[#75b482] text-white hover:text-[#75b482] border-0">Booking Now</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;