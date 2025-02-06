import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

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
      <div className="bg-black/30">
        <div>
          <div className="flex justify-center items-center ">
            <div className="relative z-10 flex-col px-4  text-center md:py-1 md:flex-row md:justify-center md:items-center  lg:mx-auto  flex mx-4">
              <p className="mb-2 mr-0 md:mb-0 md:text-left  md:mr-4">
                Don’t fall victim to crypto scams
              </p>
              <div className="md:flex-shrink-0">
                <a>
                  <button
                    className=" py-1 pl-3 pr-2 rounded-4xl border-blue-50 border-solid  border-[1.5px] text-gray-2.5 "
                    type="button"
                  >
                    <div className="wrapper">
                      <span className="relative z-[9] inline-block">
                        Read the Guide
                        <svg
                          className="inline-block hover-arrow"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.9999 8.26758L3.99989 8.26758"
                            className="hover-arrow-line-path"
                            strokeWidth="1.5"
                          ></path>
                          <path
                            d="M7 4L11.2426 8.24264L7 12.4853"
                            className="hover-arrow-tip-path"
                            strokeWidth="2"
                            strokeLinejoin="round"
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
      <header className="bg-black">
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <>
                  <svg
                    className=" w-6 h-6 fill-white/90"
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
                  className="w-6 h-6 stroke-white/90"
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
                  className="flex items-center gap-x-1 text-sm font-semibold text-white  cursor-pointer"
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
                      className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5"
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
                              <span
                                className="block font-semibold text-gray-900 cursor-pointer"
                              >
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
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800 px-6 py-1 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-100 border border-white/20  cursor-pointer">
              <span className="text-lg">Login</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </div>

          {isMenuOpen && (
            <div
              className={` lg:hidden absolute w-full top-17 right-0 z-100 w-full overflow-y-auto bg-black text-white px-6 pb-8  sm:ring-1 sm:ring-gray-900/10`}
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
                                  <p className="mt-1 text-gray-600">
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
