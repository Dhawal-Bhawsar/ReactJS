import { Routes, Route } from "react-router-dom";
import { Desktop } from "./pages/Desktop";
import { Home } from "./pages/Home";
import { StickyNotes } from "./pages/StickyNotes";
import { Contacts } from "./pages/Contact"; 
import { ContactDetail } from "./pages/ContactDetail"; 
import { Gallery } from "./pages/Gallery";
import { PhotoDetail } from "./pages/PhotoDetail";

const BSOD = () => <div className="bg-gray-900 h-screen w-screen fixed top-0 left-0 text-white p-20 font-mono text-3xl z-50">:( <br/><br/> Your OS ran into a problem.</div>;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Desktop />}>
        <Route index element={<Home />} />
        <Route path="notes" element={<StickyNotes />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/:id" element={<ContactDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="gallery/:id" element={<PhotoDetail />} />
      </Route>
      <Route path="*" element={<BSOD />} />
    </Routes>
  );
};

export default App;
