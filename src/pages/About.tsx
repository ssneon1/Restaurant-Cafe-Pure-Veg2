import { Leaf, Award, Users, Flame, Star, Heart } from 'lucide-react';

export default function About() {
  return (
    <div>
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">About <span className="text-orange-600">Cloudy Food</span></h1>
          <p className="mt-4 text-stone-600 text-lg max-w-2xl mx-auto">
            A pure vegetarian sanctuary in the heart of Jhalwa, Prayagraj — where every dish is crafted with love, hygiene & tradition.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Our Story</h2>
          <p className="text-stone-600 mb-3">
            Cloudy Food Restaurant & Cafe was started with one simple promise — serve hot, hygienic, pure-veg food at prices everyone can afford. From hostel students to whole families, we welcome everyone.
          </p>
          <p className="text-stone-600 mb-3">
            What began as a small cafe near IIIT Allahabad has grown into one of Jhalwa's most-loved family restaurants, with thousands of happy customers across Zomato, Swiggy & Justdial.
          </p>
          <p className="text-stone-600">
            We specialize in authentic North Indian cuisine, Indo-Chinese delicacies, fresh tandoor cooking and our famous <b>Thali Culture</b> — student, premium and special — all served with the warmth of home.
          </p>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img src="/images/cafe.jpg" alt="Cloudy Food restaurant" className="w-full h-80 object-cover" />
        </div>
      </section>

      <section className="bg-stone-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-10">What makes us special</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Leaf, title: '100% Pure Vegetarian', desc: 'Strict veg kitchen. No-onion no-garlic options for satvik diets.', color: 'bg-emerald-100 text-emerald-600' },
              { icon: Flame, title: 'Real Tandoor', desc: 'Genuine charcoal tandoor cooking gives our breads & tikkas an unmatched smoky aroma.', color: 'bg-red-100 text-red-600' },
              { icon: Award, title: 'Top Rated', desc: 'Consistently rated 4.2★+ across Google, Zomato, Swiggy and Justdial.', color: 'bg-amber-100 text-amber-600' },
              { icon: Users, title: 'Family Friendly', desc: 'Kids menu, fireplace seating and all-you-can-eat thali culture.', color: 'bg-blue-100 text-blue-600' },
              { icon: Heart, title: 'Made with love', desc: 'Every bite is prepared with care by chefs with 15+ years experience.', color: 'bg-pink-100 text-pink-600' },
              { icon: Star, title: 'Affordable', desc: 'Quality food starting from just ₹130 (Student Thali). Great value always.', color: 'bg-purple-100 text-purple-600' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-3`}>
                  <f.icon size={24} />
                </div>
                <h3 className="font-bold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-stone-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-center mb-10">Numbers that tell our story</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '2,000+', label: 'Happy Reviews' },
            { num: '4.3★', label: 'Average Rating' },
            { num: '100+', label: 'Dishes on Menu' },
            { num: '5+', label: 'Years Serving' },
          ].map((s, i) => (
            <div key={i} className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold">{s.num}</div>
              <div className="text-sm opacity-90 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
