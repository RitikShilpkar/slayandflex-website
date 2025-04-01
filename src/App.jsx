import { Navbar } from './components/navigation/Navbar'
import { Hero } from './components/sections/Hero'
import { Services } from './components/sections/Services'
import { AppDownload } from './components/sections/AppDownload'
import { ContactForm } from './components/sections/ContactForm'
import { Footer } from './components/sections/Footer'
import { WhyUs } from './components/sections/WhyUs'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Navbar />
      <main className="relative z-10 space-y-16 pb-24 w-full">
        <Hero />
        <Services />
        <WhyUs />
        <AppDownload />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
