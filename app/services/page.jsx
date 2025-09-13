import Image from 'next/image';

export const metadata = {
  title: 'Services — FENS National Project',
  description: 'Enterprise security & life safety systems. CCTV, Access Control, AV Systems, Data Network, Solar Systems, and Fabrication services.',
};

const services = [
  {
    id: 'security-systems',
    title: 'Security Systems',
    image: '/images/security-systems.PNG',
    services: [
      'CCTV IP Surveillance Systems',
      'Access Control System',
      'Time-Attendance System',
      'Intrusion Detection',
      'Parking Barriers',
      'Gate Opening System',
      'Speed Gates, Retail Gates',
      'Perimeter Security'
    ],
    description: 'Comprehensive security solutions to protect your business and assets with cutting-edge technology.'
  },
  {
    id: 'av-systems',
    title: 'AV Systems (Audio - Video)',
    image: '/images/av-systems.PNG',
    services: [
      'Public Address Systems (PA)',
      'Background Music (BGM)',
      'LED Video Walls',
      'Projectors & Screens',
      'Projector Lifts',
      'Smart Boards',
      'Digital Signage',
      'Video Conference',
      'Conference & Meeting Room Solutions',
      'Audio Intercom, Video Intercom & Residential Intercom Systems',
      'EPABX (Analog & Digital) Systems'
    ],
    description: 'Professional audio-visual solutions for modern communication and presentation needs.'
  },
  {
    id: 'data-network',
    title: 'Data Network',
    image: '/images/data-network.PNG',
    services: [
      'Passive Network – Cat6 Structured Cabling/Patch Panels/Cords',
      'Fiber Optic Backbone – Cabling/Termination/Patching',
      'Active Network – Data/Voice/Wifi'
    ],
    description: 'Robust network infrastructure to keep your business connected with high-speed, reliable connectivity.'
  },
  {
    id: 'solar-systems',
    title: 'Solar Systems',
    image: '/images/solar-systems.PNG',
    services: [
      'Solar LED Lamps',
      'Solar Roof Car Parking Systems'
    ],
    description: 'Sustainable energy solutions that reduce costs and environmental impact.'
  },
  {
    id: 'fabrication',
    title: 'Fabrication',
    image: '/images/fabrication.PNG',
    services: [
      'Poles & Custom Brackets for Security Cameras',
      'Shaded Car park Solutions with UPVC & HDPE Canopy',
      'Projector Wall & Ceiling Brackets',
      'Custom TV Mounting Stands & Brackets',
      'Vandal Resistant Protection for Speakers & Cameras',
      'Access Control & Intercom Outdoor Mounting Stands',
      'Gates, Grills, Banisters, Commercial Stands, Racks, etc.'
    ],
    description: 'Custom fabrication services for specialized mounting and structural solutions.'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/header-what-we-do.jpg"
          alt="What we do"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
              What we do
            </h1>
            <div className="w-24 h-1 bg-white mx-auto animate-fade-in-up animation-delay-400 shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="space-y-4">
                    {service.services.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start space-x-3 group/item"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 group-hover/item:bg-blue-500 transition-colors duration-300"></div>
                        <p className="text-slate-700 leading-relaxed group-hover/item:text-slate-900 transition-colors duration-300">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover effect indicator */}
                  <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium mr-2">Learn More</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105"
            >
              Get a Quote
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
