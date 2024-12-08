import './App.css'
import { BrowserRouter } from "react-router-dom";
import AppContent from "./components/AppContent.tsx";
import { UserContextProvider } from "./contexts/UserContextProvider.tsx";

function App() {

    return (
        <UserContextProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </UserContextProvider>
    )
}

export default App
