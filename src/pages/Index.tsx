
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CuisineSection } from "@/components/CuisineSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { MenuSection } from "@/components/MenuSection";
import { GallerySection } from "@/components/GallerySection";
import { PromoSection } from "@/components/PromoSection";
import { ClientsSection } from "@/components/ClientsSection";
import { CollectionStats } from "@/components/CollectionStats";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <NavBar />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <CuisineSection />
        <FeaturesSection />
        <MenuSection />
        <PromoSection />
        <GallerySection />
        <CollectionStats />
        <ClientsSection />
        <NewsletterSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
