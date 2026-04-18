import { useState } from 'react';
import { Plus, Minus, Flame, Star, ShoppingCart } from 'lucide-react';
import { MenuItem } from '../data';
import { useCart } from '../CartContext';

export default function MenuItemCard({ item, revealDelay = 0 }: { item: MenuItem; revealDelay?: number }) {
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
      className="card-hover bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col"
      style={{ animationDelay: `${revealDelay}ms` }}
    >
      {/* ══ Mobile layout: horizontal row (image | content) ══ */}
      {/* ══ Desktop layout: stacked (image on top, content below) ══ */}

      {/* TOP SECTION — horizontal on mobile, full-width image on desktop */}
      <div className="flex flex-row sm:flex-col">

        {/* ── Food Image ── */}
        {/* Mobile: fixed 110px square | Desktop: full-width 176px tall */}
        <div className="relative shrink-0
          w-[110px] h-[110px]
          sm:w-full sm:h-44
          bg-stone-100 overflow-hidden">

          {item.image ? (
            <>
              {!imgLoaded && <div className="skeleton absolute inset-0" />}
              <img
                src={item.image}
                alt={item.name}
                onLoad={() => setImgLoaded(true)}
                className={`img-zoom w-full h-full object-cover object-center transition-opacity duration-500 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl select-none">🍽️</div>
          )}

          {/* Veg/Non-veg dot */}
          <span className="absolute top-1.5 right-1.5 bg-white/95 rounded p-0.5 shadow">
            <span className={`flex items-center justify-center w-4 h-4 border-2 ${
              item.veg ? 'border-green-600' : 'border-red-600'
            }`}>
              <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
            </span>
          </span>

          {/* Desktop-only: gradient + badge overlay on image */}
          <div className="hidden sm:block absolute inset-x-0 bottom-0 h-14
            bg-gradient-to-t from-black/45 to-transparent pointer-events-none" />
          <div className="hidden sm:flex absolute bottom-2 left-2 gap-1 flex-wrap">
            {item.bestseller && (
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold
                bg-amber-500 text-white px-1.5 py-0.5 rounded shadow">
                <Star size={9} fill="currentColor" /> BESTSELLER
              </span>
            )}
            {item.popular && !item.bestseller && (
              <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded shadow">
                POPULAR
              </span>
            )}
            {item.spicy && (
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold
                bg-red-600 text-white px-1.5 py-0.5 rounded shadow">
                <Flame size={9} /> SPICY
              </span>
            )}
          </div>
        </div>

        {/* ── Content (right of image on mobile, below image on desktop) ── */}
        <div className="flex flex-col flex-1 min-w-0 p-2.5 sm:p-4">

          {/* Mobile badges */}
          <div className="flex sm:hidden gap-1 flex-wrap mb-1">
            {item.bestseller && (
              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold
                bg-amber-500 text-white px-1.5 py-0.5 rounded">
                <Star size={8} fill="currentColor" /> BESTSELLER
              </span>
            )}
            {item.popular && !item.bestseller && (
              <span className="text-[9px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded">
                POPULAR
              </span>
            )}
            {item.spicy && (
              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold
                bg-red-600 text-white px-1.5 py-0.5 rounded">
                <Flame size={8} /> SPICY
              </span>
            )}
          </div>

          {/* Item name */}
          <h3 className="font-bold text-stone-900 leading-snug text-sm sm:text-base line-clamp-2">
            {item.name}
          </h3>

          {/* Description — hidden on mobile to save space */}
          {item.description && (
            <p className="hidden sm:block text-xs text-stone-500 mt-1 mb-2 line-clamp-2">
              {item.description}
            </p>
          )}

          {/* Variants */}
          {item.variants && (
            <div className="flex gap-1 mt-1 flex-wrap">
              {item.variants.map((v) => (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariant(v.label)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all ${
                    selectedVariant === v.label
                      ? 'bg-orange-600 text-white'
                      : 'bg-stone-100 text-stone-600'
                  }`}
                >
                  {v.label} ₹{v.price}
                </button>
              ))}
            </div>
          )}

          {/* Price + ADD — always at the bottom */}
          <div className="mt-auto pt-2 flex items-center justify-between gap-2">
            <span className="font-extrabold text-stone-900 text-sm sm:text-lg">₹{currentPrice}</span>

            {qty === 0 ? (
              <button
                onClick={handleAdd}
                className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500
                  active:scale-95 text-white font-bold
                  text-[11px] sm:text-sm px-2.5 sm:px-4 py-1.5 sm:py-2
                  rounded-xl shadow-md transition-all duration-150 shrink-0"
              >
                <ShoppingCart size={12} className="sm:hidden" />
                <Plus size={12} className="hidden sm:block" />
                <span>ADD</span>
              </button>
            ) : (
              <div className="flex items-center bg-orange-50 border-2 border-orange-500 rounded-xl overflow-hidden shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, qty - 1, item.variants ? selectedVariant : undefined)}
                  className="px-2 py-1.5 hover:bg-orange-100 active:bg-orange-200 text-orange-600 font-bold transition-colors"
                >
                  <Minus size={12} />
                </button>
                <span className="font-extrabold text-orange-600 w-5 text-center text-xs sm:text-sm">{qty}</span>
                <button
                  onClick={handleAdd}
                  className="px-2 py-1.5 hover:bg-orange-100 active:bg-orange-200 text-orange-600 font-bold transition-colors"
                >
                  <Plus size={12} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom row (mobile only): description when available ── */}
      {item.description && (
        <p className="sm:hidden text-[10px] text-stone-400 px-2.5 pb-2.5 line-clamp-1">
          {item.description}
        </p>
      )}
    </div>
  );
}
