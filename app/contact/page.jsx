'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', contact: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-sky-900 to-slate-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-white mx-auto animate-fade-in-up animation-delay-400 shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Contact Info & Map */}
            <div className="grid lg:grid-cols-2 gap-12 mb-20">
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Ready to discuss your project? We're here to help with all your ELV system needs.
                  </p>
                </div>

                {/* Address */}
                <div className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Address
                  </h3>
                  <div className="text-slate-700">
                    <p className="font-semibold text-lg">FENS National Project</p>
                    <p>P.O.Box – 180, Postal Code-123</p>
                    <p>Muscat, Sultanate of Oman</p>
                  </div>
                </div>

                {/* Office Contact */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Office Contact
                  </h3>
                  <div className="space-y-2 text-slate-700">
                    <p><span className="font-medium">Phone:</span> +968 22006467</p>
                    <p><span className="font-medium">Email:</span> support@fensoman.com</p>
                  </div>
                </div>

                {/* Key Contacts */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-slate-900">Key Contacts</h3>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                    <h4 className="font-semibold text-slate-900">Shridhar Paripelli</h4>
                    <div className="mt-2 space-y-1 text-sm text-slate-600">
                      <p><span className="font-medium">Email:</span> shree@fensoman.com</p>
                      <p><span className="font-medium">GSM:</span> +968 95085611</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
                    <h4 className="font-semibold text-slate-900">Mohammed AL Busaidi</h4>
                    <div className="mt-2 space-y-1 text-sm text-slate-600">
                      <p><span className="font-medium">Email:</span> mohammed@fensoman.com</p>
                      <p><span className="font-medium">GSM:</span> +968 98042994</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900">Our Location</h3>
                 <div className="rounded-2xl overflow-hidden shadow-lg">
                   <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.1234567890!2d58.132254113157714!3d23.63419119054871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3ae0dabcf07%3A0x53df0018e09df0bc!2sFENS%20NATIONAL%20PROJECT!5e0!3m2!1sen!2som!4v1758221627842!5m2!1sen!2som"
                     width="100%"
                     height="400"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                     title="FENS National Project Location"
                   ></iframe>
                 </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Location Code:</strong> J4MJ+MX3, Mubaila, مسقط Oman
                  </p>
                  <p className="text-sm text-slate-600 mt-1">
                    Find us easily in Muscat with our clear location markers.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-3xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
                Use the contact form on our homepage to get started, or reach out to us directly using the information above.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/#contact" 
                  className="inline-flex items-center bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-colors shadow-lg"
                >
                  Go to Contact Form
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="tel:+96822006467" 
                  className="inline-flex items-center bg-sky-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-400 transition-colors shadow-lg"
                >
                  Call Now
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
