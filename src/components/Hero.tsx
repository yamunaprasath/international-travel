import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1609765685592-703a97c877ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhaXJwbGFuZSUyMHdpbmRvd3xlbnwxfHx8fDE3NjY2NDI2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-6xl text-white mb-6">
            Your Global Travel Toolkit
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Clear, neutral, and trustworthy information on global travel news, opportunities, operators, and destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
              Explore Destinations
            </button>
            <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors">
              Browse Operators
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
