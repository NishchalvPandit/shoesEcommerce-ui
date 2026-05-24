import HeroSection from '../../components/HeroSection/HeroSection'
import MarqueeStrip from '../../components/MarqueeStrip/MarqueeStrip'
import TrendingProducts from '../../components/TrendingProducts/TrendingProducts'
import BentoCategories from '../../components/BentoCategories/BentoCategories'
import Features from '../../components/features/Features'
import Testimonials from '../../components/Testimonials/Testimonials'
import NewsletterCTA from '../../components/NewsletterCTA/NewsletterCTA'

function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeStrip />
      <TrendingProducts />
      <BentoCategories />
      <Features />
      <Testimonials />
      <NewsletterCTA />
    </>
  )
}

export default Home
