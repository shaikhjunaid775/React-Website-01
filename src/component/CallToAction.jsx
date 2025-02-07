function CallToAction() {
  return (
    <>
      <div className="dark:bg-gray-900 bg-gray-200 dark:text-gray-300 text-gray-600 relative">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            className="w-full h-full object-cover"
            src="https://cruip.com/wp-content/themes/cruip-2/dist/images/cta-bg-02.svg"
            width="1104"
            height="214"
            role="presentation"
          />
        </div>
        <div className="container px-6 py-8 mx-auto">
          <aside className="relative">
            <div className="absolute -top-10 right-6 hidden md:block z-10">
              <img
                className="ml-auto maxW-none"
                src="https://cruip.com/wp-content/themes/cruip-2/dist/images/stacked-templates-3.png"
                width="272"
                height="289"
                role="presentation"
              />
            </div>
            <div className="relative  rounded-3xl overflow-hidden p-8 md:px-12 md:py-14 md:pr-80">
              <div className="relative ">
                <h3 className="text-xl text-start font-medium bg-clip-text text-transparent bg-gradient-to-r dark:from-gray-100/70 dark:to-gray-100 from-gray-800 to-gray-700/50 pb-6">
                  {" "}
                  Tailwind CSS templates for your next project
                </h3>
                <div className="flex justify-start">
                  <span className="relative flex items-center justify-center w-auto px-6 py-3 text-sm font-medium textWhite transition-colors duration-300 rounded-lg pointer-events-auto bg-sky-500 text-gray-800 dark:text-gray-200">
                    <span>Browse Premium Templates</span>
                    <span className="textWhite/60 group-hover:translate-x-0.5 transition-transform ml-1.5">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="11"
                      >
                        <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default CallToAction;
