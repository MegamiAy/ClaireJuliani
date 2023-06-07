import { Text, View } from "react-native";

export default function Header({ title }) {
    return (
        <View /*style={styles.header}*/>
            <Text /*style={styles.headerTextStyle}*/>{title}</Text>
        </View>
    )
}