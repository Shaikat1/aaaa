

const Footer = () => {
    return (
        <div className="mx-auto max-w-[1300px] my-14">
            <footer className="footer p-10 bg-[#f7f5ec] text-base-content">
  <aside>
  <div className="mt-2">
        <h1 className="text-3xl font-extrabold"><span className="text-[#1f7b76]">Social</span> <span className="text-[#75b482]">Event</span></h1>
    </div>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </aside> 
    <div className="grid grid-cols-3 md:gap-16 lg:gap-24">
     <div>
     <nav>
    <header className="footer-title">Services</header>  
    <div className="flex flex-col">
    <a className="link link-hover">Management</a> 
    <a className="link link-hover">Photography</a> 
    <a className="link link-hover">Videography</a>
    <a className="link link-hover">Decoration</a>
    </div>
  </nav> 
     </div>
      <div>
      <nav>
    <header className="footer-title">Company</header> 
    <div className="flex flex-col">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
    </div>
  </nav> 
      </div>
  <div>
  <nav>
    <header className="footer-title">Legal</header> 
    <div className="flex flex-col">
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a> 
    </div>
  </nav>
  </div>
      </div>
</footer>
        </div>
    );
};

export default Footer;