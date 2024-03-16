import { IoHomeOutline, IoPersonOutline, IoAppsOutline, IoMailOutline } from 'react-icons/io5';

const navItems = [
  { name: 'Home', icon: IoHomeOutline, path: '/' },
  { name: 'Applications', icon: IoAppsOutline, path: '/applications' },
  { name: 'Messages', icon: IoMailOutline, path: '/messages' },
  { name: 'Profile', icon: IoPersonOutline, path: '/profile' },
];

const Sidebar = () => {

  return (
    <div className='shadow-lg h-screen'>
      <div className='flex flex-row justify-center pt-3 text-3xl font-bold'>
        MV
      </div>
      <div className="pt-24 px-4">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.name} className="flex flex-col items-center my-6 text-sm font-semibold text-gray-700">
              <a href={item.path}><IconComponent className="my-1" size={28}/></a>
              <h2>{item.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;