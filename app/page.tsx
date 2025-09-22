import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Video from '@/components/Video'
import Services from '@/components/Services'
import ServicesTab from '@/components/ServicesTab'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Companies from '@/components/Companies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Video />
      <Services />
      <ServicesTab />
      <Testimonials />
      <FAQ />
      <Companies />
      <Contact />
      <Footer />
    </>
  );
}
