import { useState } from "react";
import { useEffect, useRef } from "react";
//@ts-expect-error Description for ts expect error
import BIRDS from "vanta/src/vanta.birds";

function App() {
  useEffect(() => {
    BIRDS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x2f071b,
    });
  }, []);

  const [isTrue, setIsTrue] = useState(false);
  const [num, setNum] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  function showTrue() {
    setIsTrue(!isTrue);
  }
  function handleSizeChange() {
    setNum((number) => number + 1);
  }
  function handleReset() {
    setIsTrue(false);
    setNum(1);
  }
  const numToString = num.toString();
  return (
    <div
      id="vanta"
      className="bg-gradient-to-t from-pink-400 to-red-200"
      ref={sectionRef}
    >
      <section>
        <div className="flex h-screen items-center justify-center flex-col gap-4">
          {isTrue ? (
            <iframe
              src="https://giphy.com/embed/MDJ9IbxxvDUQM"
              width="180"
              height="170"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              src="https://giphy.com/embed/ffzhLUixCtlsc"
              width="190"
              height="180"
              allowFullScreen
            ></iframe>
          )}
          <h1 className="text-white text-sm text-center">
            {isTrue
              ? "You mean the whole world to me my Bella! HAPPY VALENTINES DAY!"
              : "Bella will you be my valentine?"}
          </h1>
          {isTrue ? (
            <button
              onClick={handleReset}
              className="text-white text-sm border-2 px-4 py-2 rounded-md"
            >
              Reset
            </button>
          ) : (
            <div className="space-x-8">
              <button
                onClick={showTrue}
                className="text-white border-2 px-4 py-2 rounded-md"
                style={{ fontSize: `${numToString}rem` }}
              >
                Yes
              </button>
              <button
                onClick={handleSizeChange}
                className="text-white text-sm border-2 px-4 py-2 rounded-md"
              >
                No
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
