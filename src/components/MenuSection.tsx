
const menuItems = [
  {
    name: 'Waldorf Salad',
    description: 'Fresh apples, celery and walnuts, dressed in mayonnaise',
    price: 3.95,
    image: '/lovable-uploads/5b9c934c-b91a-4990-ba6a-09c5bea50aa6.png'
  },
  {
    name: 'Chicken Escalope',
    description: 'Bbq sauce, american garden, chicken breasts, coleslaw',
    price: 3.65,
    image: '/lovable-uploads/744e146c-481b-45e4-956c-1f40ba3cf4c1.png'
  },
  {
    name: 'Potato Croquettes',
    description: 'Loaded with bacon, stuffed with two kinds of cheese',
    price: 2.79,
    image: '/lovable-uploads/31f3303a-ae8d-4cf4-8144-81582367f4f8.png'
  },
  {
    name: 'Risotto',
    description: 'White wine, arborio rice, parmesan cheese, butter',
    price: 3.06,
    image: '/lovable-uploads/77d17dc9-fdfa-4cd8-bcc7-93a4f67a4ae2.png'
  },
  {
    name: 'Garganelli',
    description: 'Portobello mushrooms, white wine, arborio rice, chicken',
    price: 4.03,
    image: '/lovable-uploads/1633eb7d-8a7c-4f60-802d-36a4ce2f8c8d.png'
  },
  {
    name: 'Spaghetti Bolognese',
    description: 'Lean ground beef, red wine, tomato sauce, beef broth',
    price: 3.65,
    image: '/lovable-uploads/335b3c8e-8e4c-4731-b67b-99c42d8fa172.png'
  },
  {
    name: 'Cheesy Macaroni',
    description: 'Onion, tomato, masala, cheese',
    price: 4.67,
    image: '/lovable-uploads/956d6f13-6a23-4d6e-8795-261615906a1c.png'
  },
  {
    name: 'Cobb Salad',
    description: 'Stuffed with chicken, bacon, avocado, eggs and cheese',
    price: 2.98,
    image: '/lovable-uploads/73b95071-9faf-4526-9cc1-0730ec0ddc25.png'
  },
  {
    name: 'Gado-gado',
    description: 'Potato, bean sprouts, spinach, chayote, bitter gourd, corn',
    price: 2.54,
    image: '/lovable-uploads/b2127f2f-970b-410d-af04-46f3b04f1c53.png'
  },
  {
    name: 'Dressed Herring Salad',
    description: 'Potatoes, carrots, beet roots, chopped onions and mayonnaise',
    price: 3.05,
    image: '/lovable-uploads/99abcb45-fc66-49ce-9694-ade39b7182f5.png'
  },
  {
    name: 'Chicken Pizza',
    description: 'Chicken, cheese, olives, bacon, corn',
    price: 2.60,
    image: '/lovable-uploads/9ac06ecc-f162-49af-91c5-a06fa077172e.png'
  },
  {
    name: 'Tom Yum Soup',
    description: 'Baby bok choy, gluten free, coconut milk, chili sauce',
    price: 3.92,
    image: '/lovable-uploads/55b5dd1a-3d79-49e7-a34e-bd6baecf9d19.png'
  }
];

export const MenuSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Flavorful Menus</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Odio Morbi Quis Commodo Odio Aenean Sed Adipiscing. Neque Ornare Aenean Euismod Elementum Nisi Quis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {menuItems.map((item) => (
            <div key={item.name} className="flex items-center menu-item-hover">
              <div className="flex-shrink-0 w-20 h-20 mr-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-yummi-red">{item.name}</h3>
                  <div className="relative flex items-center">
                    <div className="menu-price w-16 relative z-0"></div>
                    <span className="bg-white px-2 relative z-10 font-bold">${item.price.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
