const Footer = () => {
  return (
    <div className=" mt32 p-4 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
      <h1 className=" text-2xl font-bold">Portofolio.Co</h1>
      <div className=" flex gap-7">
        <a href="#">Home</a>
        <a href="#About">About</a>
        <a href="#Project">Project</a>
      </div>
      <div className=" flex items-center gap-3">
        <a href="https://github.com/rachmad-prog">
          <i className=" ri-github-fill ring-2x"></i>
        </a>
        <a href="#">
          <i className=" ri-instagram-fill ring-2x"></i>
        </a>
        <a href="#">
          <i className=" ri-reddit-fill ring-2x"></i>
        </a>
        <a href="#">
          <i className=" ri-youtube-fill ring-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
