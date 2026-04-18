import { menuData, categoryImageMap } from '../data';

const SLIDER_CATS = menuData.slice(0, 12).map((cat) => ({
  id: cat.id,
  name: cat.name,
  icon: cat.icon,
  image: categoryImageMap[cat.id]?.image ?? '',
  color: categoryImageMap[cat.id]?.color ?? 'from-orange-400 to-red-500',
  count: cat.items.length,
}));

// Duplicate for seamless infinite loop
const ITEMS = [...SLIDER_CATS, ...SLIDER_CATS];

interface Props {
  onCategoryClick?: (id: string) => void;
}

export default function Slider3D({ onCategoryClick }: Props) {
  return (
    <div className="my-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3 px-1">
        Browse Categories
      </p>

      {/* 3D track  */}
      <div className="slider-3d-wrapper py-4">
        <div className="slider-3d-track">
          {ITEMS.map((cat, i) => (
            <a
              key={`${cat.id}-${i}`}
              href={`#cat-${cat.id}`}
              onClick={() => onCategoryClick?.(cat.id)}
              className="slider-3d-card group"
              aria-label={cat.name}
            >
              {/* Card shell */}
              <div className="relative w-32 h-40 rounded-2xl overflow-hidden shadow-md border border-white/20">
                {/* Background image */}
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    draggable={false}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color}`} />
                )}

                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Shine shimmer on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <span className="text-2xl mb-1 drop-shadow">{cat.icon}</span>
                  <p className="text-white font-bold text-xs leading-tight drop-shadow">
                    {cat.name}
                  </p>
                  <p className="text-white/70 text-[10px] mt-0.5">{cat.count} items</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
