import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "./home/hero/Hero";
import FeaturedProducts from "./home/featured-products/FeaturedProducts";
import Services from "./home/services/Services";
import Posts from "./home/posts/Posts";
import Testimonials from "./home/testimonials/Testimonials";
import CallToAction from "./home/call-to-action/CallToAction";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Posts />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}