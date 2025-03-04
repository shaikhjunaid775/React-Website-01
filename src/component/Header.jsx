import { useState } from "react";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  

  const menuItems = [
    {
      title: "Product",
      submenus: [
        {
          name: "Analytics",
          description: "Understand your traffic",
          link: "#"
        },
        { name: "Engagement", description: "Interact with users", link: "#" },
        { name: "Security", description: "Keep data safe", link: "#" },
        { name: "Performance", description: "Optimize your app", link: "#" }
      ]
    },
    {
      title: "Marketing",
      submenus: [
        { name: "SEO", description: "Improve search rankings", link: "#" },
        { name: "Campaigns", description: "Run targeted ads", link: "#" },
        { name: "Social Media", description: "Expand your reach", link: "#" }
      ]
    },
    {
      title: "Support",
      submenus: [
        { name: "Help Center", description: "Find answers", link: "#" },
        { name: "Contact Us", description: "Get in touch", link: "#" }
      ]
    }
  ];

  return (
    <div>
      <div className="bg-sky-500/30">
        <div>
          <div className="flex justify-center items-center py-2">
            <div className="relative z-10 flex-col px-4  text-center md:py-1 md:flex-row md:justify-center md:items-center    flex mx-4">
              <p className="mb-2 mr-0 md:mb-0 md:text-left  md:mr-4">
                Don’t fall victim to crypto scams
              </p>
              <div className="md:flex-shrink-0">
                <a>
                  <button
                    className=" py-1 pl-3 pr-2 rounded-4xl  bg-[#101828] hover:bg-sky-400  text-gray-200 "
                    type="button"
                  >
                    <div className="wrapper text-center ">
                      <span className="relative z-[9] flex items-center gap-2 ">
                        Read the Guide
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-5"
                          viewBox="0 0 12 24"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                          ></path>
                        </svg>
                      </span>
                    </div>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="dark:bg-black bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8 relative"
          aria-label="Global"
        >
          <div className="flex justify-end lg:flex-1">
            <a href="#" className=" p-1.5 pr-5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <label className="relative inline-flex items-center cursor-pointer">
              <button
                onClick={toggleTheme} 
                className="h-12 w-12 rounded-lg p-2 "
              >
                <svg
                  className="fill-violet-700 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="fill-yellow-500 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </label>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <>
                  <svg
                    className=" w-6 h-6 dark:fill-white/90 fill-black/90"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </>
              ) : (
                <svg
                  className="w-6 h-6 dark:stroke-white/90 stroke-black/90"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((menu, index) => (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === index ? null : index)
                  }
                  className="flex items-center gap-x-1 text-sm font-semibold dark:text-white text-black cursor-pointer"
                >
                  {menu.title}
                  {openDropdown === index ? (
                    // ⬆️ Up Arrow Icon (Open)
                    <svg
                      className="size-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 11.78a.75.75 0 0 0 1.06 0L10 8.06l3.72 3.72a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-1.06 0L5.22 10.72a.75.75 0 0 0 0 1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    // ⬇️ Down Arrow Icon (Closed)
                    <svg
                      className="size-5 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>

                {/* Dropdown Menu with Animation */}
                <AnimatePresence>
                  {openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl dark:bg-black bg-white ring-1 shadow-lg ring-gray-900/5 dark:ring-gray-200/10"
                    >
                      <div className="p-2 px-0">
                        {menu.submenus.map((submenu, subIndex) => (
                          <div
                            key={subIndex}
                            href={submenu.link}
                            className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 "
                          >
                            <div className="flex size-11 flex-none items-center justify-center rounded-lg  ">
                              <svg
                                className="size-6 text-gray-600 group-hover:text-indigo-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                                />
                              </svg>
                            </div>
                            <div className="text-start">
                              <span className="block font-semibold text-gray-900 dark:text-gray-200 cursor-pointer">
                                {submenu.name}
                                <span className="absolute inset-0"></span>
                              </span>
                              <p className="mt-1 text-gray-600">
                                {submenu.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
                onClick={toggleTheme} 
                className="h-12 w-12 rounded-lg p-2 "
              >
                <svg
                  className="fill-violet-700 block dark:hidden"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
                <svg
                  className="fill-yellow-500 hidden dark:block"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800 px-6 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-100 border border-white/20  cursor-pointer">
              <span className="text-lg">Login</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div
              className={` lg:hidden absolute w-full top-17 right-0 z-100  overflow-y-auto dark:bg-black bg-white ring-1 shadow-lg ring-gray-900/5 dark:ring-gray-200/10 text-black dark:text-white px-6 pb-8  sm:ring-1 sm:ring-gray-900/10`}
            >
              <div className="flex items-center justify-between"></div>
              {/* Mobile Menu */}
              {/* Dropdown Menu with Animation */}
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {menuItems.map((menu, index) => (
                        <div key={index} className="-mx-3">
                          <button
                            type="button"
                            className="flex w-full items-center  rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold "
                            aria-controls="disclosure-1"
                            aria-expanded="false"
                            onClick={() =>
                              setOpenDropdown(
                                openDropdown === index ? null : index
                              )
                            }
                          >
                            {menu.title}
                            {openDropdown === index ? (
                              // ⬆️ Up Arrow Icon (Open)
                              <svg
                                className="size-5 "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 11.78a.75.75 0 0 0 1.06 0L10 8.06l3.72 3.72a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.75.75 0 0 0-1.06 0L5.22 10.72a.75.75 0 0 0 0 1.06Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : (
                              // ⬇️ Down Arrow Icon (Closed)
                              <svg
                                className="size-5 "
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </button>

                          {/* Dropdown Menu with Animation */}
                          {openDropdown === index && (
                            <AnimatePresence>
                              {menu.submenus.map((submenu, subIndex) => (
                                <motion.div
                                  key={subIndex}
                                  href={submenu.link}
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-2 space-y-2 divide-y divide-gray-500/10"
                                  id="disclosure-1"
                                >
                                  <a className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold ">
                                    {submenu.name}
                                  </a>
                                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                                    {submenu.description}
                                  </p>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="py-6 flex ">
                      <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800 px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20  cursor-pointer">
                        <span className="text-lg">Login</span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                          <div className="relative h-full w-10 bg-white/20"></div>
                        </div>
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
