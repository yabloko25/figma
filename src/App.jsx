import ServiceCard from "./components/service-card";
import { serviceData } from "./data/data";

function App() {
  return (
    <>
      <header className="py-12">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <img className="w-48 h-auto" src="/logo.png" alt="Logo" />
            <ul className="hidden md:flex gap-12 text-gray-800 text-lg font-medium">
              {['Home', 'Service', 'Portfolio', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-500 transition">{item}</a>
                </li>
              ))}
            </ul>
            <button className="hidden md:block bg-orange-500 text-white rounded-md px-6 py-2 text-sm font-medium shadow-md hover:opacity-90">
              Contact us
            </button>
            <i className="fa-solid fa-bars text-2xl text-orange-500 md:hidden"></i>
          </nav>
        </div>
      </header>

      <section className="container mx-auto flex justify-between items-center mt-32">
        <div>
          <h2 className="text-6xl font-bold text-gray-900 leading-tight">
            Smart Web <br /> Design Agency
          </h2>
          <p className="text-lg text-gray-700 mt-4">
            We provide the best web design and business development services,
            ensuring client satisfaction.
          </p>
          <button className="mt-8 px-8 py-3 bg-orange-500 text-white text-lg font-medium rounded-md shadow-md hover:opacity-90">
            Free consultation
          </button>
        </div>
        <img className="max-w-xs md:max-w-md" src="/social.png" alt="Social Media" />
      </section>

      <section className="container mx-auto text-center mt-32">
        <h1 className="text-4xl font-bold text-gray-900">We Provide the Best Web Services</h1>
        <div className="border-2 border-gray-200 rounded-lg mt-14 py-12 flex justify-center gap-32">
          {serviceData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
