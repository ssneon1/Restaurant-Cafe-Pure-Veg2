import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Leaf, Flame, Star } from 'lucide-react';
import { menuData } from '../data';
import MenuItemCard from '../components/MenuItemCard';
import SkeletonCard from '../components/SkeletonCard';
import { useReveal } from '../utils/useReveal';

type FilterType = 'all' | 'bestseller' | 'popular' | 'spicy';

// ── Section that reveals itself when scrolled into view ──────────────
function RevealSection({
  cat,
}: {
  cat: (typeof menuData)[number] & { items: (typeof menuData)[number]['items'] };
}) {
  const ref = useReveal<HTMLElement>(0.05);

  return (
    <section ref={ref} id={`cat-${cat.id}`} className="reveal scroll-mt-36">
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-3xl w-12 h-12 rounded-2xl flex items-center justify-center shadow-sm shrink-0"
          style={{ background: 'linear-gradient(135deg,#fff7ed,#fde68a)' }}
        >
          {cat.icon}
        </span>
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">{cat.name}</h2>
          <p className="text-sm text-stone-500">{cat.description}</p>
        </div>
        <span className="ml-auto text-xs font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full shrink-0">
          {cat.items.length} items
        </span>
      </div>

      {/* Items grid */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cat.items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} revealDelay={i * 40} />
        ))}
      </div>
    </section>
  );
}


// ── Page-top loading bar ─────────────────────────────────────────────
function PageLoadBar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return show ? <div className="page-load-bar" /> : null;
}

// ── Main Menu Page ───────────────────────────────────────────────────
export default function Menu() {
  const location = useLocation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [activeCat, setActiveCat] = useState(menuData[0].id);
  const [loading, setLoading] = useState(true);

  // Simulate first-paint skeleton (500ms)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, []);

  // Scroll to category on hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setActiveCat(id);
      setTimeout(() => {
        const el = document.getElementById(`cat-${id}`);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
    }
  }, [location.hash]);

  // Track active section on scroll
  useEffect(() => {
    const handler = () => {
      for (const cat of menuData) {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveCat(cat.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filteredCategories = useMemo(() => {
    return menuData
      .map((cat) => {
        const items = cat.items.filter((it) => {
          const matchesSearch =
            !search ||
            it.name.toLowerCase().includes(search.toLowerCase()) ||
            it.description?.toLowerCase().includes(search.toLowerCase());
          const matchesFilter =
            filter === 'all' ||
            (filter === 'bestseller' && it.bestseller) ||
            (filter === 'popular' && (it.popular || it.bestseller)) ||
            (filter === 'spicy' && it.spicy);
          return matchesSearch && matchesFilter;
        });
        return { ...cat, items };
      })
      .filter((c) => c.items.length > 0);
  }, [search, filter]);

  const headerRef = useReveal<HTMLDivElement>(0.1);
  const searchRef = useReveal<HTMLDivElement>(0.1);

  return (
    <>
      <PageLoadBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Page Header ── */}
        <div ref={headerRef} className="reveal mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900">Our Menu</h1>
          <p className="text-stone-500 mt-1 text-sm">
            {menuData.reduce((a, c) => a + c.items.length, 0)} delicious items across{' '}
            {menuData.length} categories •{' '}
            <span className="text-green-600 font-semibold">100% pure veg</span>
          </p>
        </div>

        {/* ── Search & Filters ── */}
        <div
          ref={searchRef}
          className="reveal sticky top-16 z-20 bg-stone-50/95 backdrop-blur-md py-3 -mx-4 px-4 mb-6 border-b border-stone-200"
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={18} />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search dishes..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 focus:outline-none text-sm transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {(
                [
                  { id: 'all', label: 'All', icon: Filter },
                  { id: 'bestseller', label: 'Bestsellers', icon: Star },
                  { id: 'popular', label: 'Popular', icon: Flame },
                  { id: 'spicy', label: 'Spicy', icon: Flame },
                ] as const
              ).map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all duration-200 ${
                    filter === f.id
                      ? 'bg-orange-600 text-white border-orange-600 shadow-md scale-105'
                      : 'bg-white text-stone-700 border-stone-300 hover:border-orange-400 hover:text-orange-600'
                  }`}
                >
                  <f.icon size={13} /> {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] gap-6">

          {/* ── Sidebar (desktop) ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-36 bg-white rounded-2xl border border-stone-200 shadow-sm p-2 max-h-[70vh] overflow-y-auto">
              {menuData.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeCat === cat.id
                      ? 'bg-orange-100 text-orange-700 translate-x-1'
                      : 'text-stone-700 hover:bg-stone-100 hover:translate-x-1'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span> {cat.name}
                  <span className="ml-auto text-[10px] text-stone-400">{cat.items.length}</span>
                </a>
              ))}
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="space-y-10">

            {/* Mobile category pills */}
            <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-2 flex gap-2">
              {menuData.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition-all"
                >
                  <span>{cat.icon}</span> {cat.name}
                </a>
              ))}
            </div>

            {/* ── Skeleton loader (first 500ms) ── */}
            {loading ? (
              <div className="space-y-10">
                {[1, 2].map((s) => (
                  <div key={s}>
                    {/* skeleton section header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="skeleton w-12 h-12 rounded-2xl" />
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="skeleton h-5 w-40 rounded-md" />
                        <div className="skeleton h-3 w-56 rounded-md" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <SkeletonCard key={i} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCategories.length === 0 ? (
              <div className="text-center py-20 reveal visible">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-stone-500 text-lg font-semibold">No dishes found.</p>
                <p className="text-stone-400 text-sm mt-1">Try a different search or filter.</p>
              </div>
            ) : (
              filteredCategories.map((cat, index) => (
                <RevealSection key={cat.id} cat={cat} index={index} />
              ))
            )}

            {/* ── Pure Veg notice ── */}
            {!loading && (
              <div className="reveal mt-4 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-start gap-3">
                <Leaf className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-emerald-900">100% Pure Vegetarian Kitchen</h3>
                  <p className="text-sm text-emerald-700 mt-0.5">
                    All dishes prepared in a strictly veg kitchen. No onion / no garlic options available on request.
                    Contact: <b>097932 22121</b>.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
