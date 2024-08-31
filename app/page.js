import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Programs from "@/components/Programs";
import Subscription from "@/components/Subscription";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Programs/>
      <Features/>
      <CTA/>
      <Pricing/>
      <Testimonials/>
      <Subscription/>
    </main>  
  );
}
