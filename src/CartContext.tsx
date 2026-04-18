import { createContext, useContext, useState, ReactNode } from 'react';

type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variant?: string;
};

type CartContextType = {
  cart: CartItemType[];
  addToCart: (item: Omit<CartItemType, 'quantity'>) => void;
  removeFromCart: (id: string, variant?: string) => void;
  updateQuantity: (id: string, quantity: number, variant?: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const addToCart = (newItem: Omit<CartItemType, 'quantity'>) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === newItem.id && item.variant === newItem.variant
      );
      if (existingItem) {
        return prev.map((item) =>
          item.id === newItem.id && item.variant === newItem.variant
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string, variant?: string) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const updateQuantity = (id: string, quantity: number, variant?: string) => {
    if (quantity < 1) {
      removeFromCart(id, variant);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}