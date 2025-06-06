import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import FAQ from '../components/sections/FAQ';
import InternetPlans from '../components/sections/InternetPlans';
import TVBox from '../components/sections/TVBox';
import ContactForm from '../components/sections/ContactForm';
import GamerPlan from '../components/sections/GamerPlan';
import BusinessSection from '../components/sections/BusinessSection';
import InternetBenefits from '../components/sections/InternetBenefits';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <InternetPlans />
       <GamerPlan />
      <TVBox />
      <InternetBenefits />
      <BusinessSection />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  );
}
