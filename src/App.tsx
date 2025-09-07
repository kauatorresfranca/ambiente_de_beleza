import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Hero from "./components/hero";
import ProfessionalList from "./components/professional-list";
import Scheduling from "./components/scheduling";
import ServiceList from "./components/service-list";
import Testimonials from "./components/testimonials";
import Location from "./components/location";
import Footer from "./components/footer";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <div id="home">
              <Hero />
            </div>
            <ServiceList />
            <ProfessionalList />
            <Testimonials />
            <Scheduling />
            <Location />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;