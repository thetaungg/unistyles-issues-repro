import { Text } from "react-native"
import { StyleSheet } from 'react-native-unistyles'

const styles = StyleSheet.create(theme => ({
    text: {
        _web: {
            fontSize: 50         
        },

        variants: {
            variant: {
                primary: {
                    color: theme.colors.primary,
                },
                secondary: {
                    color: theme.colors.secondary,
                }
            }
        }
    }
}))

const Home = () => {
    return (
        <>
            <Text style={[styles.text, { fontSize: 12 }]}>
                My fontSize should be 12
            </Text>
        </>
    )
}

export default Home