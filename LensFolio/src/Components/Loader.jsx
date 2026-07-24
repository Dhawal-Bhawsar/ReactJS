import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-64 gap-4">
      <Loader2 className="w-12 h-12 animate-spin text-blue-400" />
      <p className="text-gray-400 font-medium">Fetching gallery...</p>
    </div>
  );
}

