import { MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const destinations = [
  {
    id: 1,
    name: "Paris, France",
    description: "The City of Light offers timeless elegance and world-class culture",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc2NjU3NzkwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    tours: 342,
    type: "Cultural"
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    description: "A harmonious blend of ancient traditions and cutting-edge innovation",
    image: "https://images.unsplash.com/photo-1591194233688-dca69d406068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXxlbnwxfHx8fDE3NjY1OTU0MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    tours: 289,
    type: "Urban"
  },
  {
    id: 3,
    name: "Santorini, Greece",
    description: "Iconic whitewashed villages overlooking the stunning Aegean Sea",
    image: "https://images.unsplash.com/photo-1673485372931-6955ba56a955?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBibHVlfGVufDF8fHx8MTc2NjYxMTY4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    tours: 156,
    type: "Beach & Islands"
  },
  {
    id: 4,
    name: "Bali, Indonesia",
    description: "Tropical paradise featuring lush landscapes and spiritual heritage",
    image: "https://images.unsplash.com/photo-1581032841303-0ba9e894ebc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwdGVtcGxlJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2NjY0MDUwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.6,
    tours: 201,
    type: "Nature"
  },
  {
    id: 5,
    name: "Dubai, UAE",
    description: "Futuristic metropolis with luxury shopping and modern architecture",
    image: "https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NjY1NTk0MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.5,
    tours: 178,
    type: "Luxury"
  },
  {
    id: 6,
    name: "New York, USA",
    description: "The city that never sleeps, filled with iconic landmarks and energy",
    image: "https://images.unsplash.com/photo-1572536977487-697d036fa442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMG1hbmhhdHRhbnxlbnwxfHx8fDE3NjY1ODE3MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    tours: 267,
    type: "Urban"
  }
];

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-2">Top Destinations</h2>
            <p className="text-gray-600">Explore the world's most captivating locations</p>
          </div>
          <button className="hidden sm:block px-6 py-2 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback 
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                  {destination.type}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg group-hover:text-teal-600 transition-colors">
                    {destination.name}
                  </h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {destination.tours} tours available
                  </span>
                  <button className="text-teal-600 hover:text-teal-700">
                    Explore →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="w-full px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
}
