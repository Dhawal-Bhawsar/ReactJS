import { Link } from "react-router-dom";

const apps = [
  {
    name: "Sticky Notes",
    path: "/notes",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Contacts",
    path: "/contacts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Gallery",
    path: "/gallery",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500"
  }
];

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      {/* Greeting */}
      <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="text-5xl font-bold text-white drop-shadow-lg">
          Welcome to <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Web-OS</span>
        </div>

      {/* Quick Launch Apps */}
      <div className="flex gap-6 py-15 px-3 animate-in fade-in zoom-in duration-700 delay-200">
        {apps.map((app) => (
          <Link
            key={app.name}
            to={app.path}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-36"
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              {app.icon}
            </div>
            <span className="text-white/90 font-medium text-sm tracking-wide">
              {app.name}
            </span>
          </Link>
        ))}
      </div>


    </div>
    </div>
  );
};
