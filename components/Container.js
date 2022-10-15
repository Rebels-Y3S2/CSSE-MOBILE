import { Surface } from "@react-native-material/core";
import { StyleSheet } from "react-native"
export default function Container({children, }) {
    return (
        <Surface
            elevation={2}
            category="medium"
            style={styles.containerStyles}
        >
            {children}
        </Surface>
    )
}

const styles = StyleSheet.create({
    containerStyles: {

    }
});