import { Button } from "@/components/ui/button"
import {
  BarChartIcon as ChartBar,
  Users,
  Zap,
  Settings,
  Database,
  ArrowRightCircle,
  BarChart3,
  GraduationCap,
} from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#c94b4b] to-[#e88146] text-white px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Ignite sales with our expert CRM consultancy services
            </h1>
            <p className="text-lg mb-8 opacity-90">
              With a focus on digital transformation and sales performance improvement, we help businesses by providing
              strategic advice and tailored guidance to get their business processes working and drive revenue growth
              through the use of a CRM system.
            </p>
            <Button variant="secondary" size="lg" className="font-semibold">
              Talk to a specialist
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block w-1/3 mr-12">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Independent%20CRM%20Consultancy%20-%20Talk%20to%20a%20Specialist%20Today-V8k1aAtLx6CBzzIZJNtbpwOZZBOu6y.jpeg"
              alt="CRM Dashboard Preview"
              className="w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Database className="w-8 h-8" />}
              title="Hassle-free Migration"
              description="Seamless data migration to modern CRM systems from outdated or spreadsheet-based solutions"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8" />}
              title="Team Onboarding"
              description="Getting your team using your CRM system consistently and effectively - while giving you the visibility you need"
            />
            <ServiceCard
              icon={<Zap className="w-8 h-8" />}
              title="Automation"
              description="Helping to streamline and automate your processes to boost efficiency and productivity"
            />
            <ServiceCard
              icon={<Settings className="w-8 h-8" />}
              title="Customisation"
              description="Implementing customized CRM dashboards for real-time visibility into sales pipeline and activities"
            />
          </div>
        </div>
      </section>

      {/* CRM Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            CRM services that are tailored to your unique business needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="CRM Selection"
              description="We understand that every business is unique, and with the wide range of CRM choices it can be difficult to choose one that suits your business needs"
            />
            <ServiceCard
              icon={<ArrowRightCircle className="w-8 h-8" />}
              title="CRM Implementation"
              description="Implementing a CRM platform to create better alignment with the objectives of your business"
            />
            <ServiceCard
              icon={<ChartBar className="w-8 h-8" />}
              title="CRM Optimisation"
              description="When your CRM system isn't working, we help you get the most out of your data"
            />
            <ServiceCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="CRM Training"
              description="Whether you're a small to medium business or looking to improve staff CRM proficiency on a larger scale"
            />
          </div>
        </div>
      </section>

      {/* HubSpot Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Certified HubSpot Consultant</h2>
          <div className="flex justify-center">
            <img src="/placeholder.svg?height=150&width=150" alt="HubSpot Partner Badge" className="w-40 h-auto" />
          </div>
        </div>
      </section>
    </div>
  )
}

