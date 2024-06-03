"use client";

import { useState } from "react";
import Head from "next/head";
import {
  decimalToPermissions,
  permissionsToDecimal,
} from "../utils/calculatePermissions";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (isNaN(Number(input))) {
      const actions = input.split(",").map((a) => a.trim());
      const decimal = permissionsToDecimal(actions);
      setResult([decimal.toString()]);
    } else {
      const decimal = BigInt(input);
      const permissions = decimalToPermissions(decimal);
      setResult(permissions);
    }
  };

  const handleReset = () => {
    setInput("");
    setResult([]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>LMS Permission Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">LMS Permission Calculator</h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <input
            type="text"
            className="w-full p-4 mb-4 text-lg bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter decimal value or actions"
            value={input}
            onChange={handleInputChange}
          />
          <div className="flex space-x-4">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Reset
            </button>
          </div>
          <div className="space-y-2 mt-4 typing-container">
            <p className="text-xl">Result:</p>
            <ul className="list-disc list-inside">
              {result.map((res, index) => (
                <li key={index} className="typing-item typing">
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
