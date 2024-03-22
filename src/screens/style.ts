import { StyleSheet } from "react-native";
import { colors } from "../constants/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    text: {
        fontSize: 30, color: colors.orange
    }
})