import Banner from "@/components/Home/Banner/Banner";
import Popular from "@/components/Home/Popular/Popular";
import TopRated from "@/components/Home/TopRated/TopRated";
import Trending from "@/components/Home/Trending/Trending";
import Footer from "@/shared/Footer/Footer";
import NavBar from "@/shared/NavBar/NavBar";

export default function HomePageLayout() {
  return (
    <>
      <NavBar />
      <Banner />
      <Trending />
      <Popular />
      <TopRated />
      <Footer />
    </>
  );
}
