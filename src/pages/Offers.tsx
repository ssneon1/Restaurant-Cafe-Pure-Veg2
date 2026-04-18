import { Copy, Tag, Gift, Percent, Truck, Cake } from 'lucide-react';
import { useState } from 'react';

const allOffers = [
  { code: 'CLOUDY20', title: 'Flat 20% OFF', desc: 'On orders above ₹399', icon: Percent, color: 'from-orange-500 to-red-500' },
  { code: 'WELCOME', title: 'Free Delivery', desc: 'No minimum for first-time users', icon: Truck, color: 'from-emerald-500 to-teal-500' },
  { code: 'THALI100', title: 'Thali Combo', desc: 'Free Gulab Jamun on Premium/Special Thali', icon: Cake, color: 'from-purple-500 to-pink-500' },
  { code: 'WEEKEND15', title: '15% OFF Weekend', desc: 'Sat & Sun on all online orders', icon: Tag, color: 'from-blue-500 to-indigo-500' },
  { code: 'PIZZA50', title: 'Buy 1 Get 1 Pizza', desc: 'On all medium pizzas', icon: Gift, color: 'from-rose-500 to-red-500' },
  { code: 'NEWUSER', title: '₹100 OFF First Order', desc: 'Min order ₹299', icon: Percent, color: 'from-amber-500 to-orange-500' },
];

export default function Offers() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white/10" />
        <h1 className="text-3xl md:text-5xl font-extrabold relative">🎉 Hot Offers</h1>
        <p className="mt-2 opacity-90 max-w-md relative">Save big on your favourite dishes with these exclusive Cloudy Food coupons.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {allOffers.map((o) => {
          const Icon = o.icon;
          return (
            <div key={o.code} className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl transition-shadow">
              <div className={`bg-gradient-to-br ${o.color} p-5 text-white relative`}>
                <Icon size={32} className="opacity-80 mb-2" />
                <h3 className="font-extrabold text-xl">{o.title}</h3>
                <p className="text-sm opacity-90">{o.desc}</p>
              </div>
              <div className="p-4 flex items-center justify-between bg-stone-50">
                <div>
                  <p className="text-[10px] text-stone-500 font-bold uppercase">Use code</p>
                  <p className="font-extrabold tracking-wider text-stone-800">{o.code}</p>
                </div>
                <button
                  onClick={() => copy(o.code)}
                  className="flex items-center gap-1 bg-stone-900 hover:bg-orange-600 text-white px-3 py-2 rounded-lg text-xs font-bold"
                >
                  <Copy size={14} /> {copied === o.code ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-5">
        <h3 className="font-bold text-amber-900">📌 Terms & Conditions</h3>
        <ul className="text-sm text-amber-800 mt-2 list-disc pl-5 space-y-1">
          <li>Offers valid only on online orders placed via the Cloudy Food website.</li>
          <li>One coupon per order. Cannot be combined with other offers.</li>
          <li>Cloudy Food reserves the right to modify or end offers anytime.</li>
        </ul>
      </div>
    </div>
  );
}
