
import { TopBar } from "@/components/TopBar";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useCart } from "@/contexts/CartContext";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { FoodCard } from "@/components/FoodCard";

// Sample product data
const products = [
  {
    id: '1',
    name: 'Salisbury Steak',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070',
    price: 12.99,
    rating: 4,
    reviews: 15,
    category: 'Western Indian',
    description: 'Delicious salisbury steak with mushroom gravy, served with mashed potatoes and fresh vegetables. A perfect comfort food choice.'
  },
  {
    id: '2',
    name: 'English Breakfast',
    image: 'https://images.unsplash.com/photo-1533920379810-6bedac961c2a?q=80&w=2070',
    price: 10.99,
    rating: 5,
    reviews: 23,
    category: 'Western Indian',
    description: 'A traditional full English breakfast with eggs, bacon, sausages, baked beans, mushrooms, and toast. Perfect for starting your day.'
  },
  {
    id: '3',
    name: 'Buldak',
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=2070',
    price: 14.99,
    rating: 4.5,
    reviews: 18,
    category: 'Western Indian',
    description: 'Spicy Korean fire chicken dish with a perfect blend of heat and sweetness. Served with rice and fresh kimchi.'
  },
  {
    id: '4',
    name: 'Creamed Chipped Prawn',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070',
    price: 13.50,
    rating: 5,
    reviews: 12,
    category: 'Seafood',
    description: 'Delicate prawns in a rich, creamy sauce served over toast or rice. A delicious seafood comfort dish loved by many.'
  },
  {
    id: '5',
    name: 'Mexican Bean Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=2068',
    price: 9.70,
    rating: 4,
    reviews: 20,
    category: 'Salad',
    description: 'Fresh and vibrant Mexican bean salad with corn, bell peppers, tomatoes, and a zesty lime dressing. Perfect for a healthy meal.'
  },
  {
    id: '6',
    name: 'Scrambled Eggs',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=2080',
    price: 8.99,
    rating: 5,
    reviews: 25,
    category: 'Breakfast',
    description: 'Fluffy scrambled eggs cooked to perfection with butter and herbs. Served with toast and fresh fruit.'
  }
];

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProduct = () => {
      setLoading(true);
      const foundProduct = products.find(p => p.id === id);
      
      if (foundProduct) {
        setProduct(foundProduct);
        // Get related products (same category or random)
        const related = products
          .filter(p => p.id !== id && p.category === foundProduct.category)
          .slice(0, 3);
        setRelatedProducts(related);
      }
      
      setLoading(false);
    };
    
    fetchProduct();
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-5 w-5 ${i <= rating ? 'text-yummi-gold fill-yummi-gold' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <NavBar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-xl">Loading...</div>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <NavBar />
        <div className="flex-grow flex flex-col items-center justify-center py-20">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <NavBar />
      <div className="py-12 bg-gray-50 flex-grow">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              <div className="product-image">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              
              <div className="product-details">
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
                
                <div className="text-2xl font-bold text-yummi-red mb-4">
                  ${product.price.toFixed(2)}
                </div>
                
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Category:</label>
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm">
                    {product.category}
                  </span>
                </div>
                
                <div className="flex items-center mb-6">
                  <label className="block text-sm font-medium mr-4">Quantity:</label>
                  <div className="flex items-center">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="bg-gray-100 px-3 py-1 rounded-l border border-gray-300"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-y border-gray-300"
                    />
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="bg-gray-100 px-3 py-1 rounded-r border border-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    className="bg-yummi-red hover:bg-red-700 flex-grow flex items-center justify-center"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="px-4">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map(product => (
                  <FoodCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Product;
