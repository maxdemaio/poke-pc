"use client";

import React, { useEffect, useState } from "react";

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
  "raichu-alola",
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

const API_URL: string = "https://pokeapi.co/api/v2/pokemon/";

export default function Home() {
  const [pokemon, setPokemon] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch pokemon data by appending the pokemon name to the API URL
        // and then log the data to the console
        const pokeResponses = await Promise.all(
          pokeNameList.map((p) =>
            fetch(`${API_URL}${p}`).then((res) => res.json())
          )
        );
        console.log(pokeResponses);
        setPokemon(pokeResponses);
      } catch (err) {
        console.error(err);
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

  const handleClick = (pokemon: any) => {
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
        <div className="border border-neutral-400">
          <div className="flex justify-between">
            <span>
              {selectedPokemon ? selectedPokemon.name : "No Pokemon Selected"}
            </span>
            <span>gender</span>
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
          <div className="flex justify-between">
            <span>Level</span>
            <span>Saved Stuff</span>
          </div>
          <div>Ability</div>
          <div>Item</div>
        </div>
        <div className="relative p-4 flex flex-col w-full border border-neutral-400">
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
            <ul className="flex flex-wrap gap-4">
              {pokemon.map((p) => (
                <li
                  onClick={() => handleClick(p)}
                  key={p.id}
                  className="relative flex gap-2 items-end"
                >
                  {/* Gen 8 sword/shield */}
                  {/* Gen 7 alola */}
                  <img
                    width={68}
                    height={56}
                    src={
                      p.sprites.versions["generation-viii"].icons.front_default
                    }
                    alt={p.name}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
}
