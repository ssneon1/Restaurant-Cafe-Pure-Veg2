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
      className="group relative bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-row sm:flex-col p-2 sm:p-0"
      style={{ animationDelay: `${revealDelay}ms` }}
    >
      {/* ── Food Image ── */}
      <div className="relative shrink-0 w-28 h-28 sm:w-full sm:h-48 rounded-2xl sm:rounded-none overflow-hidden bg-stone-100">
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
        <div className="absolute top-2 right-2 z-10 p-0.5 bg-white/90 backdrop-blur-sm rounded-md shadow-sm">
          <div className={`w-3.5 h-3.5 border-2 flex items-center justify-center rounded-sm ${item.veg ? 'border-green-600' : 'border-red-600'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
          </div>
        </div>

        {/* Desktop Badges over image */}
        <div className="hidden sm:flex absolute bottom-2 left-2 flex-wrap gap-1 z-10">
          {item.bestseller && (
            <span className="flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
              <Star size={10} fill="currentColor" /> BESTSELLER
            </span>
          )}
          {item.spicy && (
            <span className="flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
              <Flame size={10} /> SPICY
            </span>
          )}
        </div>
      </div>

      {/* ── Content Area ── */}
      <div className="flex-1 flex flex-col px-3 sm:px-4 py-1 sm:py-4 min-w-0">
        {/* Mobile Badges */}
        <div className="flex sm:hidden gap-1 mb-1">
          {item.bestseller && (
            <span className="bg-amber-100 text-amber-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">Bestseller</span>
          )}
          {item.spicy && (
            <span className="bg-red-100 text-red-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase font-bold">Spicy</span>
          )}
        </div>

        <h3 className="font-extrabold text-stone-900 leading-tight text-sm sm:text-lg line-clamp-2 mb-0.5">
          {item.name}
        </h3>

        {item.description && (
          <p className="text-stone-500 text-[11px] sm:text-xs line-clamp-2 mb-2 sm:mb-3">
            {item.description}
          </p>
        )}

        {/* Variants Selector */}
        {item.variants && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            {item.variants.map((v) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(v.label)}
                className={`px-2 py-1 rounded-lg text-[10px] font-bold transition-all tap-feedback ${
                  selectedVariant === v.label
                    ? 'bg-stone-900 text-white shadow-md scale-105'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        {/* Price & Action Row */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider leading-none">Price</span>
            <span className="text-base sm:text-xl font-black text-stone-900 leading-tight">₹{currentPrice}</span>
          </div>

          <div className="relative">
            {qty === 0 ? (
              <button
                onClick={handleAdd}
                className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-black shadow-lg shadow-orange-200 hover:shadow-xl hover:scale-105 transition-all tap-feedback"
              >
                <Plus size={16} strokeWidth={3} />
                <span>ADD</span>
              </button>
            ) : (
              <div className="flex items-center gap-3 bg-stone-900 text-white rounded-2xl px-2.5 py-1.5 sm:py-2 shadow-xl border border-stone-800">
                <button
                  onClick={() => updateQuantity(item.id, qty - 1, item.variants ? selectedVariant : undefined)}
                  className="p-1 hover:bg-white/10 rounded-lg transition-colors tap-feedback"
                >
                  <Minus size={14} strokeWidth={3} />
                </button>
                <span className="text-sm font-black w-4 text-center">{qty}</span>
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
