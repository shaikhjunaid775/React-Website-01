import { useEffect, useState } from "react";


const Counter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let incrementTime = duration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span className="text-4xl font-bold text-sky-500">{count}+</span>;
};
const AnimatedCounters = () => {
  return (
    <section className="grid gap-12 md:grid-cols-3 md:gap-16 p-10 dark:bg-gray-900 bg-gray-200 dark:text-gray-300 text-gray-600">
      {/* Counter #1 */}
      <div className="text-center">
        <Counter value="500" duration={2000} />
        <p className="text-lg ">Satisfied Customers</p>
      </div>
      
      {/* Counter #2 */}
      <div className="text-center">
        <Counter value="150" duration={2500} />
        <p className="text-lg ">Projects Completed</p>
      </div>
      
      {/* Counter #3 */}
      <div className="text-center">
        <Counter value="100" duration={3000} />
        <p className="text-lg ">Partners Worldwide</p>
      </div>
    </section>
  );
};

export default AnimatedCounters;
