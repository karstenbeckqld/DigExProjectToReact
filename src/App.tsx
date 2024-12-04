import './App.css'
import LoginForm from "./components/LoginForm.tsx";
import { Grid, GridItem } from "@chakra-ui/react";

function App() {

    return (
        <>
            <Grid
                templateAreas={{
                    base: `"nav" "main"`,
                    lg: `"nav nav" "main main"`
                }}
                gridTemplateColumns={{
                    base: '1fr',
                    lg: '200px 1fr'
                }}
            >
                <GridItem area={'nav'}></GridItem>
                <GridItem area={'main'} paddingX={2}>
                    <LoginForm />
                </GridItem>
            </Grid>
        </>
    )
}

export default App
