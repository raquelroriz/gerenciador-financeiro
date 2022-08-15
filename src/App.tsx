import { useState } from 'react';
import { Inclusao } from './components/Inclusao';
import { Item } from './types/Item';
import { Carteira } from './components/Carteira';
import React from 'react';

function App() {
  const [itens, setItens] = useState<Item[]>([]);
  // itens é o meu banco de dados array
  const handlerSave = (newItem: Item) => {
    setItens([...itens, newItem]);
  };

  return (
    <div
      id="container"
      className="m-5 flex flex-col items-center border-2 border-gray-800 text-black bg-pink-100 p-5"
    >
      <p className="text-2xl italic font-bold">Gerenciador Financeiro</p>

      <div id="formulario" className="w-full border p-5">
        <Inclusao saveMethod={handlerSave}></Inclusao>
      </div>

      <div id="contadores" className="my-5 w-full border p-5">
        <Carteira lancamentos={itens}></Carteira>
      </div>

      <div id="listagem" className="w-full border">
        <div className="flex items-center justify-center p-5">
          <p className="font-bold ">Lista de Lançamentos</p>
        </div>
        <div className="flex flex-col">
          <div className="w-full">
            <div className="flex">
              <button className="basis-1/3 py-1 border border-gray-800 bg-pink-400 font-bold text-gray-900">
                Receita
              </button>
              <button className="mx-2 basis-1/3 border border-gray-800 bg-pink-400 py-1 font-bold text-gray-900">
                Despesa
              </button>
              <button className="basis-1/3 border border-gray-800 bg-pink-400 py-1 font-bold text-gray-900">
                Total
              </button>
            </div>
          </div>
          <div className="mt-2 w-full border bg-pink-200 p-5">
            <div className="mb-2 flex border-b-2 border-pink-400 py-2">
              <div className="basis-1/4 font-semibold">Valor</div>
              <div className="basis-1/4 font-semibold">Tipo</div>
              <div className="basis-2/4 font-semibold">Descrição</div>
            </div>
            <div className="flex">
              <div className="basis-1/4">5,00</div>
              <div className="basis-1/4">Despesas</div>
              <div className="basis-2/4">Salgados</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
