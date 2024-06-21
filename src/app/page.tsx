"use client";

import React, { useEffect, useState } from "react";
import PokeAPI, { IPokemon } from "pokeapi-typescript";
import { Icons } from "./components/icons";


const pokeNameList: string[] = [
  "pikachu",
  "charizard",
  "rhydon",
  "mewtwo",
  "lapras",
  "eevee",
  "machamp",
  "gengar",
  "raichu",
  "ditto",
  "hitmonlee",
  // "raichu-alola",
  "wingull",
  "metapod",
  "onix",
  "pidgey",
  "rayquaza",
  "mew",
  "lugia",
  "ho-oh",
  "celebi",
  "treecko",
  "torchic",
  "mudkip",
  "poochyena",
  "lucario",
];

export default function Home() {
  const [pokemon, setPokemon] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemon | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokeResponses = await Promise.all(
          pokeNameList.map((name) => PokeAPI.Pokemon.resolve(name))
        );
        console.log(pokeResponses);
        setPokemon(pokeResponses);
      } catch (error) {
        console.error(error);
        // toast({
        //   title: "Error",
        //   description: "Failed to fetch top items.",
        //   variant: "destructive",
        // });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // clean up toast
  }, []);

  const handleClick = (pokemon: IPokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <main className="bg-[#FDF4D3] p-8 flex gap-4 flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Poke PC
        </h1>
        <p className="text-lg text-center">
          View your favorite pokemon in classic PC format
        </p>
      </div>

      <div className="flex gap-4">
        <div className="rounded-md border border-neutral-400 p-4 flex flex-col gap-2">
          <div className="flex justify-center capitalize">
            <span className={`tracking-tight text-xl`}>
              {selectedPokemon ? selectedPokemon.name : "No Pokemon Selected"}
            </span>
          </div>
          <div className="flex items-center justify-center w-[200px] h-[200px]">
            {selectedPokemon ? (
              <img
                src={
                  selectedPokemon.sprites.versions["generation-v"][
                    "black-white"
                  ].animated.front_default
                }
                alt={selectedPokemon.name}
              />
            ) : (
              "Pokemon image"
            )}
          </div>
          <div className="flex justify-between rounded-md p-2 border border-[#D0C8B8]">
            <span>Level</span>
            <span>Saved Stuff</span>
          </div>
          <div className="rounded-md p-2 border border-[#D0C8B8]">Ability</div>
          <div className="rounded-md p-2 border border-[#D0C8B8]">Item</div>
        </div>
        <div className="rounded-md relative p-4 flex flex-col w-full border border-neutral-400">
          <div className="self-center flex gap-2">
            <span>left</span>
            <div className="px-8">Box 1</div>
            <span>right</span>
          </div>
          {loading ? (
            <div id="pokemon" className="flex border border-neutral-400">
              <p>Loading...</p>
            </div>
          ) : (
            <ul className="flex flex-wrap gap-1">
              {pokemon.map((p) => (
                <li
                  onClick={() => handleClick(p)}
                  key={p.id}
                  className="p-2 pb-6 transition-all duration-300 items-start justify-center bg-white/10 hover:bg-white/60 rounded-2xl cursor-pointer group relative"
                >
                  {/* Gen 8 sword/shield */}
                  {/* Gen 7 alola */}
                  <div className="relative w-full">
                    <img
                      width={68}
                      height={56}
                      className="transition-all group-hover:scale-125 duration-300"
                      src={
                        p.sprites.versions["generation-viii"].icons
                          .front_default
                      }
                      alt={p.name}
                    />
                    <div className="absolute -bottom-2 right-3">
                      <Icons.heart />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
