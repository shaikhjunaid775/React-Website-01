import { useRef, useState } from "react";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { ThemeContext } from "../context/ThemeContext";
import SplitText from "../reactbits/SplitText/SplitText";

function Banner() {
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const divRef = useRef();
  const { isDarkMode } = useContext(ThemeContext);

  const handleMouseMove = (e) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  return (
    <>
      <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className=" relative isolate overflow-hidden dark:bg-gray-900 bg-gray-200 "
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${
              position.y
            }px, ${
              isDarkMode === "light"
                ? "rgba(0, 0, 0, 0.13)"
                : "rgba(255, 255, 255, 0.17)"
            }, transparent 20%)`
          }}
        />
        <svg
          className="hidden dark:block absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="100%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
            }}
          ></div>
        </div>

        <div className="mt-[-50px] flex h-screen items-center justify-center">
          <div className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
            <SplitText
              text="Hello, User!"
              className="mt-10 text-5xl font-bold tracking-tight dark:text-white text-black sm:text-6xl"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              // onLetterAnimationComplete={handleAnimationComplete}
            />
            <h1 className="mt-10 text-5xl font-bold tracking-tight dark:text-white text-black sm:text-6xl">
              Modernize your
              <span className="text-sky-500">
                {" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " financial infrastructure",
                    1000 // wait 1s before replacing
                  ]}
                  wrapper="span"
                  speed={10}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 dark:text-gray-300 ">
              Ripple is the leading provider of digital asset infrastructure for
              financial services. Send cross-border payments in real-time,
              engage with tokenization and digital assets, and meet regulatory
              compliance requirements—all in one place.
            </p>
            <div className="mt-5 flex items-center justify-center gap-x-6">
              <a
                href="/register"
                className="rounded-full bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 ="
                rel="noreferrer"
              >
                Try Now →
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
