import { useEffect, useState } from "react";
import { pokemonService } from "../services/pokemonService";
import { Pokemon } from "../models/pokemon";

export const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  const fetchPokemons = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await pokemonService.getAll();
      setPokemons(data);
    } catch {
      setError("Erro ao buscar pokemons");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return { pokemons, loading, error };
};
