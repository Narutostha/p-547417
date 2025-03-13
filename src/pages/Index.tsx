import React from "react";
import PromoBanner from "@/components/layout/PromoBanner";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/about/AboutSection";
import NewsletterForm from "@/components/layout/NewsletterForm";
import FeaturedProducts from "@/components/featured/FeaturedProducts";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full max-w-[1440px] relative mx-auto my-0">
        <PromoBanner />
        <Header />
        <main>
          <AboutSection />
          <FeaturedProducts />
          <NewsletterForm />
        </main>
        <footer className="bg-[#1A432E] text-white py-6 px-5 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Organic Fiber. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 mt-3">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
