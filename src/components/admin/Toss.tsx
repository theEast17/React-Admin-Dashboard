import { useState } from "react";
import head from '../../assets/head.png';
import tails from '../../assets/tails.png';

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) {
      setAngle((prev) => prev + 180);
    } else {
      setAngle((prev) => prev + 360);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl mb-5 font-bold text-left">Toss</h1>
      <div className="relative w-40 h-40 perspective-1000">
        <div
          className="w-full h-full absolute transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${angle}deg)`,
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={head} alt="head" className="w-full h-full"/>
        </div>
        <div
          className="w-full h-full absolute transition-transform duration-700 ease-out"
          style={{
            transform: `rotateY(${angle + 180}deg)`,
            backfaceVisibility: 'hidden',
          }}
        >
          <img src={tails} alt="tails" className="w-full h-full"/>
        </div>
      </div>
      <button
        onClick={flipCoin}
        className="mt-8 bg-sky-400 text-white font-bold py-2 px-4 rounded active:bg-sky-700 transition-all"
      >
        Flip Coin
      </button>
    </section>
  );
};

export default Toss;
