import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, totalPages, setPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center mt-12 gap-4">
      <button 
        onClick={() => setPage(p => p - 1)}
        disabled={page === 1}
        className="flex items-center px-4 py-2 rounded-xl font-medium border border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        <ChevronLeft className="w-5 h-5 mr-1" /> Prev
      </button>
      
      <span className="text-sm font-semibold text-gray-300 bg-gray-800 border border-gray-700 px-4 py-2 rounded-xl">
        {page} / {totalPages}
      </span>

      <button 
        onClick={() => setPage(p => p + 1)}
        disabled={page === totalPages}
        className="flex items-center px-4 py-2 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
      >
        Next <ChevronRight className="w-5 h-5 ml-1" />
      </button>
    </div>
  );
}

