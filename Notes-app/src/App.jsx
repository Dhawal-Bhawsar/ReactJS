import { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !details.trim()) return; 
    
    const newNote = {
      id: Date.now(),
      title,
      details,
      isPinned: false
    };

    setNotes([...notes, newNote]);
    setTitle('');
    setDetails('');
  };

  const togglePin = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const pinnedNotes = notes.filter(note => note.isPinned);
  const unpinnedNotes = notes.filter(note => !note.isPinned);

return (
    <div className="min-h-screen p-10 flex flex-col lg:flex-row gap-10 font-sans bg-zinc-900 text-white">
      
      {/* Form Section */}
      <form onSubmit={submitHandler} className="flex flex-col gap-5 w-full lg:w-1/3">
        <h1 className="text-3xl font-bold mb-2">Add Notes</h1>
        
        <input 
          type="text" 
          placeholder="Enter Notes Heading" 
          className="px-5 py-3 rounded-md text-black outline-none bg-zinc-100 focus:ring-2 focus:ring-emerald-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <textarea 
          placeholder="Write Details Here" 
          className="px-5 py-3 rounded-md text-black outline-none resize-none h-32 bg-zinc-100 focus:ring-2 focus:ring-emerald-500"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
        
        <button 
          type="submit" 
          className="bg-emerald-600 text-white px-5 py-3 rounded-md font-bold active:scale-95 transition-transform"
        >
          Add Note
        </button>
      </form>

      {/* Notes Display Section */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl font-bold mb-5 border-b-2 border-zinc-800 pb-4">Recent Notes</h1>
        
        {notes.length === 0 ? (
          <p className="text-zinc-500 italic mt-2">No notes available. Add one to get started!</p>
        ) : (
          <div className="flex flex-col gap-8">
            
            {/* Pinned Section */}
            {pinnedNotes.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-4 flex items-center gap-2">
                  📌 Pinned Notes
                </h2>
                <div className="flex flex-wrap gap-5 items-start">
                  {pinnedNotes.map((note) => (
                    <div key={note.id} className="bg-zinc-800 border border-yellow-500/30 w-full sm:w-64 p-5 rounded-xl flex flex-col justify-between shadow-lg">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-emerald-400">{note.title}</h3>
                        <p className="text-zinc-300 text-sm mb-6 leading-relaxed whitespace-pre-wrap">
                          {note.details}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button 
                          onClick={() => togglePin(note.id)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md text-sm font-bold active:scale-95 transition-all"
                        >
                          Unpin
                        </button>
                        <button 
                          onClick={() => deleteNote(note.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold active:scale-95 transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Unpinned Section */}
            {unpinnedNotes.length > 0 && (
              <div>
                {/* Only show the "Other Notes" header if there are actually pinned notes to distinguish from */}
                {pinnedNotes.length > 0 && (
                  <h2 className="text-xl font-semibold text-zinc-400 mb-4">Other Notes</h2>
                )}
                <div className="flex flex-wrap gap-5 items-start">
                  {unpinnedNotes.map((note) => (
                    <div key={note.id} className="bg-zinc-800 w-full sm:w-64 p-5 rounded-xl flex flex-col justify-between shadow-lg">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-emerald-400">{note.title}</h3>
                        <p className="text-zinc-300 text-sm mb-6 leading-relaxed whitespace-pre-wrap">
                          {note.details}
                        </p>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <button 
                          onClick={() => togglePin(note.id)}
                          className="bg-zinc-600 hover:bg-zinc-500 text-white px-4 py-2 rounded-md text-sm font-bold active:scale-95 transition-all"
                        >
                          Pin
                        </button>
                        <button 
                          onClick={() => deleteNote(note.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-bold active:scale-95 transition-all"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );
}
export default App;