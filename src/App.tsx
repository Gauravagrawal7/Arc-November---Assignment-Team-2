import "./App.css";
import AdvertisingBanner from "./components/Reusecomponents/Advertising/AdvertisingBanner";
import BlogPageContent from "./components/Reusecomponents/Blogs/Blogs";
import Footer from "./components/Reusecomponents/Footer/Footer";
import GlobalInfoPart from "./components/Reusecomponents/GlobalBlock/GlobalBlock";
import Header from "./components/Reusecomponents/Header/Header";
import Partner_page from "./screen/Partner-page/Partner_page";
import HubnexUser from "./components/Reusecomponents/Hubnex/Hubnex";
import Benefits from "./components/Reusecomponents/Benefits/Benefits";

const App = () => {
  return (
    <>
      <Header />

      <Partner_page />

      <HubnexUser />

      <Benefits />

      <BlogPageContent />

      <GlobalInfoPart />

      <AdvertisingBanner />

      <Footer />
    </>
  );
};

export default App;
