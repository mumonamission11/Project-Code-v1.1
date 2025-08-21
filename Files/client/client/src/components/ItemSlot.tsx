import { ShopItem } from '@/types/item';

interface ItemSlotProps {
  item?: ShopItem;
  onClick: () => void;
}

export function ItemSlot({ item, onClick }: ItemSlotProps) {
  if (!item) {
    return (
      <div 
        className="aspect-square bg-gray-100 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:border-coral transition-colors"
        onClick={onClick}
      >
        <img 
          src="/assets/icons/add-button-icon.png" 
          alt="Add Item" 
          className="w-12 h-12"
          style={{ width: '48px', height: '48px' }}
        />
      </div>
    );
  }

  return (
    <div 
      className="aspect-square rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform relative"
      onClick={onClick}
    >
      <img 
        src={item.image} 
        alt={item.name}
        className="w-full h-full object-cover"
      />
      <div className="item-overlay absolute inset-0 flex flex-col justify-end p-2">
        <p className="text-white font-semibold text-xs truncate">{item.name}</p>
        <p className="text-white text-xs">${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
