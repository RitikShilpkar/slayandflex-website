import { 
  DevicePhoneMobileIcon, 
  ArrowDownTrayIcon 
} from '@heroicons/react/24/outline'

export const AppDownload = () => (
  <section className="w-full bg-purple-50 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
            <p className="text-lg mb-6">Download our Android app directly</p>
            <div className="flex gap-4">
              <a 
                href="/downloads/slayandflex.apk"
                download="SlayAndFlex.apk"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download APK (Android)
              </a>
            </div>
            <p className="text-sm mt-4 text-purple-100">
              Version 1.0.0 | 82.5 MB | Requires Android 8.0+
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
              alt="App interface"
              className="w-72 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-8 border-white"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
) 