import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import SelectByBrand from "../SelectByBrand/SelectByBrand";
import ShopByCategory from "../Shop/ShopByCategory";
import ShopByAge from "../ShopByAge/ShopByAge";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Gallery />
            <ShopByCategory />
            <ShopByAge></ShopByAge>
            <SelectByBrand />
        </div>
    );
};

export default Home;