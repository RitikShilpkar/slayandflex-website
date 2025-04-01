import { MegaphoneIcon, HashtagIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const services = [
  { 
    title: 'Brand Marketing',
    icon: <MegaphoneIcon className="w-12 h-12 text-purple-600"/>,
    description: 'Craft compelling brand narratives that resonate with your target audience'
  },
  {
    title: 'Digital Advertising',
    icon: <HashtagIcon className="w-12 h-12 text-pink-500"/>,
    description: 'Targeted ad campaigns across social media and search platforms'
  },
  {
    title: 'Social Media Management',
    icon: <ChatBubbleLeftRightIcon className="w-12 h-12 text-blue-500"/>,
    description: 'Full-service social media strategy and content creation'
  }
]

export const Services = () => (
  <section id="services" className="w-full py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
) 