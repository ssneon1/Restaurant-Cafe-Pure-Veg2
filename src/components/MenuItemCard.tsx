import { useState } from 'react';
import { Plus, Minus, Flame, Star } from 'lucide-react';
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
      className="card-hover bg-white rounded-2xl border border-stone-200 flex flex-col overflow-hidden"
      style={{ animationDelay: `${revealDelay}ms` }}
    >
      {/* ── Food Image ── */}
      <div className="relative h-44 bg-stone-100 overflow-hidden">
        {item.image && (
          <>
            {/* Skeleton shimmer while image loads */}
            {!imgLoaded && <div className="skeleton absolute inset-0" />}
            <img
              src={item.image}
              alt={item.name}
              onLoad={() => setImgLoaded(true)}
              className={`img-zoom w-full h-full object-cover transition-opacity duration-500 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
          </>
        )}
        {!item.image && (
          <div className="w-full h-full flex items-center justify-center text-5xl select-none">🍽️</div>
        )}

        {/* Veg / Non-veg indicator — top-right */}
        <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded p-0.5 shadow-sm">
          <span
            className={`flex items-center justify-center w-4 h-4 border-2 ${
              item.veg ? 'border-green-600' : 'border-red-600'
            }`}
          >
            <span className={`w-2 h-2 rounded-full ${item.veg ? 'bg-green-600' : 'bg-red-600'}`} />
          </span>
        </span>

        {/* Gradient overlay — bottom */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        {/* Badges overlay — bottom-left */}
        <div className="absolute bottom-2 left-2 flex gap-1 flex-wrap">
          {item.bestseller && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold bg-amber-500 text-white px-1.5 py-0.5 rounded shadow">
              <Star size={9} fill="currentColor" /> BESTSELLER
            </span>
          )}
          {item.popular && !item.bestseller && (
            <span className="text-[10px] font-bold bg-orange-500 text-white px-1.5 py-0.5 rounded shadow">
              POPULAR
            </span>
          )}
          {item.spicy && (
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold bg-red-600 text-white px-1.5 py-0.5 rounded shadow">
              <Flame size={9} /> SPICY
            </span>
          )}
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-stone-900 leading-tight mb-1">{item.name}</h3>

        {item.description && (
          <p className="text-xs text-stone-500 mb-3 line-clamp-2">{item.description}</p>
        )}

        {item.variants && (
          <div className="flex gap-1.5 mb-3 flex-wrap">
            {item.variants.map((v) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(v.label)}
                className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all duration-200 ${
                  selectedVariant === v.label
                    ? 'bg-orange-600 text-white shadow-sm scale-105'
                    : 'bg-stone-100 text-stone-700 hover:bg-orange-50 hover:text-orange-600'
                }`}
              >
                {v.label} • ₹{v.price}
              </button>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="font-extrabold text-stone-900 text-lg">₹{currentPrice}</div>

          {qty === 0 ? (
            <button
              onClick={handleAdd}
              className="group flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 active:scale-95 text-white text-sm font-bold px-4 py-2 rounded-xl shadow-md hover:shadow-orange-200 hover:shadow-lg transition-all duration-200"
            >
              <Plus size={14} className="group-hover:rotate-90 transition-transform duration-200" />
              ADD
            </button>
          ) : (
            <div className="flex items-center gap-1 bg-orange-50 border-2 border-orange-400 rounded-xl overflow-hidden shadow-inner">
              <button
                onClick={() =>
                  updateQuantity(item.id, qty - 1, item.variants ? selectedVariant : undefined)
                }
                className="px-2.5 py-1.5 hover:bg-orange-100 active:bg-orange-200 text-orange-600 transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="font-extrabold text-orange-600 w-5 text-center text-sm">{qty}</span>
              <button
                onClick={handleAdd}
                className="px-2.5 py-1.5 hover:bg-orange-100 active:bg-orange-200 text-orange-600 transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
