import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Get in Touch</h1>
        <p className="text-stone-500 mt-1">We'd love to hear from you. Reservations, feedback or bulk orders — drop us a message!</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { icon: MapPin, title: 'Address', value: 'CQJ8+5Q5, IIITA Rd, Devprayagam Colony, Jhalwa, Prayagraj, UP 211015', color: 'bg-orange-100 text-orange-600' },
          { icon: Phone, title: 'Phone', value: '097932 22121', color: 'bg-emerald-100 text-emerald-600' },
          { icon: Clock, title: 'Hours', value: 'Open daily • 10:00 AM – 11:00 PM', color: 'bg-amber-100 text-amber-600' },
        ].map((c, i) => (
          <div key={i} className="bg-white rounded-2xl border border-stone-200 p-6 text-center">
            <div className={`w-14 h-14 rounded-2xl ${c.color} flex items-center justify-center mx-auto mb-3`}>
              <c.icon size={28} />
            </div>
            <h3 className="font-bold mb-1">{c.title}</h3>
            <p className="text-sm text-stone-600">{c.value}</p>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden h-96 lg:h-auto">
          <iframe
            title="Cloudy Food location"
            src="https://www.google.com/maps?q=IIITA+Rd,+Devprayagam+Colony,+Jhalwa,+Prayagraj+211015&output=embed"
            className="w-full h-full min-h-[400px]"
            loading="lazy"
          />
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 p-6">
          <h2 className="text-xl font-extrabold mb-4">Send us a message</h2>
          {submitted ? (
            <div className="text-center py-12">
              <CheckCircle2 className="text-emerald-500 mx-auto mb-3" size={48} />
              <h3 className="font-bold text-lg">Thank you!</h3>
              <p className="text-stone-500 text-sm">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-3"
            >
              <div>
                <label className="text-xs font-bold text-stone-600">Name</label>
                <input required className="w-full border border-stone-300 rounded-lg p-2.5 text-sm mt-1" placeholder="Your name" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-stone-600">Email</label>
                  <input required type="email" className="w-full border border-stone-300 rounded-lg p-2.5 text-sm mt-1" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="text-xs font-bold text-stone-600">Phone</label>
                  <input className="w-full border border-stone-300 rounded-lg p-2.5 text-sm mt-1" placeholder="+91 ..." />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-stone-600">Subject</label>
                <select className="w-full border border-stone-300 rounded-lg p-2.5 text-sm mt-1 bg-white">
                  <option>General Enquiry</option>
                  <option>Reservation</option>
                  <option>Bulk / Catering Order</option>
                  <option>Feedback</option>
                  <option>Complaint</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-stone-600">Message</label>
                <textarea required rows={4} className="w-full border border-stone-300 rounded-lg p-2.5 text-sm mt-1" placeholder="How can we help?" />
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold">
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-3">
        <a href="tel:09793222121" className="bg-emerald-600 hover:bg-emerald-700 text-white p-5 rounded-2xl flex items-center gap-3">
          <Phone size={24} /> <div><div className="font-bold">Call us</div><div className="text-xs opacity-90">097932 22121</div></div>
        </a>
        <a href="https://wa.me/919793222121" target="_blank" className="bg-green-500 hover:bg-green-600 text-white p-5 rounded-2xl flex items-center gap-3">
          <Mail size={24} /> <div><div className="font-bold">WhatsApp</div><div className="text-xs opacity-90">Quick replies</div></div>
        </a>
        <a href="https://www.google.com/maps/dir/?api=1&destination=Cloudy+Food+Restaurant+Jhalwa+Prayagraj" target="_blank" className="bg-stone-900 hover:bg-stone-800 text-white p-5 rounded-2xl flex items-center gap-3">
          <MapPin size={24} /> <div><div className="font-bold">Get Directions</div><div className="text-xs opacity-90">Open in Google Maps</div></div>
        </a>
      </div>
    </div>
  );
}
