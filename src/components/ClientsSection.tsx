
export const ClientsSection = () => {
  const clients = [
    {
      name: 'Healthy Food',
      image: '/lovable-uploads/3b478aaa-e5f0-4f3f-8e17-3bb380ba2cfe.png'
    },
    {
      name: 'Nice Resto',
      image: '/lovable-uploads/03fc8b3d-663d-4fd0-84f3-78ae68415cd6.png'
    },
    {
      name: 'Good Food',
      image: '/lovable-uploads/591df81e-b509-487b-980d-4689f1d0778a.png'
    },
    {
      name: 'Season Food',
      image: '/lovable-uploads/58b01dc5-893f-4ea7-beaa-a6e583af3a9f.png'
    },
    {
      name: 'Speedy Fork',
      image: '/lovable-uploads/3b478aaa-e5f0-4f3f-8e17-3bb380ba2cfe.png'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Clients</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {clients.map((client) => (
            <div key={client.name} className="hover-scale">
              <img 
                src={client.image} 
                alt={client.name} 
                className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-yummi-red"></div>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
