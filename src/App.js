import { Route, Routes } from "react-router-dom";
import { Home, About, Children, Contact, Events, Gallery, Ladies, Men, Resources, Sermons, Youth, News } from "./components/pages";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/children" element={<Children />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
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
