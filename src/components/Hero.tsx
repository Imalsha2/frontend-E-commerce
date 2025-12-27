import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onShopNowClick: () => void;
}

export default function Hero({ onShopNowClick }: HeroProps) {
  return (
    <section className="hero-section py-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Discover Amazing Products
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Shop the latest trends with unbeatable prices and free shipping on orders over $50
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onShopNowClick}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Shop Now
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={onShopNowClick}
              className="px-8 py-4 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              View Deals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
