import { ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '../CartContext';

interface BottomCartBarProps {
  onViewCart: () => void;
}

export default function BottomCartBar({ onViewCart }: BottomCartBarProps) {
  const { totalItems, totalPrice } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-[74px] left-0 right-0 z-50 px-4 animate-slide-up pointer-events-none">
      <button
        onClick={onViewCart}
        className="pointer-events-auto w-full max-w-sm mx-auto bg-gradient-to-r from-stone-900 to-stone-800 text-white p-4 rounded-2xl flex items-center justify-between shadow-app tap-feedback"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <ShoppingBag size={20} className="text-orange-500" strokeWidth={2.5} />
            <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-black h-4 min-w-4 px-1 rounded-full flex items-center justify-center border border-stone-800">
              {totalItems}
            </span>
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-[10px] uppercase font-black text-stone-400 tracking-widest">
              {totalItems} item{totalItems > 1 ? 's' : ''} added
            </span>
            <span className="text-sm font-black tracking-tight">₹{totalPrice} plus taxes</span>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-orange-600 text-white py-1.5 pl-3 pr-2 rounded-xl text-xs font-black uppercase tracking-tight shadow-inner">
          View Cart
          <ChevronRight size={14} strokeWidth={3} />
        </div>
      </button>
    </div>
  );
}
