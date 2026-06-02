export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string | null;
    back_default: string | null;
  };
}
