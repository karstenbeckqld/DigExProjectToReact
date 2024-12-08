import { useUser } from "../hooks/useUser.tsx";
import Navbar from "./Navbar.tsx";

const Home = () => {

    const { user } = useUser();

    return (
        <div>
            <Navbar user={user} />
            Home
            Welcome {user?.firstName} {user?.lastName}
        </div>
    );
};

export default Home;