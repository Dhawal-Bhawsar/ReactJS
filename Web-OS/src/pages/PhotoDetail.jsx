import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const PhotoDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSinglePhoto = async () => {
      try {
        const response = await axios.get(`https://picsum.photos/id/${id}/info`);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo details:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSinglePhoto();
  }, [id]);

  return (
    <div className="absolute top-12 right-24 w-[700px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-700 animate-in zoom-in-95 duration-200">
      
      {/* Window Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <h3 className="font-bold text-gray-300 text-sm tracking-wide">Image_Preview</h3>
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
      <div className="flex flex-col text-white relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 left-4 bg-black/60 hover:bg-black/80 backdrop-blur text-white px-3 py-1 rounded text-sm font-medium transition-colors z-10"
        >
          ← Back to Gallery
        </button>

        {loading || !photo ? (
          <div className="h-[400px] flex justify-center items-center">
            <p className="text-gray-400 font-medium animate-pulse">Loading high-res image...</p>
          </div>
        ) : (
          <>
            {/* Image Viewer */}
            <div className="w-full h-[400px] bg-gray-900 flex justify-center items-center overflow-hidden">
              <img 
                src={photo.download_url} 
                alt={photo.author} 
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Image Details */}
            <div className="p-6 bg-gray-900 flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-700 pb-2 mb-2">
                {photo.author}
              </h2>
              <div className="flex justify-between text-gray-400 text-sm">
                <span><strong className="text-gray-300">Image ID:</strong> {photo.id}</span>
                <span><strong className="text-gray-300">Original Resolution:</strong> {photo.width} x {photo.height}</span>
              </div>
              <a 
                href={photo.url} 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 text-center bg-blue-600 hover:bg-blue-500 text-white py-2 rounded font-medium transition-colors"
              >
                View Original Source
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};