import { useState } from "react";
import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Swift Action, Sharp Mind, Reliable Collaboration..😊</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, My Name is Rachmad
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Top graduate in Informatics Engineering. A fast, proactive, sharp,
            and reliable individual who is capable of working effectively in
            teams and possesses strong communication skills.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className=" bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 ">
              Downloads CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className=" bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 ">
              Project Views <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"></img>
      </div>

      {/*Tentang*/}
      <div id="About" className="tentang mt-32 py-10">
        <div
          className="xl:w-2/3 lg:w3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
          <p className=" text-base/loose mb-10">
            "Top Graduate in Informatics Engineering with a sharp eye for detail
            and a passion for crafting seamless digital experiences. As a
            Front-End Web Developer, I combine technical expertise with fast,
            proactive execution to turn complex designs into clean, responsive,
            and high-performance code. I thrive in collaborative environments,
            leveraging strong communication skills to bridge the gap between
            design concepts and technical reality. Driven by reliability and
            continuous growth, I don't just build websites—I build solutions
            that elevate user experiences."
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className=" text-4xl mb-1">
                  45 <span className=" text-violet-500">+</span>
                </h1>
                <p>Project delivered</p>
              </div>
              <div>
                <h1 className=" text-4xl mb-1">
                  3 <span className=" text-violet-500">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className=" text-4xl/snug font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true">
            Tools Used
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true">
            Below are the tools I typically use for website development and
            design.
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className=" flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true">
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className=" opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Projek*/}
      <div id="Project" className="proyek mt-32 py-10">
        <h1
          className=" text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
          Project
        </h1>
        <p
          className=" textbase/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true">
          Below are some of my completed projects.
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className=" p-4 bg-zinc-800 rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className=" text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className=" text-base/loose mb-4">{proyek.desk}</p>
                <div className=" flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className=" py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className=" mt-8 text-center">
                  <a
                    href="#"
                    className=" bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600">
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Kontak*/}
      <div id="Contact" className="kontak mt-32 sm:p-10 p-0">
        <h1
          className=" text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true">
          Contact
        </h1>
        <p
          className=" text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true">
          Let's connect with me
        </p>
        <form
          action="https://formsubmit.co/rachmadmap@gmail.com"
          method="POST"
          className=" bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true">
          <div className=" flex flex-col gap-6">
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                placeholder="Enter Name.."
                required
                className=" border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label className=" font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email.."
                required
                className=" border border-zinc-500 p-2 rounded-md"
              />
            </div>
            <div className=" flex flex-col gap-2">
              <label htmlFor="pesan" className=" font-semibold">
                Message
              </label>
              <textarea
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="Message.."
                required
                className=" border border-zinc-500 p-2 rounded-md"></textarea>
            </div>
            <div className=" text-center">
              <button
                className=" bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
                type="submit">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
