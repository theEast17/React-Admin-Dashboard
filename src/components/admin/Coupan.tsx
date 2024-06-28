import { FormEvent, useEffect, useState } from "react";

const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const allNumbers = "1234567890";
const allSymbols = "!@#$%^&*()_+";

const Coupon = () => {
  const [size, setSize] = useState<number>(8);
  const [prefix, setPrefix] = useState<string>("");
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(false);
  const [includeCharacters, setIncludeCharacters] = useState<boolean>(false);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const [coupon, setCoupon] = useState<string>("");

  const copyText = async (coupon: string) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!includeNumbers && !includeCharacters && !includeSymbols)
      return alert("Please Select One At Least");

    let result: string = prefix || "";
    const loopLength: number = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = "";
      if (includeCharacters) entireString += allLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNum: number = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <section className="w-full flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-[85%] max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Coupon Generator</h1>
        <section>
          <form className="space-y-4" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Text to include"
              value={prefix}
              onChange={(e) => setPrefix(e.target.value)}
              maxLength={size}
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            <input
              type="number"
              placeholder="Coupon Length"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              min={8}
              max={25}
              className="w-full p-2 border border-gray-300 rounded-md"
            />

            <fieldset className="space-y-2">
              <legend className="font-semibold">Include</legend>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={() => setIncludeNumbers((prev) => !prev)}
                  className="mr-2"
                />
                <span>Numbers</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeCharacters}
                  onChange={() => setIncludeCharacters((prev) => !prev)}
                  className="mr-2"
                />
                <span>Characters</span>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={() => setIncludeSymbols((prev) => !prev)}
                  className="mr-2"
                />
                <span>Symbols</span>
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full py-2 bg-sky-500 text-white font-bold rounded-md hover:bg-sky-600 transition-colors"
            >
              Generate
            </button>
          </form>

          {coupon && (
            <code className="block mt-4 p-2 bg-gray-100 rounded-md text-center">
              {coupon}{" "}
              <span
                onClick={() => copyText(coupon)}
                className="text-sky-500 cursor-pointer ml-2"
              >
                {isCopied ? "Copied" : "Copy"}
              </span>{" "}
            </code>
          )}
        </section>
      </div>
    </section>
  );
};

export default Coupon;
