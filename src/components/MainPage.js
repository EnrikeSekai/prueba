import FormSearch from "./FormSearch";
import { useAuth0 } from "@auth0/auth0-react";
import Movies from "./Movies";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";

const MainPage = () => {
    const { isAuthenticated } = useAuth0();
    return ( 
        <>
            <FormSearch />
            {isAuthenticated ? (
            <>
                <Profile />
                <LogoutButton />
            </>
        ) : (
            <div className="butt"><LoginButton /> 
            </div>
        )}
            <Movies />
           
        </>
    );
}
 
export default MainPage;