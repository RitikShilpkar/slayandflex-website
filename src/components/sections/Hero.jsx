export const Hero = () => (
  <section className="w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Your Brand's<br className="hidden md:block"/> Digital Presence
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto md:text-2xl md:leading-relaxed">
          Connect with top marketing experts through our curated platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/downloads/slayandflex.apk"
            download="SlayAndFlex.apk"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
          >
            Download App
          </a>
        </div>
      </div>
    </div>
  </section>
) 