import '../App.css'
import LoginForm from "./LoginForm.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home.tsx";
import SignUpForm from "./SignUpForm.tsx";
import Profile from "./Profile.tsx";
import EditProfile from "./EditProfile.tsx";
import Guide from "./Guide.tsx";
import SpiritOverview from "./SpiritOverview.tsx";
import EditCocktail from "./EditCocktail.tsx";
import CocktailDetailView from "./CocktailDetailView.tsx";
import AddCocktailView from "./AddCocktailView.tsx";
import AdminView from "./AdminView.tsx";
import AdminEditProfileView from "./AdminEditProfileView.tsx";
import AboutView from "./AboutView.tsx";
import { useEffect } from "react";
import apiClient from "../services/api-client.ts";
import { LoginResponse } from "../types/types.ts";
import { useUser } from "../hooks/useUser.tsx";

function AppContent() {

    const navigate = useNavigate();
    const {setUser} = useUser();

    useEffect(() => {

        if (!localStorage.accessToken) {
            navigate('/signin');
        }

        apiClient.get<LoginResponse>('/auth/validate', {
            headers: {
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })
            .then((res) => {
                console.log(`From then: " ${res.data.user}`);
                setUser(res.data.user);
            })
            .catch((error) => {
                console.log(error.response.status)
                if (error.response.status === 403) {
                    localStorage.removeItem('accessToken');
                    navigate('/signin');
                }
            });

    }, [navigate])

    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<LoginForm />} />
                <Route path='/signup' element={<SignUpForm />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/editProfile' element={<EditProfile />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/cocktail/type' element={<SpiritOverview />} />
                <Route path='/cocktail/edit/id' element={<EditCocktail />} />
                <Route path='/cocktail/id' element={<CocktailDetailView />} />
                <Route path='/add_cocktail' element={<AddCocktailView />} />
                <Route path='/admin' element={<AdminView />} />
                <Route path='/adminEditProfile/id' element={<AdminEditProfileView />} />
                <Route path='/about' element={<AboutView />} />
            </Routes>
    )
}

export default AppContent
