import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../Shop/ShopByCategory";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner />
            <Gallery />
            <ShopByCategory />
        </div>
    );
};

export default Home;