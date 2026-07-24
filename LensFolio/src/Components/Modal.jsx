import { X, ExternalLink } from 'lucide-react';

export default function Modal({ image, onClose }) {
  if (!image) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onClose}></div>
      
      <div className="relative z-10 w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-gray-700">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-full md:w-2/3 bg-gray-950 flex items-center justify-center">
          <img 
            src={image.download_url} 
            alt={image.author} 
            className="w-full h-[50vh] md:h-[70vh] object-contain"
          />
        </div>
        
        <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-gray-900">
          <h2 className="text-3xl font-bold text-white mb-2">{image.author}</h2>
          <p className="text-gray-400 mb-6">Original Resolution: {image.width} x {image.height}</p>
          
          <a 
            href={image.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Original
          </a>
        </div>
      </div>
    </div>
  );
}

