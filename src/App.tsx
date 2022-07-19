import { useState } from 'react';

function App() {
  return (
    <div
      id="container"
      className="m-5 flex flex-col items-center border-2 border-gray-800 text-black bg-pink-100 p-5"
    >
      <div id="formulario" className="w-full border border-gray-800 p-5">
        <div className="flex flex-col">
          <div className="w-full ">
            <div className="flex">
              <div className="basis-2/4 border border-pink-400">01</div>
              <div className="mx-2 basis-1/4 border border-pink-400">02</div>
              <div className="basis-1/4 border border-pink-400">03</div>
            </div>
          </div>
          <div className="mt-2 w-full">
            <div className="flex items-center justify-center">
              <button className="w-full bg-pink-400">Incluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
