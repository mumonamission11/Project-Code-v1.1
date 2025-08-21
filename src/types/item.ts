export interface ShopItem {
  id: string;
  name: string;
  price: number;
  image: string; // Base64 encoded image or blob URL
  createdAt: Date;
}

export interface CartItem extends ShopItem {
  quantity: number;
}
