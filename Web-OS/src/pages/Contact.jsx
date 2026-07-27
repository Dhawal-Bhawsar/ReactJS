import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Contacts = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []); 

  return (
    <div className="absolute top-20 left-1/4 w-[700px] h-[550px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-700 animate-in slide-in-from-bottom-4 duration-300">
      
      {/* Window Header */}
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <h3 className="font-bold text-gray-300 text-sm tracking-wide">AddressBook</h3>
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
      <div className="p-6 overflow-y-auto flex-1 bg-gray-900 text-white">
        <h2 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2">System Contacts</h2>
        
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-gray-400 font-medium animate-pulse">Loading contacts from server...</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {users.map((user) => (
              <Link 
                key={user.id} 
                to={`/contacts/${user.id}`} 
                className="bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-sm hover:shadow-md hover:border-blue-500 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-200">{user.name}</h4>
                  <p className="text-xs text-gray-400">{user.company.name}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};