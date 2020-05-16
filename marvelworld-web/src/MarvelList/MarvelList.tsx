import React, { useState, useEffect } from "react";
import Characters from "./MarvelListInterfaces";
import axios from "axios";
import env from "@beam-australia/react-env";

function MarvelList() {
  const defaultCharactersList: Array<Characters> = [];

  const [charactersList, setCharacters] = useState<Array<Characters>>(
    defaultCharactersList
  );
  console.log(env("MARVEL")+"/api/MarverlWorld");
  //.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=714bb5a21a336a01dc4205c7f1146991&hash=823030e123364bed2249367876fb0b6c')
  useEffect(() => {
    axios.get(env("MARVEL")+"/api/MarverlWorld").then((res) => {
      let listMarvelCharacters: Array<Characters> = [];
      res.data.forEach((value: any) => {
        let character: Characters;
        character = {
          name: value.name,
          thumbnail: `${value.thumbnail.path}.${value.thumbnail.extension}`,
        };

        listMarvelCharacters.push(character);
      });

      setCharacters(listMarvelCharacters);
    });
  }, []);

  return (
    <div>
      {charactersList.map((character, index) => (
        <li key={index}>{character.name}</li>
        //    <img src={character.thumbnail} alt="Italian Trulli"></img>
      ))}
    </div>
  );
}

export default MarvelList;
