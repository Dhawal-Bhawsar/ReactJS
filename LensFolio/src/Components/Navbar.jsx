import { Camera } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 border-b border-blue-700/50 py-4 px-6 mb-8 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-8 h-8 text-blue-300" />
          <h1 className="text-2xl font-bold text-white tracking-tight">LensFolio</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-sm font-medium text-blue-200">
            React Gallery Project
          </div>
      </div>
     </div>
    </nav>
  );
}
