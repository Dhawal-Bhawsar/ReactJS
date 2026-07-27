import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const StickyNotes = () => {
  const navigate = useNavigate();

  const [notes, setNotes] = useState([]);
  const[title, setTitle] = useState("");
  const[details, setDetails] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("webos-notes"));
    if (savedNotes){
      setNotes(savedNotes);
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if(!title.trim() || !details.trim()) return;

    const newNote = {
      id: Date.now(),
      title: title,
      details: details
    };

    const updatedNotes = [...notes, newNote];

    setNotes(updatedNotes);
    localStorage.setItem("webos-notes", JSON.stringify(updatedNotes));

    setTitle("");
    setDetails("");
  };

  const deleteNote = (idToRemove) => {
    const updateNotes = notes.filter((note) => note.id !== idToRemove);
    setNotes(updateNotes);
    localStorage.setItem("webos-notes", JSON.stringify(updateNotes));
  }

  return (
    <div className="absolute top-10 left-10 w-[900px] h-[700px] bg-gray-900 rounded-lg shadow-2xl overflow-hidden flex flex-col border border-gray-700 animate-in fade-in zoom-in duration-200">
      <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-700 select-none">
        <h3 className="font-bold text-gray-300 text-sm tracking-wide">Sticky Notes</h3>
        <div className="flex gap-2">
          <div 
            onClick={() => navigate('/')} 
            className="w-3 h-3 rounded-full bg-red-500 shadow-inner cursor-pointer hover:bg-red-600"
          ></div>          
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden text-white">

      <div className="w-1/3 bg-gray-900 border-r border-gray-700 p-4 flex flex-col">
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input 
          className="border border-gray-700 rounded px-3 py-2 outline-none focus:border-yellow-400 bg-gray-800 text-white placeholder-gray-400"
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-700 rounded px-3 py-2 outline-none focus:border-yellow-400 bg-gray-800 text-white placeholder-gray-400 resize-none"
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold py-2 rounded show transition-colors">
          Save Note
        </button>
      </form>
      </div>  

      <div className="w-2/3 p-6 overflow-y-auto bg-gray-900 flex flex-wrap gap-3 items-start content-start">
        {notes.length === 0 ? (
          <p className="text-gray-500 w-full text-center mt-20 font-medium">Your desktop is empty. Add a note!</p>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="bg-yellow-200 p-4 rounded shadow-md w-40 relative group transition-transform hover:-translate-y-1">
              <h4 className="font-bold border-b border-yellow-300 pb-1 text-gray-800 truncate mb-2">{note.title}</h4>
              <p className="text-sm text-gray-700 break-words">{note.details}</p>

              <button
                onClick={() => deleteNote(note.id)}
                className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs shadow-lg hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))
        )}

      </div>
      </div>     
    </div>
  )
}
