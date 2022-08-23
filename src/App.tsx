import { useState } from 'react';
import { Inclusao } from './components/Inclusao';
import { Item } from './types/Item';
import { Carteira } from './components/Carteira';
import { Filtro } from './components/Filtro';
import { Lista } from './components/Lista';
import React from 'react';

function App() {
  const [itens, setItens] = useState<Item[]>([]);
  // itens é o meu banco de dados array
  const [filter, setFilter] = useState('');

  const handlerSave = (
    newDescription: string,
    newValue: number,
    newType: string
  ) => {
    let newItem: Item = {
      description: newDescription,
      value: newValue,
      type: newType,
      id: itens.length + 1,
    };
    setItens([...itens, newItem]);
  };

  const handlerFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredList = (): Item[] => {
    if (filter == 'receita') {
      return itens.filter(item => {
        return item.type == 'receita';
      });
    } else if (filter == 'despesa') {
      return itens.filter(item => {
        return item.type == 'despesa';
      });
    } else {
      return itens;
    }
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

        <Filtro filter={handlerFilter}></Filtro>

        <div className="flex flex-col">
          <div className="mt-2 w-full border bg-pink-200 p-5">
            <div className="mb-2 flex border-b-2 border-pink-400 py-2">
              <div className="basis-1/4 font-semibold">Valor</div>
              <div className="basis-1/4 font-semibold">Tipo</div>
              <div className="basis-2/4 font-semibold">Descrição</div>
            </div>

            <Lista list={filteredList()}></Lista>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
