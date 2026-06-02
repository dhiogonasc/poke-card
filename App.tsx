import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Card } from "./src/components/card";
import { usePokemon } from "./src/hooks/pokemonHook";
import { Pokemon } from "./src/models/pokemon";

export default function App() {
  const { pokemons, loading, error } = usePokemon();

  const renderPokemon = ({ item }: { item: Pokemon }) => {
    return <Card item={item} />;
  };

  if (loading) {
    return (
      <SafeAreaView>
        <View>
          <ActivityIndicator size="large" />
          <Text>Buscando pokemons...</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <View>
          <Text>{error}</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPokemon}
        style={styles.flatList}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  flatList: {
    flex: 1,
    width: "100%",
  },
  listContent: {
    alignItems: "center",
    padding: 24,
    gap: 24,
  },
});
