import { UserCircleIcon, BuildingOfficeIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export const ContactForm = () => {
  const [isAgency, setIsAgency] = useState(false)

  return (
    <section id="contact" className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">
          Get In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Touch</span>
        </h2>
        
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <button
              type="button"
              onClick={() => setIsAgency(false)}
              className={`px-6 py-2 rounded-full ${!isAgency ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Individual
            </button>
            <button
              type="button"
              onClick={() => setIsAgency(true)}
              className={`px-6 py-2 rounded-full ${isAgency ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Agency
            </button>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <UserCircleIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-400 bg-gray-100"
                  placeholder="Full Name"
                />
              </div>

              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-400 bg-gray-100"
                  placeholder="Email Address"
                />
              </div>

              {isAgency && (
                <>
                  <div className="relative">
                    <BuildingOfficeIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-400 bg-gray-100"
                      placeholder="Agency Name"
                    />
                  </div>
                  
                  <div className="relative">
                    <PhoneIcon className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input 
                      type="tel" 
                      className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent placeholder-gray-400 bg-gray-100"
                      placeholder="Phone Number"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 appearance-none placeholder-gray-400 bg-gray-100 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjIiIGQ9Ik04IDlsNC00IDQgNG0wIDZMNCA5Ii8+PC9zdmc+')] bg-no-repeat bg-[right_1rem_center]">
                <option>Select Service Needed</option>
                <option>Brand Marketing</option>
                <option>Digital Advertising</option>
                <option>Social Media Management</option>
                <option>Other</option>
              </select>
            </div>

            <div className="relative">
              <textarea 
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-600 placeholder-gray-400 bg-gray-100"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 