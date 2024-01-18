import Category from "../components/Category";
import LoveBanner from "../components/LoveBanner";
import Occasion from "../components/Occasion";
import Crafting from "../components/Crafting";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../GlobalContext/Context";

const Home = () => {
    const { getCategories } = useContext(GlobalContext)
    useEffect(() => {
        getCategories()
    }, [])
    return (
        <div>
            <LoveBanner />
            <Category />
            <Occasion />
            <Crafting />
        </div>
    );
};

export default Home;