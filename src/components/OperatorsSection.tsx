import { MapPin, Star, Users, Shield } from 'lucide-react';

const operators = [
  {
    id: 1,
    name: "Global Adventures Co.",
    specialization: "Adventure & Expedition Tours",
    location: "London, UK",
    rating: 4.8,
    reviews: 1247,
    yearsActive: 15,
    verified: true,
    description: "Specialized in small-group adventure tours across 6 continents with expert guides."
  },
  {
    id: 2,
    name: "Luxury Escapes Travel",
    specialization: "Luxury & Boutique Travel",
    location: "Dubai, UAE",
    rating: 4.9,
    reviews: 892,
    yearsActive: 12,
    verified: true,
    description: "Curated luxury travel experiences with personalized itineraries and premium service."
  },
  {
    id: 3,
    name: "EcoTour Expeditions",
    specialization: "Sustainable & Eco Tourism",
    location: "Costa Rica",
    rating: 4.7,
    reviews: 634,
    yearsActive: 8,
    verified: true,
    description: "Carbon-neutral tours focused on wildlife conservation and local community support."
  },
  {
    id: 4,
    name: "Heritage Cultural Tours",
    specialization: "Cultural & Historical Tours",
    location: "Rome, Italy",
    rating: 4.6,
    reviews: 1089,
    yearsActive: 22,
    verified: true,
    description: "Immersive cultural experiences led by historians and local experts."
  },
  {
    id: 5,
    name: "Island Hopper Travels",
    specialization: "Beach & Island Getaways",
    location: "Maldives",
    rating: 4.8,
    reviews: 756,
    yearsActive: 10,
    verified: true,
    description: "Tropical island packages featuring pristine beaches and marine adventures."
  },
  {
    id: 6,
    name: "Urban Discovery Tours",
    specialization: "City Tours & Experiences",
    location: "New York, USA",
    rating: 4.5,
    reviews: 2103,
    yearsActive: 18,
    verified: true,
    description: "City walking tours, food experiences, and local culture immersion."
  }
];

export function OperatorsSection() {
  return (
    <section id="operators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-2">Tour Operators Directory</h2>
            <p className="text-gray-600">Discover trusted travel and tour operators worldwide</p>
          </div>
          <button className="hidden sm:block px-6 py-2 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            Browse All
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {operators.map((operator) => (
            <div 
              key={operator.id}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl group-hover:text-teal-600 transition-colors">
                      {operator.name}
                    </h3>
                    {operator.verified && (
                      <Shield className="w-5 h-5 text-teal-500" />
                    )}
                  </div>
                  <p className="text-teal-600 text-sm mb-2">{operator.specialization}</p>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {operator.location}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-lg">{operator.rating}</span>
                  </div>
                  <p className="text-xs text-gray-500">{operator.reviews} reviews</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {operator.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  {operator.yearsActive} years in business
                </div>
                <button className="px-4 py-2 text-sm text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="w-full px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            Browse All Operators
          </button>
        </div>
      </div>
    </section>
  );
}
