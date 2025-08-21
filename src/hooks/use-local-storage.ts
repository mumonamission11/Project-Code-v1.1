import { useState, useEffect } from 'react';
import { ShopItem } from '@/types/item';

const ITEMS_STORAGE_KEY = 'little-checkout-items';

export function useLocalStorage() {
  const [items, setItems] = useState<ShopItem[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem(ITEMS_STORAGE_KEY);
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        setItems(parsedItems);
      } catch (error) {
        console.error('Error parsing stored items:', error);
        localStorage.removeItem(ITEMS_STORAGE_KEY);
      }
    }
  }, []);

  const saveItem = (item: Omit<ShopItem, 'id' | 'createdAt'>) => {
    const newItem: ShopItem = {
      ...item,
      id: Date.now().toString(),
      createdAt: new Date()
    };

    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(updatedItems));
    return newItem;
  };

  const updateItem = (id: string, updates: Partial<ShopItem>) => {
    const updatedItems = items.map(item => 
      item.id === id ? { ...item, ...updates } : item
    );
    setItems(updatedItems);
    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const deleteItem = (id: string) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(updatedItems));
  };

  const clearAllItems = () => {
    setItems([]);
    localStorage.removeItem(ITEMS_STORAGE_KEY);
  };

  return {
    items,
    saveItem,
    updateItem,
    deleteItem,
    clearAllItems
  };
}
