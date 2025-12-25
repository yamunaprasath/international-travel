import { Star, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    id: 1,
    author: "Sarah M.",
    location: "United States",
    rating: 5,
    date: "December 2025",
    operator: "Global Adventures Co.",
    trip: "Iceland Northern Lights Expedition",
    review: "Absolutely incredible experience! The tour was well-organized, our guide was knowledgeable, and seeing the Northern Lights was a dream come true. Every detail was taken care of.",
    helpful: 124,
    verified: true
  },
  {
    id: 2,
    author: "James L.",
    location: "United Kingdom",
    rating: 5,
    date: "November 2025",
    operator: "Heritage Cultural Tours",
    trip: "Ancient Rome Historical Tour",
    review: "Our guide brought history to life with fascinating stories and insights. The small group size made it feel personal and intimate. Highly recommend for history enthusiasts.",
    helpful: 89,
    verified: true
  },
  {
    id: 3,
    author: "Maria R.",
    location: "Spain",
    rating: 4,
    date: "November 2025",
    operator: "EcoTour Expeditions",
    trip: "Costa Rica Rainforest Adventure",
    review: "Great eco-friendly tour with amazing wildlife sightings. Appreciated the commitment to sustainability. Only minor issue was some delays, but overall fantastic experience.",
    helpful: 67,
    verified: true
  },
  {
    id: 4,
    author: "Chen W.",
    location: "Singapore",
    rating: 5,
    date: "October 2025",
    operator: "Island Hopper Travels",
    trip: "Maldives Island Retreat",
    review: "Pure paradise! The resort selection was perfect, water activities were top-notch, and the service exceeded expectations. Worth every penny for a once-in-a-lifetime trip.",
    helpful: 156,
    verified: true
  }
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-2">Traveler Reviews</h2>
            <p className="text-gray-600">Real experiences from verified travelers</p>
          </div>
          <button className="hidden sm:block px-6 py-2 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            Read All Reviews
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{review.author}</h4>
                    {review.verified && (
                      <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-xs rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-teal-600 mb-1">{review.operator}</p>
                <p className="text-sm mb-3">{review.trip}</p>
                <p className="text-gray-700 leading-relaxed">
                  {review.review}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-500">{review.date}</p>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-teal-600 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-8 rounded-xl border border-gray-100 text-center">
          <h3 className="text-xl mb-3">Share Your Travel Experience</h3>
          <p className="text-gray-600 mb-6">
            Help fellow travelers by sharing your honest review
          </p>
          <button className="px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
            Write a Review
          </button>
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="w-full px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
