import { fetchService } from "./fetchService";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

export const pokemonService = {
  getAll: async () => {
    const data = await fetchService.fetch(API_URL);
    const dataList = data.results.map((d: { url: string }) =>
      fetchService.fetch(d.url),
    );
    return await Promise.all(dataList);
  },
};
("");
