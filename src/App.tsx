import { useState } from "react";
// type AppProps = {
//   isTrue: boolean;
// };

function App() {
  const [isTrue, setIsTrue] = useState(false);
  const [num, setNum] = useState(1);
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
    <section>
      <div className="flex h-screen items-center justify-center flex-col gap-4">
        {isTrue ? (
          <iframe
            src="https://giphy.com/embed/MDJ9IbxxvDUQM"
            width="280"
            height="270"
            allowFullScreen
          ></iframe>
        ) : (
          <iframe
            src="https://giphy.com/embed/ffzhLUixCtlsc"
            width="290"
            height="280"
            allowFullScreen
          ></iframe>
        )}
        <h1 className="text-white text-sm text-center">
          {isTrue
            ? "You mean the whole world to me my meatball! HAPPY VALENTINES DAY!"
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
  );
}

export default App;
