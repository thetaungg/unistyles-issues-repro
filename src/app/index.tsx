import { Button, Text } from "react-native"
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles'

const styles = StyleSheet.create(theme => ({
    text: {
        color: theme.colors.primary,
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
    const onChangeTheme = () => {
        UnistylesRuntime.updateTheme('light', theme => ({
            ...theme,
            colors: {
                ...theme.colors,
                primary: 'green',
                secondary: 'blue'
            }
        }))
        console.log(UnistylesRuntime.getTheme())
    }
    return (
        <>
            <Text style={[styles.text, { fontSize: 12 }]}>
                After updating the theme, my color should be green
            </Text>
            <Button title="Change Theme" onPress={onChangeTheme} />
        </>
    )
}

export default Home