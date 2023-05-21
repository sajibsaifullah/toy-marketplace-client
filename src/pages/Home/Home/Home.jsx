import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../Shop/ShopByCategory";
import ShopByAge from "../ShopByAge/ShopByAge";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Gallery />
            <ShopByCategory />
            <ShopByAge></ShopByAge>
        </div>
    );
};

export default Home;