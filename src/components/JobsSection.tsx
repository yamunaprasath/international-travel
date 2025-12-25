import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const jobs = [
  {
    id: 1,
    title: "Tour Guide - European Tours",
    company: "Heritage Cultural Tours",
    location: "Multiple Locations, Europe",
    type: "Full-time",
    salary: "$35k - $45k",
    posted: "2 days ago",
    description: "Seeking experienced multilingual tour guides for cultural tours across Europe."
  },
  {
    id: 2,
    title: "Travel Coordinator",
    company: "Global Adventures Co.",
    location: "London, UK",
    type: "Full-time",
    salary: "$42k - $55k",
    posted: "5 days ago",
    description: "Coordinate international travel logistics and customer experiences."
  },
  {
    id: 3,
    title: "Adventure Travel Specialist",
    company: "EcoTour Expeditions",
    location: "Remote",
    type: "Remote",
    salary: "$38k - $50k",
    posted: "1 week ago",
    description: "Plan and execute sustainable adventure tours with focus on eco-tourism."
  },
  {
    id: 4,
    title: "Cruise Ship Activities Director",
    company: "Ocean Voyages Inc.",
    location: "International Waters",
    type: "Contract",
    salary: "$48k - $62k",
    posted: "3 days ago",
    description: "Lead onboard entertainment and activities for luxury cruise passengers."
  },
  {
    id: 5,
    title: "Travel Content Creator",
    company: "Wanderlust Media",
    location: "Remote",
    type: "Freelance",
    salary: "$30k - $40k",
    posted: "1 week ago",
    description: "Create engaging travel content, blogs, and social media for global audience."
  },
  {
    id: 6,
    title: "Destination Manager - Asia Pacific",
    company: "Luxury Escapes Travel",
    location: "Singapore",
    type: "Full-time",
    salary: "$55k - $70k",
    posted: "4 days ago",
    description: "Manage luxury travel operations and partnerships across APAC region."
  }
];

export function JobsSection() {
  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-2">Travel Job Opportunities</h2>
            <p className="text-gray-600">Find your next career in the travel industry</p>
          </div>
          <button className="hidden sm:block px-6 py-2 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All Jobs
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div 
              key={job.id}
              className="group bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-lg group-hover:text-teal-600 transition-colors mb-1">
                    {job.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{job.company}</p>
                </div>
                <div className="px-3 py-1 bg-teal-50 text-teal-700 text-sm rounded-full">
                  {job.type}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {job.description}
              </p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  {job.salary}
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="w-4 h-4" />
                  Posted {job.posted}
                </div>
                <button className="px-4 py-2 text-sm bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:hidden text-center">
          <button className="w-full px-6 py-3 text-teal-600 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
            View All Jobs
          </button>
        </div>
      </div>
    </section>
  );
}
