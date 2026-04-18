/** Shimmer skeleton card — shown while cards are loading */
export default function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden flex flex-col">
      {/* Image placeholder */}
      <div className="skeleton h-44 w-full" />

      {/* Body */}
      <div className="p-4 flex flex-col gap-3">
        {/* Title */}
        <div className="skeleton h-4 w-3/4 rounded-md" />
        {/* Description line 1 */}
        <div className="skeleton h-3 w-full rounded-md" />
        {/* Description line 2 */}
        <div className="skeleton h-3 w-2/3 rounded-md" />

        {/* Price + button row */}
        <div className="flex items-center justify-between mt-2">
          <div className="skeleton h-6 w-16 rounded-md" />
          <div className="skeleton h-9 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
