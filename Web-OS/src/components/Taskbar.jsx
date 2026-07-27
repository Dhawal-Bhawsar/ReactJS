import { Link } from "react-router-dom";

export const Taskbar = () => {
  return (
    <div className="fixed bottom-0 w-full h-16 flex items-center px-6 gap-6 backdrop-blur-md border-t border-gray-700 shadow-lg z-50 bg-black/60 text-white">
      <Link to="/" className="font-bold text-2xl tracking-widest hover:scale-105 transition-transform">
        OS
      </Link>

      <div className="flex gap-4 ml-8">
        <Link to="/notes" className="px-4 py-2 rounded-lg hover:bg-gray-500/30 font-medium transition-colors">
          Notes
        </Link>
        <Link to="/contacts" className="px-4 py-2 rounded-lg hover:bg-gray-500/30 font-medium transition-colors">
          Contacts
        </Link>
        <Link to="/gallery" className="px-4 py-2 rounded-lg hover:bg-gray-500/30 font-medium transition-colors">
          Gallery
        </Link>
      </div>
    </div>
  );
};
