import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Founders from "../components/sections/Founders";
import ProductGrid from "../components/sections/ProductGrid";
import TrustBadges from "../components/sections/TrustBadges";
import Reviews from "../components/sections/Reviews";
import CommunityGallery from "../components/sections/CommunityGallery";
import Newsletter from "../components/sections/Newsletter";
import AnimeCharacters from "../components/sections/AnimeCharacters";


export default function HomePage() {
  return (
    <main>
      <Hero />
      <AnimeCharacters />
      <HowItWorks />
      <Founders />
      <ProductGrid />
      <TrustBadges />
      <Reviews />
      <Newsletter />
    </main>
  );
}
