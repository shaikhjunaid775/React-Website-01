import image from "../assets/images/image-01.jpg";

function Aboutus() {
  return (
    <>
      
      <div className=" px-4   pt-16 sm:pt-32 sm:px-6 text-start dark:bg-gray-900 bg-gray-200 dark:text-gray-300 text-gray-600">
        <div className="pb-16 container mx-auto relative z-10">
          <h2 className="max-w-2xl  text-2xl font-semibold tracking-tight  xl:text-3xl ">
            Bring your Business to the{" "}
            <span className="text-blue-500">next level.</span>
          </h2>

          <p className="max-w-4xl mt-6  ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum quidem
            officiis reprehenderit, aperiam veritatis non, quod veniam fuga
            possimus hic explicabo laboriosam nam. A tempore totam ipsa nemo
            adipisci iusto!
          </p>
        </div>

        <section className="container relative z-10 mx-auto grid  lg:grid-cols-2 xl:grid-cols-3 lg:gap-16 pt-10">
          <div className="w-full mb-28 md:mb-0 ">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img src={image} alt="" className="w-44 h-36 rounded-3xl" />
              </div>
              <div className="text-start">
                <h3>
                  <a
                    href="/#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    abcf
                  </a>
                </h3>

                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  in nesciunt possimus, vel voluptates obcaecati illum delectus
                  impedit unde perferendis, doloribus praesentium maiores ut
                  culpa ea consequatur ipsam ratione ex!
                </p>
                <div className="mt-5">
                  <a
                    className="rounded-full bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ="
                    rel="noreferrer"
                  >
                    Try Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-28 md:mb-0 ">
            <div className="mb-10 w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img src={image} alt="" className="w-44 h-36 rounded-3xl" />
              </div>
              <div className="text-start">
                <h3>
                  <a
                    href="/#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    abcf
                  </a>
                </h3>

                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  in nesciunt possimus, vel voluptates obcaecati illum delectus
                  impedit unde perferendis, doloribus praesentium maiores ut
                  culpa ea consequatur ipsam ratione ex!
                </p>
                <div className="mt-5">
                  <a
                    className="rounded-full bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ="
                    rel="noreferrer"
                  >
                    Try Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mb-28 md:mb-0 ">
            <div className="mb-10  w-full">
              <div className="mb-8 overflow-hidden rounded">
                <img src={image} alt="" className="w-44 h-36 rounded-3xl" />
              </div>
              <div className="text-start">
                <h3>
                  <a
                    href="/#"
                    className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    abcf
                  </a>
                </h3>

                <p className="text-base text-body-color dark:text-dark-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  in nesciunt possimus, vel voluptates obcaecati illum delectus
                  impedit unde perferendis, doloribus praesentium maiores ut
                  culpa ea consequatur ipsam ratione ex!
                </p>
                <div className="mt-5">
                  <a
                    className="rounded-full bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ="
                    rel="noreferrer"
                  >
                    Try Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutus;
