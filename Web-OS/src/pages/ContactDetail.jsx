import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export const ContactDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchSingleUser = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    
    fetchSingleUser();
  }, [id]); 

  return (
    <div className="absolute top-24 left-1/3 w-[500px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-700 animate-in zoom-in-95 duration-200">
      
      {/* Window Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <h3 className="font-bold text-gray-300 text-sm tracking-wide">Contact_Details.exe</h3>
        <div className="flex gap-2">
          <div 
            onClick={() => navigate('/')} 
            className="w-3 h-3 rounded-full bg-red-500 shadow-inner cursor-pointer hover:bg-red-600"
          ></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>

      {/* Window Body */}
      <div className="p-8 text-white relative">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-gray-300 px-3 py-1 rounded text-sm font-medium transition-colors"
        >
          ← Back
        </button>

        {!user ? (
          <p className="text-gray-500 animate-pulse">Fetching system record...</p>
        ) : (
          <div className="flex flex-col items-center mt-4">
            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-4xl mb-4 shadow-lg">
              {user.name.charAt(0)}
            </div>
            <h2 className="text-3xl font-bold text-gray-100">{user.name}</h2>
            <p className="text-gray-500 mb-6">@{user.username}</p>

            <div className="w-full bg-gray-800 rounded-lg p-4 border border-gray-700 flex flex-col gap-3">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium text-gray-400">Email:</span>
                <span className="text-gray-200">{user.email}</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="font-medium text-gray-400">Phone:</span>
                <span className="text-gray-200">{user.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-400">Website:</span>
                <span className="text-blue-400 hover:underline cursor-pointer">{user.website}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};