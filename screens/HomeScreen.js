import { useSpotifyAuth } from "../utils";
import SongList from "../components/SongList";
import SpotifyAuthButton from "../components/SpotifyAuthButton";
import {SafeAreaView, StatusBar, StyleSheet} from "react-native";
import { Themes } from "../assets/Themes";
import Header from "../components/header";
import "react-native-gesture-handler";

export default function HomeScreen() {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
    const { token, tracks, getSpotifyAuth } = useSpotifyAuth();
  
    console.log("tracks", tracks);
  
    let contentDisplayed = null;
  
    if (token) {
      contentDisplayed = 
        <SongList tracks = {tracks}/>;
    } else {
      contentDisplayed = (
         <SpotifyAuthButton authFunction = {getSpotifyAuth}/>
      );
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        {contentDisplayed}
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  
  });