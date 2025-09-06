import Header from "./components/header";
import Hero from "./components/hero";
import ProfessionalList from "./components/professional-list";
import Scheduling from "./components/scheduling";
import ServiceList from "./components/service-list";
import Testimonials from "./components/testimonials";
import Location from "./components/location";

function App() {
  

  return (
      <>
        <Header />
        <Hero />
        <ServiceList />
        <ProfessionalList />
        <Testimonials />
        <Scheduling />
        <Location />
      </>
  )
} 

export default App
