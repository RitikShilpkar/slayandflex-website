import { ChartBarIcon, UserGroupIcon, ShieldCheckIcon, SparklesIcon, TrophyIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

export const WhyUs = () => {
  const features = [
    {
      icon: <SparklesIcon className="w-12 h-12 text-purple-600" />,
      title: "Curated Excellence",
      description: "We vet every agency through a 5-stage verification process ensuring top-tier quality"
    },
    {
      icon: <ChartBarIcon className="w-12 h-12 text-pink-500" />,
      title: "Performance Tracking",
      description: "Real-time analytics dashboard to monitor campaign progress and ROI"
    },
    {
      icon: <ShieldCheckIcon className="w-12 h-12 text-blue-500" />,
      title: "Secure Collaboration",
      description: "Military-grade encryption for all your data and communications"
    },
    {
      icon: <UserGroupIcon className="w-12 h-12 text-green-500" />,
      title: "Dedicated Support",
      description: "24/7 access to marketing experts and customer success managers"
    }
  ]

  return (
    <section id="why-us" className="w-full py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SlayAndFlex?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing brand marketing through technology-driven solutions and expert partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-10">
            <GlobeAltIcon className="w-64 h-64" />
          </div>
          
          {[
            { icon: <TrophyIcon className="w-8 h-8 mb-4" />, value: "95%", label: "Client Retention" },
            { icon: <ChartBarIcon className="w-8 h-8 mb-4" />, value: "1.2M+", label: "Campaigns" },
            { icon: <SparklesIcon className="w-8 h-8 mb-4" />, value: "4.9/5", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
              {stat.icon}
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-200 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 