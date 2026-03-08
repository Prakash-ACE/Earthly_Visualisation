import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Stats from './sections/Stats';
import Pricing from './sections/Pricing';
import QuoteForm from './sections/QuoteForm';
import Clients from './sections/Clients';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="w-full flex-col min-h-screen bg-[#FFFFFF] font-sans antialiased text-[#1A1A1A] selection:bg-[#C8A96E] selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Stats />
        <Pricing />
        <QuoteForm />
        <Clients />
      </main>
      <Footer />
    </div>
  );
}

export default App;
