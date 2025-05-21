import { Route, Routes } from "react-router-dom";
import { Home, About, Children, Contact, Choir, Events, Gallery, Homegroups, Ladies, Men, Resources, Sermons, Youth, News, GreatCommission } from "./components/pages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/children" element={<Children />} />
        <Route path="/choir" element={<Choir />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/greatcommission" element={<GreatCommission />} />
        <Route path="/homegroups" element={<Homegroups />} />
        <Route path="/ladies" element={<Ladies />} />
        <Route path="/men" element={<Men />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/youth" element={<Youth />} />
      </Routes>
    </div>
  );
}

export default App;
