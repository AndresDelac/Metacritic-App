/* eslint-disable prettier/prettier */
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
// import icon from "./assets/icon.png";
// eslint-disable-next-line import/no-unresolved
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { GameCard } from "./GameCard";
import { Logo } from "./Logo";
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar style="light" />
      <Logo />
      <FlatList
      data={games}
      keyExtractor={(game) => game.slug}
      renderItem={({ item }) => <GameCard game={item} />}
      >
        {games.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </FlatList>
    </View>
  );
}
