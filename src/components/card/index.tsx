import { Image, StyleSheet, Text, View } from "react-native";
import { Pokemon } from "../../models/pokemon";

interface Props {
  item: Pokemon;
}

export function Card({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.headerTitle}>{item.name}</Text>
      </View>
      <View style={styles.cardImageContainer}>
        {item.sprites.front_default && (
          <Image
            source={{ uri: item.sprites.front_default }}
            style={styles.cardImage}
          />
        )}

        {item.sprites.back_default && (
          <Image
            source={{ uri: item.sprites.back_default }}
            style={styles.cardImage}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    gap: 12,
  },
  cardHeader: {
    width: "100%",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    color: "rgba(0,0,0,0.5)",
    textTransform: "capitalize",
  },
  cardImageContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 12,
  },
  cardImage: {
    flex: 1,
    aspectRatio: 1,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 2,
    borderRadius: 12,
  },
});
