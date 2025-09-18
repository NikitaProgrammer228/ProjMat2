'use client';

import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
              About FENS
            </h1>
            <div className="w-32 h-1 bg-white mx-auto mb-8 animate-fade-in-up animation-delay-400 shadow-lg"></div>
            <p className="text-xl md:text-2xl text-white/90 font-light animate-fade-in-up animation-delay-600">
              Two decades of innovation in ELV systems
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Company Overview */}
            <div className="mb-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                    We Design, Supply, Install, Service & Maintain
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    ELV Security, Audio Video and Other Systems & Solutions and also do Custom Fabrication in Steel & Aluminum.
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-sky-100 to-slate-100 rounded-3xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-sky-600 mb-2">20+</div>
                      <div className="text-lg text-slate-600">Years of Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Story */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-slate-50 to-sky-50 rounded-3xl p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                  Our Story
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    FENS National Project incorporated in 2001 is headed by a Dynamic Omani Entrepreneur with a Vision to create a company, which can meet the Technical Services need of Customers all over the Sultanate of Oman.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    With a deep interest in new and fast emerging Technologies in the field of ELV Systems which include Security & Surveillance Systems, Audio & Video Systems & Tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
                Our Expertise
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Security Systems</h4>
                  <p className="text-slate-600">Advanced surveillance and access control solutions</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Audio & Video</h4>
                  <p className="text-slate-600">Professional AV systems for any environment</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Network Solutions</h4>
                  <p className="text-slate-600">Reliable connectivity and infrastructure</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Custom Fabrication</h4>
                  <p className="text-slate-600">Steel & aluminum solutions tailored to your needs</p>
                </div>
              </div>
            </div>

            {/* Customer Base */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Trusted Across Oman
                </h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  With a wide network of Customer base in the Educational, Government and Private sectors throughout the Sultanate of Oman
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Educational</h4>
                  <p className="text-slate-600">Universities, colleges, and schools across Oman</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Government</h4>
                  <p className="text-slate-600">Public sector institutions and agencies</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-2">Private Sector</h4>
                  <p className="text-slate-600">Businesses and corporations nationwide</p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="mb-20">
              <div className="bg-gradient-to-r from-slate-900 to-sky-900 rounded-3xl p-8 md:p-12 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-8">
                  Our Commitment
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg leading-relaxed mb-6 text-white/90">
                      We recognize the need felt by customers for Custom Solutions, Quality Installations and a Post-installation Maintenance & Service to keep the systems running in top condition to extract their Return on Investment.
                    </p>
                    <p className="text-lg leading-relaxed text-white/90">
                      We offer a wide bouquet of products from manufacturers & suppliers from around the globe, to meet the customer's requirement of System Performance and Budget.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Custom Solutions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Quality Installations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Post-installation Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Global Product Range</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Future Vision */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Looking Forward
              </h3>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-slate-700 leading-relaxed mb-8">
                  FENS National Project has grown from strength to strength over its 20 years of existence and is looking to expand its offering of New Products and Services and be among the Top technical services provider in Oman.
                </p>
                <div className="bg-gradient-to-r from-sky-50 to-slate-50 rounded-2xl p-8">
                  <p className="text-lg text-slate-700 font-medium">
                    We are always open to New Products and Technologies from around the world.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
