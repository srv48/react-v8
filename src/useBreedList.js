import { useEffect, useState } from "react";

let localCache = {};

export default function useBreedList(animal) {
  let [breedList, setBreedList] = useState([]);
  let [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus("loading");

      let response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`,
      );
      let json = await response.json();
      localCache[animal] = json.breeds || [];
      setBreedList(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [breedList, status];
}
