import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Phone, ChevronRight, Truck, Award, Leaf, Flame, ArrowRight } from 'lucide-react';
import { menuData, foodCategories, getBestsellers, reviews, offers, getCategoryImage } from '../data';
import MenuItemCard from '../components/MenuItemCard';

export default function Home() {
  const bestsellers = getBestsellers();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #f97316 0px, transparent 200px), radial-gradient(circle at 80% 70%, #dc2626 0px, transparent 200px)' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold mb-4">
                <Leaf size={14} /> 100% PURE VEGETARIAN
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
                Taste the <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">cloud</span> of flavours.
              </h1>
              <p className="text-stone-600 mt-4 text-lg max-w-md">
                North Indian, Chinese & Continental — handcrafted with no onion, no garlic options. Hot, hygienic & delivered to your door.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <Link to="/menu" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-orange-500/30 inline-flex items-center gap-2">
                  Order Now <ArrowRight size={18} />
                </Link>
                <Link to="/offers" className="bg-white border border-stone-300 hover:border-orange-500 px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                  View Offers
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 text-sm">
                <div className="flex items-center gap-2"><Star className="text-amber-500 fill-amber-500" size={16} /> <span><b>4.3</b> on Google</span></div>
                <div className="flex items-center gap-2"><Truck className="text-orange-600" size={16} /> <span>Fast Delivery</span></div>
                <div className="flex items-center gap-2"><Award className="text-purple-600" size={16} /> <span>2,000+ reviews</span></div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-3xl opacity-30" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <img src="/images/cat-thali.png" alt="Cloudy Food Special Thali" className="w-full h-full object-cover bg-gradient-to-br from-orange-100 to-amber-100" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Clock className="text-emerald-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500">Delivery in</p>
                    <p className="font-bold text-sm">35–45 min</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Star className="text-amber-600 fill-amber-600" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-stone-500">Rated</p>
                    <p className="font-bold text-sm">4.5 ★ Swiggy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order best food options */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Order our best food options</h2>
            <p className="text-stone-500 text-sm mt-1">Browse all our cuisines, one tap away.</p>
          </div>
          <Link to="/menu" className="hidden sm:flex text-orange-600 font-semibold text-sm items-center gap-1 hover:gap-2 transition-all">
            View All <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-x-4 gap-y-6">
          {foodCategories.map((c) => (
            <Link
              key={c.id}
              to={`/menu#${c.id}`}
              className="group flex flex-col items-center text-center"
            >
              <div className={`relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br ${c.color} p-1 shadow-md group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                <div className="w-full h-full rounded-full bg-white overflow-hidden flex items-center justify-center">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `<span class="text-5xl">${c.emoji}</span>`;
                    }}
                  />
                </div>
              </div>
              <span className="mt-3 text-sm font-semibold text-stone-700 group-hover:text-orange-600">{c.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Offers banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-6">🎁 Today's Offers</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {offers.map((o) => (
            <div key={o.id} className={`bg-gradient-to-br ${o.color} text-white rounded-2xl p-5 shadow-lg relative overflow-hidden`}>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full bg-white/10" />
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10" />
              <h3 className="font-extrabold text-xl relative">{o.title}</h3>
              <p className="text-sm opacity-90 mt-1 relative">{o.subtitle}</p>
              <div className="mt-4 inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-md text-xs font-bold tracking-wider">
                CODE: {o.code}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2">
              <Flame className="text-orange-600" /> Bestsellers
            </h2>
            <p className="text-stone-500 text-sm mt-1">Most-loved dishes by our customers</p>
          </div>
          <Link to="/menu" className="hidden sm:flex text-orange-600 font-semibold text-sm items-center gap-1 hover:gap-2 transition-all">
            See Full Menu <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bestsellers.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">Why Cloudy Food?</h2>
          <p className="text-center text-stone-500 mb-10">Reasons we're Jhalwa's favourite restaurant</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Leaf, title: '100% Pure Veg', desc: 'No onion, no garlic options available', color: 'bg-emerald-100 text-emerald-600' },
              { icon: Truck, title: 'Fast Delivery', desc: 'Hot food in 35-45 minutes', color: 'bg-orange-100 text-orange-600' },
              { icon: Award, title: 'Top Rated', desc: '4.5★ on Swiggy, 4.2★ on Zomato', color: 'bg-amber-100 text-amber-600' },
              { icon: Flame, title: 'Fresh Tandoor', desc: 'Real charcoal tandoor cooking', color: 'bg-red-100 text-red-600' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-3`}>
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold mb-1">{f.title}</h3>
                <p className="text-sm text-stone-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Menu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Explore Menu by Category</h2>
            <p className="text-stone-500 text-sm mt-1">{menuData.length} categories • {menuData.reduce((a, c) => a + c.items.length, 0)}+ dishes</p>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {menuData.map((cat) => {
            const meta = getCategoryImage(cat.id);
            return (
              <Link
                key={cat.id}
                to={`/menu#${cat.id}`}
                className="group relative bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-orange-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Real photo */}
                <div className={`relative aspect-[4/3] overflow-hidden bg-gradient-to-br ${meta.color}`}>
                  <img
                    src={meta.image}
                    alt={cat.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fb = target.nextElementSibling as HTMLElement | null;
                      if (fb) fb.style.display = 'flex';
                    }}
                  />
                  {/* Emoji fallback */}
                  <div className="absolute inset-0 hidden items-center justify-center text-5xl bg-gradient-to-br from-white/30 to-transparent">
                    {cat.icon}
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Item count pill */}
                  <span className="absolute top-2 right-2 bg-white/95 backdrop-blur text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    {cat.items.length} items
                  </span>
                  {/* Emoji badge */}
                  <span className="absolute top-2 left-2 bg-white/95 backdrop-blur w-7 h-7 flex items-center justify-center rounded-full shadow text-base">
                    {cat.icon}
                  </span>
                  {/* Title overlaid on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-2.5 text-white">
                    <div className="font-extrabold text-sm sm:text-base leading-tight drop-shadow-lg">{cat.name}</div>
                  </div>
                </div>
                {/* Bottom info bar */}
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="text-[11px] text-stone-500">View menu</span>
                  <span className="text-orange-600 text-sm font-bold group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Cafe Gallery */}
      <section className="bg-gradient-to-b from-stone-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold tracking-wider">📸 OUR CAFE</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-3">A glimpse of Cloudy Food</h2>
            <p className="text-stone-500 text-sm mt-1">Step inside our warm, welcoming space in Jhalwa</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden aspect-square md:aspect-auto shadow-md hover:shadow-2xl transition-shadow">
              <img src="/images/cafe.jpg" alt="Cloudy Food Cafe Exterior at night" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-extrabold text-xl md:text-2xl drop-shadow-lg">Cloudy Food Restaurant & Cafe</h3>
                <p className="text-xs md:text-sm opacity-90 drop-shadow-lg">IIITA Road, Jhalwa, Prayagraj</p>
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-shadow">
              <img src="/images/cat-thali.png" alt="Special Thali" className="w-full h-full object-cover bg-amber-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold">Special Thali</div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-shadow">
              <img src="/images/cat-north-indian.png" alt="Paneer Butter Masala" className="w-full h-full object-cover bg-orange-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold">Paneer Butter Masala</div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-shadow">
              <img src="/images/cat-burger.png" alt="Burgers & Snacks" className="w-full h-full object-cover bg-red-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold">Tandoori Tikka</div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-shadow">
              <img src="/images/cat-biryani.png" alt="Veg Biryani" className="w-full h-full object-cover bg-yellow-50 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold">Veg Biryani</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-stone-600">
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>🔥</span> Fireplace</span>
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>👨‍👩‍👧</span> Kids' Menu</span>
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>🍽️</span> All You Can Eat</span>
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>❄️</span> AC Dining</span>
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>🅿️</span> Parking</span>
            <span className="inline-flex items-center gap-1 bg-white border border-stone-200 px-3 py-1.5 rounded-full"><span>📶</span> Free Wi-Fi</span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">What our customers say</h2>
          <div className="flex items-center justify-center gap-2 mb-8 text-sm text-stone-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
              ))}
            </div>
            <span>4.3 average from 2,300+ reviews</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center font-bold text-sm">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-sm">{r.name}</div>
                      <div className="text-[10px] text-stone-500">{r.source}</div>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-500 fill-amber-500" size={12} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-stone-700">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Visit our Restaurant 🏠</h2>
            <p className="text-stone-300 mb-6">Cosy ambience with fireplace, kids' menu, and all-you-can-eat options. Walk in for the full Cloudy Food experience.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPin className="text-orange-400 shrink-0 mt-0.5" size={20} /><span className="text-sm">CQJ8+5Q5, IIITA Rd, Devprayagam Colony, Jhalwa, Prayagraj 211015</span></div>
              <div className="flex items-center gap-3"><Phone className="text-orange-400 shrink-0" size={20} /><span className="text-sm">097932 22121</span></div>
              <div className="flex items-center gap-3"><Clock className="text-orange-400 shrink-0" size={20} /><span className="text-sm">Open today till 11:00 PM</span></div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="tel:09793222121" className="bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-xl font-bold text-sm">Call Now</a>
              <Link to="/contact" className="border border-stone-700 hover:border-orange-500 px-5 py-2.5 rounded-xl font-bold text-sm">Get Directions</Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden h-64 md:h-80 border-4 border-stone-700 shadow-2xl">
            <img src="/images/cafe.jpg" alt="Cloudy Food Restaurant & Cafe" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
