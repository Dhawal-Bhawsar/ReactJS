import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Gallery = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch images whenever the 'page' state changes
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        // Fetching 12 images per page
        const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page]); // Dependency array: Re-run this effect when 'page' changes

  // Pagination Handlers
  const handleNext = () => setPage((prev) => prev + 1);
  const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="absolute top-10 right-20 w-[800px] h-[700px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-700 animate-in fade-in duration-300">
      
      {/* Window Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <h3 className="font-bold text-gray-300 text-sm tracking-wide">PhotoViewer</h3>
        <div className="flex gap-2">
          <div 
            onClick={() => navigate('/')} 
            className="w-3 h-3 rounded-full bg-red-500 shadow-inner cursor-pointer hover:bg-red-600"
          ></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
        </div>
      </div>

      {/* Window Body */}
      <div className="flex-1 p-6 overflow-hidden flex flex-col relative text-white">
        
        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <p className="text-gray-400 font-medium animate-pulse text-lg">Loading visual assets...</p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4 overflow-y-auto pr-2 pb-16">
            {images.map((img) => (
              <Link 
                to={`/gallery/${img.id}`} // Dynamic route injection
                key={img.id} 
                className="group relative overflow-hidden rounded-md bg-gray-900 border border-gray-700 aspect-square block cursor-pointer"
              >
                <img 
                  src={img.download_url} 
                  alt={img.author} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 w-full bg-black/70 p-2 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-xs text-center truncate">{img.author}</p>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Footer / Pagination Controls */}
        <div className="absolute bottom-0 left-0 w-full bg-gray-900/90 backdrop-blur border-t border-gray-700 p-4 flex justify-between items-center">
          <button 
            onClick={handlePrev}
            disabled={page === 1}
            className={`px-4 py-2 rounded font-medium transition-all ${
              page === 1 
                ? "bg-gray-700 text-gray-500 cursor-not-allowed" 
                : "bg-gray-600 hover:bg-gray-500 text-white"
            }`}
          >
            ← Previous
          </button>
          
          <span className="text-gray-400 font-mono">Page {page}</span>
          
          <button 
            onClick={handleNext}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded font-medium transition-all"
          >
            Next →
          </button>
        </div>

      </div>
    </div>
  );
};