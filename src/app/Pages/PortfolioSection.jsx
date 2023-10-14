import React, { useState } from 'react';

function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('TODAS');

  const categories = ['TODAS', 'Aplicaciones', 'Gabado Láser', 'Desarrollo Web'];

  const portfolioItems = [
    { category: 'Aplicaciones', icon: '📱', title: 'Aplicaciones' },
    { category: 'Gabado Láser', icon: '🔍', title: 'Gabado Láser' },
    { category: 'Desarrollo Web', icon: '🌐', title: 'Desarrollo Web' },
    { category: 'Desarrollo de prototipos', icon: '🛠️', title: 'Desarrollo de prototipos' }
  ];

  return (
    <div id='portafolio' className="h-[70vh] flex flex-col items-center justify-center w-full p-8 bg-white border-t border-black mt-72"
    >
      <h1 className="mt-16 font-bold text-black text-7xl mb-28">Mira nuestros portafolio</h1>
      
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setActiveCategory(category)}
            className={`mr-4 rounded-2xl py-2 px-4 ${activeCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {portfolioItems
          .filter(item => activeCategory === 'TODAS' || item.category === activeCategory)
          .map(item => (
            <div key={item.title} className="flex flex-col items-center p-16 border border-black shadow-large ">
              <span className="mb-4 text-4xl">{item.icon}</span>
              <p className='font-bold text-black'>{item.title}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default PortfolioSection;
