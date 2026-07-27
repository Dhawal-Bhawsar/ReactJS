import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { SystemContext } from '../context/SystemContext.jsx'
import { Taskbar } from '../components/Taskbar'

export const Desktop = () => {
  const { wallpaper } = useContext(SystemContext);

  return (
    <div 
      className="h-screen w-full bg-cover bg-center overflow-hidden flex flex-col text-white"
      style={{ backgroundImage: `url(${wallpaper})`}}
    >
        <div className="flex-1 p-10 relative overflow-hidden">
            <Outlet />
        </div>
    <Taskbar />
    </div>
  );
};
