import React from "react";
import { AppBar } from "./AppBar";
import { NowPlaying } from "../views/NowPlaying";
import { UpComing} from"../views/UpComing";
import { TopRated } from "../views/TopRated";
import { View, StyleSheet } from "react-native";
import { Routes, Route } from "react-router-native";
export const Main = () => {
return (
<View style={styles.container}>
<AppBar/>
    <Routes>
        <Route path="/" exact Component={NowPlaying}/>
        <Route path="/upcoming" exact Component={UpComing}/>
        <Route path="/top_rated" exact Component={TopRated}/>
    </Routes>
</View>
);
}
const styles= StyleSheet.create({
container: {
backgroundColor: '#fff',
alignItems: 'center',
backgroundColor: '#000',
paddingBottom: 200
}
});