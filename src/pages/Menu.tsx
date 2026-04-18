import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Leaf, Flame, Star } from 'lucide-react';
import { menuData } from '../data';
import MenuItemCard from '../components/MenuItemCard';
import SkeletonCard from '../components/SkeletonCard';
import Slider3D from '../components/Slider3D';
import { useReveal } from '../utils/useReveal';

type FilterType = 'all' | 'bestseller' | 'popular' | 'spicy';

/* ── useReveal variant for the card grid ─────────────────────────── */
function useCardGrid() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── Individual category section ─────────────────────────────────── */
function RevealSection({
  cat,
}: {
  cat: (typeof menuData)[number] & { items: (typeof menuData)[number]['items'] };
}) {
  const sectionRef = useReveal<HTMLElement>(0.05);
  const headerRef  = useRef<HTMLDivElement>(null);
  const gridRef    = useCardGrid();

  // Trigger reveal-left on header
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id={`cat-${cat.id}`} className="reveal scroll-mt-36">

      {/* Category header — swoops in from left */}
      <div ref={headerRef} className="reveal-left flex items-center gap-3 mb-5">
        <span
          className="text-3xl w-12 h-12 rounded-2xl flex items-center justify-center shadow-md shrink-0 float-badge"
          style={{ background: 'linear-gradient(135deg,#fff7ed,#fde68a)' }}
        >
          {cat.icon}
        </span>
        <div>
          <h2 className="text-2xl font-extrabold text-stone-900">{cat.name}</h2>
          <p className="text-sm text-stone-500">{cat.description}</p>
        </div>
        <span className="ml-auto text-xs font-bold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full shrink-0">
          {cat.items.length} items
        </span>
      </div>

      {/* Card grid — 3D staggered entrance */}
      <div ref={gridRef} className="card-grid grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {cat.items.map((item, i) => (
          <MenuItemCard key={item.id} item={item} revealDelay={i * 50} />
        ))}
      </div>
    </section>
  );
}

/* ── Page-top loading bar ────────────────────────────────────────── */
function PageLoadBar() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1000);
    return () => clearTimeout(t);
  }, []);
  return show ? <div className="page-load-bar" /> : null;
}

/* ── Main Menu Page ──────────────────────────────────────────────── */
export default function Menu() {
  const location  = useLocation();
  const [search, setSearch]     = useState('');
  const [filter, setFilter]     = useState<FilterType>('all');
  const [activeCat, setActiveCat] = useState(menuData[0].id);
  const [loading, setLoading]   = useState(true);

  // First-paint skeleton delay
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // Scroll to hash-linked category
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setActiveCat(id);
      setTimeout(() => {
        document.getElementById(`cat-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 700);
    }
  }, [location.hash]);

  // Highlight active sidebar item as user scrolls
  useEffect(() => {
    const handler = () => {
      for (const cat of menuData) {
        const el = document.getElementById(`cat-${cat.id}`);
        if (el) {
          const { top } = el.getBoundingClientRect();
          if (top >= 0 && top < window.innerHeight * 0.45) { setActiveCat(cat.id); break; }
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const filteredCategories = useMemo(() =>
    menuData
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => {
          const q = search.toLowerCase();
          const matchSearch = !q || it.name.toLowerCase().includes(q) || it.description?.toLowerCase().includes(q);
          const matchFilter =
            filter === 'all'        ? true :
            filter === 'bestseller' ? !!it.bestseller :
            filter === 'popular'    ? !!(it.popular || it.bestseller) :
            filter === 'spicy'      ? !!it.spicy : true;
          return matchSearch && matchFilter;
        }),
      }))
      .filter((c) => c.items.length > 0),
  [search, filter]);

  const headerRef = useReveal<HTMLDivElement>(0.1);

  return (
    <>
      <PageLoadBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* ── Gradient Page Header ── */}
        <div ref={headerRef} className="reveal mb-2">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            <span className="gradient-text">Our Menu</span>
          </h1>
          <p className="text-stone-500 mt-1 text-sm">
            {menuData.reduce((a, c) => a + c.items.length, 0)} delicious items across{' '}
            {menuData.length} categories •{' '}
            <span className="text-green-600 font-semibold">100% pure veg</span>
          </p>
        </div>

        {/* ── 3D Category Slider ── */}
        {!loading && (
          <Slider3D onCategoryClick={(id) => setActiveCat(id)} />
        )}

        {/* ── Sticky Search & Filters ── */}
        <div className="sticky top-16 z-20 bg-stone-50/95 backdrop-blur-md py-3 -mx-4 px-4 mb-6 border-b border-stone-200">
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
              {(['all', 'bestseller', 'popular', 'spicy'] as const).map((f, i) => {
                const labels = ['All', 'Bestsellers', 'Popular', 'Spicy'];
                const icons  = [Filter, Star, Flame, Flame];
                const Icon   = icons[i];
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap border transition-all duration-200 ${
                      filter === f
                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-transparent shadow-lg scale-105'
                        : 'bg-white text-stone-700 border-stone-300 hover:border-orange-400 hover:text-orange-600 hover:scale-105'
                    }`}
                  >
                    <Icon size={13} /> {labels[i]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Layout grid ── */}
        <div className="grid lg:grid-cols-[220px_1fr] gap-6">

          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-36 bg-white rounded-2xl border border-stone-200 shadow-sm p-2 max-h-[70vh] overflow-y-auto">
              {menuData.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  onClick={() => setActiveCat(cat.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeCat === cat.id
                      ? 'bg-orange-100 text-orange-700 translate-x-1 shadow-sm'
                      : 'text-stone-700 hover:bg-stone-100 hover:translate-x-1'
                  }`}
                >
                  <span className="text-base">{cat.icon}</span> {cat.name}
                  <span className="ml-auto text-[10px] text-stone-400">{cat.items.length}</span>
                </a>
              ))}
            </div>
          </aside>

          {/* Main content */}
          <div className="space-y-10">

            {/* Mobile pills */}
            <div className="lg:hidden -mx-4 px-4 overflow-x-auto pb-2 flex gap-2">
              {menuData.map((cat) => (
                <a
                  key={cat.id}
                  href={`#cat-${cat.id}`}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold bg-white border border-stone-200 hover:border-orange-400 hover:text-orange-600 transition-all hover:scale-105"
                >
                  <span>{cat.icon}</span> {cat.name}
                </a>
              ))}
            </div>

            {/* Skeleton */}
            {loading ? (
              <div className="space-y-10">
                {[1, 2].map((s) => (
                  <div key={s}>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="skeleton w-12 h-12 rounded-2xl" />
                      <div className="flex flex-col gap-2 flex-1">
                        <div className="skeleton h-5 w-40 rounded-md" />
                        <div className="skeleton h-3 w-56 rounded-md" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredCategories.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-6xl mb-4 float-badge">🔍</div>
                <p className="text-stone-600 text-lg font-bold">No dishes found.</p>
                <p className="text-stone-400 text-sm mt-1">Try a different search or filter.</p>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <RevealSection key={cat.id} cat={cat} />
              ))
            )}

            {/* Pure Veg notice */}
            {!loading && (
              <div className="reveal bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
                <Leaf className="text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-emerald-900">100% Pure Vegetarian Kitchen</h3>
                  <p className="text-sm text-emerald-700 mt-0.5">
                    All dishes prepared in a strictly veg kitchen. No onion / no garlic options on request.
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
