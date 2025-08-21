import { useState } from 'react';
import { useLocation } from 'wouter';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { POSItem } from '@/components/POSItem';
import { ShopItem, CartItem } from '@/types/item';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function POS() {
  const [, setLocation] = useLocation();
  const { items } = useLocalStorage();
  const [cart, setCart] = useState<Map<string, number>>(new Map());
  const { toast } = useToast();

  const total = Array.from(cart.entries()).reduce((sum, [itemId, quantity]) => {
    const item = items.find(i => i.id === itemId);
    return sum + (item ? item.price * quantity : 0);
  }, 0);

  // Sound functions
  const playPopSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LKdSMFl');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Ignore errors if audio fails
  };

  const playChachingSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRmQEAABXQVZFZm10IBAAAAABAAEAuFIAAIhYAQACABAAZGF0YUAEAADGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb');
    audio.volume = 0.5;
    audio.play().catch(() => {}); // Ignore errors if audio fails
  };

  const handleAddToCart = (item: ShopItem) => {
    playPopSound();
    setCart(prev => {
      const newCart = new Map(prev);
      const currentQuantity = newCart.get(item.id) || 0;
      newCart.set(item.id, currentQuantity + 1);
      return newCart;
    });
    toast({
      description: "Item added to cart",
      duration: 1500,
    });
  };

  const handleClearCart = () => {
    setCart(new Map());
  };

  const handleCelebrate = () => {
    playChachingSound();
    setLocation('/celebration');
  };

  // Create array of 9 slots for POS items
  const posSlots = Array.from({ length: 9 }, (_, index) => items[index] || null);

  return (
    <div className="min-h-screen p-4" style={{ backgroundColor: '#4B7FE8' }}>
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="flex items-center gap-3" onClick={() => setLocation('/')}>
          <img src="/assets/icons/back-icon.png" alt="Back" className="w-12 h-12" />
          <span 
            className="uppercase text-2xl"
            style={{ 
              fontFamily: 'CocogoosePro, var(--font-sans)',
              color: '#FFEEA4',
              fontSize: '24px'
            }}
          >
            BACK
          </span>
        </button>
      </div>

      {/* Content Container */}
      <div className="bg-white rounded-xl p-4" style={{ borderRadius: '12px' }}>
        {/* Items Grid */}
        <h3 className="font-semibold text-darkgray mb-4">Tap on items to see the total add up</h3>
        <div className="grid grid-cols-3 gap-4 mb-6">
          {posSlots.map((item, index) => (
            <div key={index}>
              {item ? (
                <POSItem
                  item={item}
                  quantity={cart.get(item.id) || 0}
                  onAddToCart={handleAddToCart}
                />
              ) : (
                <div className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <p className="text-xs text-gray-400">Empty</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Character Image */}
        <div className="flex justify-center mb-4">
          <img 
            src="/assets/characters/pos-character-illustration.png" 
            alt="POS Character"
            className="w-full max-w-xs h-auto"
          />
        </div>

        {/* Total Display */}
        <div 
          className="flex items-center justify-center mb-6"
          style={{ 
            backgroundColor: '#FFEEA4',
            height: '68px',
            borderRadius: '12px'
          }}
        >
          <span 
            style={{ 
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '30px',
              color: '#4B7FE8'
            }}
          >
            ${total.toFixed(2)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            className="flex-1 flex items-center justify-center uppercase font-semibold"
            onClick={handleClearCart}
            style={{
              height: '68px',
              backgroundColor: '#FEA885',
              color: '#000000',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '30px',
              borderRadius: '12px'
            }}
          >
            CLEAR
          </Button>
          <Button
            className="flex-1 flex items-center justify-center uppercase font-semibold"
            onClick={handleCelebrate}
            disabled={total === 0}
            style={{
              height: '68px',
              backgroundColor: '#39E5B8',
              color: '#000000',
              fontFamily: 'CocogoosePro, var(--font-sans)',
              fontSize: '30px',
              borderRadius: '12px'
            }}
          >
            GET $$$
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
