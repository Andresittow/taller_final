import { HeaderNavigation } from '@/components/estereo-picnic/header-navigation';
import { HeroLineup } from '@/components/estereo-picnic/hero-lineup';
import { FeaturedArtists } from '@/components/estereo-picnic/featured-artists';
import { Aftermovie } from '@/components/estereo-picnic/aftermovie';
import { TicketPricingTable } from '@/components/estereo-picnic/ticket-pricing-table';
import { PaymentHotels } from '@/components/estereo-picnic/payment-hotels';
import { RegistrationForm } from '@/components/estereo-picnic/registration-form';
import { Footer } from '@/components/estereo-picnic/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121414] text-[#e2e2e2] font-['Epilogue']">
      <HeaderNavigation />
      <HeroLineup />
      <FeaturedArtists />
      <Aftermovie />
      <TicketPricingTable />
      <PaymentHotels />
      <RegistrationForm />
      <Footer />
    </main>
  );
}