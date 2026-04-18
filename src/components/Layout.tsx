import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Home, UtensilsCrossed, ShoppingBag, Phone, Info, Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../CartContext';
import CartDrawer from './CartDrawer';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/menu', label: 'Menu', icon: UtensilsCrossed },
  { to: '/offers', label: 'Offers', icon: ShoppingBag },
  { to: '/about', label: 'About', icon: Info },
  { to: '/contact', label: 'Contact', icon: Phone },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white text-xs sm:text-sm py-1.5 text-center font-medium">
        🚀 Free Delivery on First Order • Use code <span className="font-bold">WELCOME</span> • Open till 11 PM
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/90 border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-xl font-extrabold text-xl mr-3 shadow-md group-hover:scale-110 transition-transform">
                CF
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-extrabold leading-tight tracking-tight">Cloudy Food</h1>
                <p className="text-[10px] sm:text-xs text-stone-500 -mt-0.5 font-medium">Restaurant & Cafe • Pure Veg</p>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-orange-100 text-orange-700'
                        : 'text-stone-700 hover:bg-stone-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCartOpen(true)}
                className="relative flex items-center gap-2 bg-stone-900 hover:bg-orange-600 text-white px-3 sm:px-4 py-2 rounded-xl text-sm font-semibold transition-colors"
              >
                <ShoppingBag size={18} />
                <span className="hidden sm:inline">Cart</span>
                {totalItems > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-[10px] font-bold rounded-full h-5 min-w-5 px-1 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-stone-100"
              >
                {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-semibold ${
                      isActive ? 'bg-orange-100 text-orange-700' : 'text-stone-700 hover:bg-stone-100'
                    }`
                  }
                >
                  <item.icon size={18} />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pb-20 md:pb-0">{children}</main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-xl font-bold text-lg mr-2">CF</div>
              <h3 className="text-white font-extrabold text-lg">Cloudy Food</h3>
            </div>
            <p className="text-sm text-stone-400">100% Pure Vegetarian Restaurant & Cafe serving authentic North Indian, Chinese & Continental cuisine.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-orange-400 transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>📞 097932 22121</li>
              <li>📍 IIITA Rd, Devprayagam Colony, Jhalwa, Prayagraj — 211015</li>
              <li>🕒 Open daily till 11 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Order Online</h4>
            <p className="text-sm text-stone-400 mb-3">Also available on:</p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1 bg-stone-800 rounded-md text-xs">Zomato 4.2★</span>
              <span className="px-3 py-1 bg-stone-800 rounded-md text-xs">Swiggy 4.5★</span>
              <span className="px-3 py-1 bg-stone-800 rounded-md text-xs">Justdial 4.1★</span>
            </div>
          </div>
        </div>
        <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-500">
          © 2026 Cloudy Food Restaurant & Cafe. All rights reserved. Made with ❤️ in Prayagraj.
        </div>
      </footer>

      {/* Mobile bottom tab bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-stone-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="grid grid-cols-5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.to === '/' ? location.pathname === '/' : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex flex-col items-center justify-center py-2 ${isActive ? 'text-orange-600' : 'text-stone-600'}`}
              >
                <Icon size={20} />
                <span className="text-[10px] mt-0.5 font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
