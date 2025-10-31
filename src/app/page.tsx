import { HeroSection } from '@/components/landing/HeroSection';
import { PreviewSection } from '@/components/landing/PreviewSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { Footer } from '@/components/landing/Footer';
import { FadeIn } from '@/components/fade-in';
import { OfferSection } from '@/components/landing/OfferSection';
import { PricingSection } from '@/components/landing/PricingSection';
import { PaymentSection } from '@/components/landing/PaymentSection';
import { GuaranteeSection } from '@/components/landing/GuaranteeSection';
import { ClosingSection } from '@/components/landing/ClosingSection';
import { FinalFaqSection } from '@/components/landing/FinalFaqSection';
import { FinalCtaSection } from '@/components/landing/FinalCtaSection';
import { ExtraFaqSection } from '@/components/landing/ExtraFaqSection';
import { Header } from '@/components/landing/Header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        <HeroSection />

        <FadeIn>
          <PreviewSection />
        </FadeIn>

        <FadeIn>
          <FaqSection />
        </FadeIn>

        <FadeIn>
          <TestimonialsSection />
        </FadeIn>

        <FadeIn>
          <OfferSection />
        </FadeIn>

        <FadeIn>
          <PricingSection />
        </FadeIn>

        <FadeIn>
          <PaymentSection />
        </FadeIn>
        
        <FadeIn>
          <GuaranteeSection />
        </FadeIn>

        <FadeIn>
          <ClosingSection />
        </FadeIn>

        <FadeIn>
           <FinalFaqSection />
        </FadeIn>

        <FadeIn>
            <FinalCtaSection />
        </FadeIn>

        <FadeIn>
            <ExtraFaqSection />
        </FadeIn>

      </main>
      <Footer />
    </div>
  );
}
