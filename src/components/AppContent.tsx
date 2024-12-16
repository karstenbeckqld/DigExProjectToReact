import '../App.css'
import apiClient from "../services/api-client.ts";
import LoginForm from "../pages/LoginForm.tsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home.tsx";
import RegisterForm from "../pages/RegisterForm.tsx";
import Profile from "../pages/Profile.tsx";
import EditProfile from "../pages/EditProfile.tsx";
import Guide from "../pages/Guide.tsx";
import SpiritOverview from "../pages/SpiritOverview.tsx";
import EditCocktail from "../pages/EditCocktail.tsx";
import CocktailDetailView from "../pages/CocktailDetailView.tsx";
import AddCocktailView from "../pages/AddCocktailView.tsx";
import AdminView from "../pages/AdminView.tsx";
import AdminEditProfileView from "../pages/AdminEditProfileView.tsx";
import AboutView from "../pages/AboutView.tsx";
import FourOFourView from "../pages/FourOFourView.tsx";
import { useEffect } from "react";
import { LoginResponse } from "../services/validationService.ts";
import { useUser } from "../hooks/useUser.tsx";

function AppContent() {

    const navigate = useNavigate();
    const { setUser } = useUser();

    useEffect(() => {
        if (!localStorage.accessToken)
            navigate('/signin');

        apiClient.get<LoginResponse>('/auth/validate', {
            headers: {
                'Authorization': `Bearer ${localStorage.accessToken}`
            }
        })
            .then((res) => {
                setUser(res.data.user);
            })
            .catch((error) => {
                // console.log(error.response.status);
                console.log(error.code);
                if (error.code === 'ERR_NETWORK' ||
                    error.code === 'ECONNREFUSED' ||
                    error.response.status !== 200) {
                    localStorage.removeItem('accessToken');
                    navigate('/signin');
                }
            });

    }, [navigate, setUser])

    return (
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<LoginForm />} />
                <Route path='/signup' element={<RegisterForm />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/editProfile' element={<EditProfile />} />
                <Route path='/guide' element={<Guide />} />
                <Route path='/cocktail/:type' element={<SpiritOverview />} />
                <Route path='/cocktail/edit/:id' element={<EditCocktail />} />
                <Route path='/cocktail/cocktail/:id' element={<CocktailDetailView />} />
                <Route path='/add_cocktail' element={<AddCocktailView />} />
                <Route path='/admin' element={<AdminView />} />
                <Route path='/adminEditProfile/id' element={<AdminEditProfileView />} />
                <Route path='/about' element={<AboutView />} />
                <Route path='404' element={<FourOFourView />} />
            </Routes>
    )
}

export default AppContent
