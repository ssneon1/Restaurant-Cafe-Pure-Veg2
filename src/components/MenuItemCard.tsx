import { useState } from 'react';
import { Plus, Minus, Flame, Star, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../data';
import { useCart } from '../CartContext';

interface MenuItemCardProps {
  item: MenuItem;
  revealDelay?: number;
}

export default function MenuItemCard({ item, revealDelay = 0 }: MenuItemCardProps) {
  const { cart, addToCart, updateQuantity } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(item.variants?.[0]?.label);
  const [imgLoaded, setImgLoaded] = useState(false);

  const currentPrice = item.variants
    ? item.variants.find((v) => v.label === selectedVariant)?.price ?? 0
    : item.price ?? 0;

  const cartItem = cart.find(
    (c) => c.id === item.id && c.variant === (item.variants ? selectedVariant : undefined)
  );
  const qty = cartItem?.quantity ?? 0;

  const handleAdd = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: currentPrice,
      variant: item.variants ? selectedVariant : undefined,
    });
  };

  return (
    <div
      className="group relative bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row sm:flex-col p-3 sm:p-0 min-h-[150px] sm:min-h-0"
      style={{ animationDelay: `${revealDelay}ms` }}
    >
      {/* ── Food Image ── */}
      <div className="relative shrink-0 w-32 h-32 sm:w-full sm:h-48 rounded-2xl sm:rounded-none overflow-hidden bg-stone-100 shadow-inner">
        {item.image ? (
          <>
            {!imgLoaded && <div className="skeleton absolute inset-0" />}
            <img
              src={`${item.image}&auto=format&fit=crop&w=400&q=80`}
              alt={item.name}
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">🍽️</div>
        )}

        {/* Veg Dot */}
        <div className="absolute top-2 right-2 z-10 p-0.5 bg-white/95 backdrop-blur-sm rounded-md shadow-sm border border-stone-100">
          <div className={`w-3.5 h-3.5 border-2 flex items-center justify-center rounded-sm ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
          </div>
        </div>

        {/* Desktop Badges over image */}
        <div className="hidden sm:flex absolute bottom-2 left-2 flex-wrap gap-1 z-10">
          {item.bestseller && (
            <span className="flex items-center gap-1 bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-lg">
              <Star size={10} fill="currentColor" /> BESTSELLER
            </span>
          )}
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="flex-1 flex flex-col pl-4 pr-1 sm:px-4 py-1 sm:py-4 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-black text-stone-900 leading-tight text-sm sm:text-lg line-clamp-1">
            {item.name}
          </h3>
          {/* Mobile indicator if bestseller */}
          {item.bestseller && (
             <Star size={14} fill="#f59e0b" className="text-amber-500 sm:hidden shrink-0 ml-1" />
          )}
        </div>

        {item.description && (
          <p className="text-stone-500 text-[11px] sm:text-xs line-clamp-2 mb-2">
            {item.description}
          </p>
        )}

        {/* Variants Selector */}
        {item.variants && (
          <div className="flex flex-wrap gap-1 mb-2">
            {item.variants.map((v) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(v.label)}
                className={`px-2 py-0.5 rounded-md text-[9px] font-black transition-all tap-feedback border ${
                  selectedVariant === v.label
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-white text-stone-500 border-stone-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Price & Action Row */}
        <div className="mt-auto flex items-end justify-between gap-2 pb-1 sm:pb-0">
          <div className="flex flex-col">
            <span className="text-base sm:text-xl font-black text-stone-900 leading-none">₹{currentPrice}</span>
          </div>

          <div className="shrink-0">
            {qty === 0 ? (
              <button
                onClick={handleAdd}
                className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl text-[11px] sm:text-sm font-black shadow-lg shadow-orange-100 hover:shadow-xl hover:scale-105 transition-all tap-feedback uppercase tracking-tighter"
              >
                <Plus size={14} strokeWidth={3} />
                <span>ORDER</span>
              </button>
            ) : (
              <div className="flex items-center gap-2.5 bg-stone-900 text-white rounded-2xl px-2 py-1.5 sm:py-2 shadow-xl border border-stone-800">
                <button
                  onClick={() => updateQuantity(item.id, qty - 1, item.variants ? selectedVariant : undefined)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors tap-feedback"
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="text-xs sm:text-sm font-black w-3 text-center">{qty}</span>
                <button
                  onClick={handleAdd}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors tap-feedback"
                >
                  <Plus size={14} strokeWidth={3} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
