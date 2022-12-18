import React from "react";
import home1 from "../../assets/img/home1.png";
import home2 from "../../assets/img/home2.png";
import home3 from "../../assets/img/home3.png";

const Home = () => {
  return (
    <>
      <main id="hero">
        <section
          id="section1"
          className="my-40 container mx-auto md:grid md:grid-cols-2 items-center md:p-16"
        >
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-5 lg:text-3xl">
              Find Your Favorite Job with <br />
              <span className="text-sky-500">No Pain</span> and{" "}
              <span className="text-sky-500">No Gain</span>
            </h1>
            <p className="text-lg font-medium mb-3 lg:text-xl">
              Precise web platfrom to got dream job with no pain and no gain.
              Find job like drink water from a glass no obstacle just flow into
              you body. We help you find your job like birthday party that make
              you happy
            </p>
          </div>
          <div>
            <img src={home1} alt="home1" />
          </div>
        </section>

        <section id="section2" className="bg-slate-50 p-8">
          <h1 className="text-2xl font-bold text-center my-8 md:text-3xl">
            Easy as That
          </h1>
          <div className="flex flex-wrap gap-12 justify-center py-8">
            <figure className="shadow-md rounded-md w-52 h-52 p-5 flex flex-wrap justify-center hover:bg-white mb-12">
              <img
                src={require("../../assets/img/handshake.png")}
                alt="handshake"
                className="w-24 h-24 "
                width="300"
                height="400"
              />
              <figcaption className="text-lg font-semibold">
                Applying for a Job
              </figcaption>
            </figure>
            <figure className="shadow-md rounded-md w-52 h-52 p-5 flex flex-wrap justify-center hover:bg-white mb-12">
              <img
                src={require("../../assets/img/job.png")}
                alt="job"
                className="w-24 h-24 "
                width="300"
                height="400"
              />
              <figcaption className="text-lg font-semibold">
                Find a Job
              </figcaption>
            </figure>
            <figure className="shadow-md rounded-md w-52 h-52 p-5 flex flex-wrap justify-center hover:bg-white mb-12">
              <img
                src={require("../../assets/img/businessman.png")}
                alt="businessman"
                className="w-24 h-24 "
                width="300"
                height="400"
              />
              <figcaption className="text-lg font-semibold">
                Ready to Work
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="section3"
          className="my-28 container mx-auto md:grid md:grid-cols-2 items-center md:p-16"
        >
          <div>
            <img src={home2} alt="" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-3 md:mb-6 lg:text-3xl">
              Explore Thousand <span className="text-sky-500">of</span> Dream
              Jobs
            </h1>
            <p className="text-lg font-medium mb-4 lg:text-xl">
              Experience the startup ecosystem, invest in startup, research the
              fastest-growing companies, and find a job you love
            </p>
          </div>
        </section>

        <section id="section4" className="pt-36 pb-32 bg-slate-100">
          <div className="container mx-auto">
            <div className="w-full px-4">
              <div className="mx-auto text-center mb-16">
                <h4 className="font-semibold text-3xl text-primary mb-2 text-slate-400">
                  Trusted by Companies :
                </h4>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center">
              <img
                src={require("../../assets/img/clients/jiwagroup.png")}
                alt="gojek"
                width="200"
                height="200"
              />
              <img
                src={require("../../assets/img/clients/Pertamina.png")}
                alt="pertamina"
                width="400"
                height="200"
              />
              <img
                src={require("../../assets/img/clients/tokopedia.png")}
                alt="google"
                width="400"
                height="200"
              />
            </div>
          </div>
        </section>

        <section
          id="section5"
          className="my-40 container mx-auto md:grid md:grid-cols-2 items-center md:p-16"
        >
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-5 lg:text-3xl">
              Shaping your <span className="text-sky-500">future</span> with
              best recruitment
            </h1>
            <p className="text-lg font-medium mb-3 lg:text-xl">
              Growth and success go hand-in-hand. We'll help you with it. Focus
              to get your dream job
            </p>
          </div>
          <div>
            <img src={home3} alt="home1" />
          </div>
        </section>
      </main>

      <footer className="border-t-2 w-[90%] mx-auto p-4 md:p-8 mt-2">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <h1 className="text-xl font-extrabold text-slate-400 md:text-4xl">
            JSeekers
          </h1>
          <p className="font-thin text-base md:text-lg">
            <span className="text-xl">&#169; </span>
            2022 Thoriq Ardiansyah | All Rights Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Home;
