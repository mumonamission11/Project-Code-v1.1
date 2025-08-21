import { ShopItem } from '@/types/item';

interface POSItemProps {
  item: ShopItem;
  quantity: number;
  onAddToCart: (item: ShopItem) => void;
}

export function POSItem({ item, quantity, onAddToCart }: POSItemProps) {
  const isSelected = quantity > 0;
  
  return (
    <div 
      className={`relative bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all ${
        isSelected ? 'ring-[3px] ring-[#39E5B8]' : ''
      }`}
      onClick={() => onAddToCart(item)}
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full aspect-square object-cover"
      />
      <div className="p-2 text-center">
        <p className="text-xs font-semibold text-darkgray truncate">{item.name}</p>
        <p className="text-xs text-coral font-bold">${item.price.toFixed(2)}</p>
      </div>
      {quantity > 0 && (
        <div 
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
          style={{
            backgroundColor: '#39E5B8',
            color: '#FFEEA4',
            fontFamily: 'CocogoosePro, var(--font-sans)',
            fontSize: '16px'
          }}
        >
          {quantity}
        </div>
      )}
    </div>
  );
}
