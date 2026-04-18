import { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Truck, Check, Clock, MapPin } from 'lucide-react';
import { useCart } from '../CartContext';

type Props = { open: boolean; onClose: () => void };

type Step = 'cart' | 'checkout' | 'tracking';

export default function CartDrawer({ open, onClose }: Props) {
  const { cart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<Step>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi'>('cod');
  const [trackingStage, setTrackingStage] = useState(0);

  const deliveryFee = totalPrice > 0 && totalPrice < 199 ? 30 : 0;
  const taxes = Math.round(totalPrice * 0.05);
  const grandTotal = totalPrice + deliveryFee + taxes;

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      if (step === 'tracking') {
        clearCart();
        setStep('cart');
        setTrackingStage(0);
      }
    }, 300);
  };

  const handlePlaceOrder = () => {
    setStep('tracking');
    setTrackingStage(0);
    const stages = [1, 2, 3];
    stages.forEach((s, i) =>
      setTimeout(() => setTrackingStage(s), (i + 1) * 1500)
    );
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="absolute right-0 top-0 h-full w-full sm:max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-4 border-b border-stone-200 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <h2 className="text-lg font-extrabold flex items-center gap-2">
            {step === 'cart' && <><ShoppingBag size={20} /> Your Cart ({totalItems})</>}
            {step === 'checkout' && <>Checkout</>}
            {step === 'tracking' && <>Order Tracking</>}
          </h2>
          <button onClick={handleClose} className="p-1.5 hover:bg-white/20 rounded-lg">
            <X size={20} />
          </button>
        </div>

        {step === 'cart' && (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="text-6xl mb-3">🛒</div>
                  <h3 className="font-bold text-stone-700">Your cart is empty</h3>
                  <p className="text-sm text-stone-500 mt-1">Add delicious items from our menu</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={`${item.id}-${item.variant ?? ''}`}
                      className="flex items-start gap-3 bg-stone-50 rounded-xl p-3"
                    >
                      <span className="inline-flex items-center justify-center w-4 h-4 border-2 border-green-600 mt-1">
                        <span className="w-2 h-2 rounded-full bg-green-600" />
                      </span>
                      <div className="flex-1">
                        <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
                        {item.variant && (
                          <p className="text-xs text-stone-500">{item.variant}</p>
                        )}
                        <p className="text-orange-600 font-bold text-sm mt-0.5">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.variant)}
                          className="px-2 py-1 hover:bg-stone-100"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.variant)}
                          className="px-2 py-1 hover:bg-stone-100"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="bg-stone-50 rounded-xl p-4 mt-4 space-y-2 text-sm">
                    <div className="flex justify-between"><span>Subtotal</span><span>₹{totalPrice}</span></div>
                    <div className="flex justify-between"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span></div>
                    <div className="flex justify-between"><span>Taxes (5%)</span><span>₹{taxes}</span></div>
                    <div className="flex justify-between font-extrabold pt-2 border-t border-stone-200"><span>Total</span><span>₹{grandTotal}</span></div>
                  </div>
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-4 border-t border-stone-200">
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              </div>
            )}
          </>
        )}

        {step === 'checkout' && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div>
                <h3 className="font-bold mb-2">Delivery Address</h3>
                <textarea
                  className="w-full border border-stone-300 rounded-lg p-3 text-sm"
                  rows={3}
                  defaultValue="IIITA Campus, Jhalwa, Prayagraj — 211015"
                />
              </div>
              <div>
                <h3 className="font-bold mb-2">Phone Number</h3>
                <input
                  type="tel"
                  defaultValue="+91 98765 43210"
                  className="w-full border border-stone-300 rounded-lg p-3 text-sm"
                />
              </div>
              <div>
                <h3 className="font-bold mb-2">Payment Method</h3>
                <div className="space-y-2">
                  {([
                    { id: 'cod', label: '💵 Cash on Delivery', desc: 'Pay when you receive' },
                    { id: 'upi', label: '📱 UPI / Online', desc: 'GPay, PhonePe, Paytm' },
                  ] as const).map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setPaymentMethod(m.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg border-2 transition-all text-left ${
                        paymentMethod === m.id ? 'border-orange-500 bg-orange-50' : 'border-stone-200'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm">{m.label}</div>
                        <div className="text-xs text-stone-500">{m.desc}</div>
                      </div>
                      <div className={`w-4 h-4 rounded-full border-2 ${paymentMethod === m.id ? 'border-orange-500 bg-orange-500' : 'border-stone-300'}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 text-sm space-y-2">
                <div className="flex justify-between"><span>Items ({totalItems})</span><span>₹{totalPrice}</span></div>
                <div className="flex justify-between"><span>Delivery</span><span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span></div>
                <div className="flex justify-between"><span>Taxes</span><span>₹{taxes}</span></div>
                <div className="flex justify-between font-extrabold pt-2 border-t"><span>Pay</span><span>₹{grandTotal}</span></div>
              </div>
            </div>
            <div className="p-4 border-t border-stone-200 flex gap-2">
              <button onClick={() => setStep('cart')} className="flex-1 border border-stone-300 py-3 rounded-xl font-bold">Back</button>
              <button
                onClick={handlePlaceOrder}
                className="flex-[2] bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-bold"
              >
                Place Order • ₹{grandTotal}
              </button>
            </div>
          </>
        )}

        {step === 'tracking' && (
          <div className="flex-1 overflow-y-auto p-6">
            <div className="text-center mb-6">
              <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircle2 className="text-emerald-600" size={40} />
              </div>
              <h2 className="font-extrabold text-xl">Order Placed!</h2>
              <p className="text-sm text-stone-500">Order ID: #CF{Math.floor(Math.random() * 90000) + 10000}</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: CheckCircle2, label: 'Order Confirmed', desc: 'We received your order' },
                { icon: Clock, label: 'Preparing Your Food', desc: 'Chef is working magic' },
                { icon: Truck, label: 'Out for Delivery', desc: 'On the way to you' },
                { icon: Check, label: 'Delivered', desc: 'Enjoy your meal!' },
              ].map((s, i) => {
                const active = i <= trackingStage;
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${active ? 'bg-emerald-500 text-white' : 'bg-stone-200 text-stone-400'}`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className={`font-bold text-sm ${active ? 'text-stone-900' : 'text-stone-400'}`}>{s.label}</div>
                      <div className="text-xs text-stone-500">{s.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-orange-50 rounded-xl p-4 mt-6 flex gap-3 items-start">
              <MapPin className="text-orange-600 shrink-0" size={20} />
              <div>
                <p className="text-sm font-bold">Estimated delivery: 35-45 min</p>
                <p className="text-xs text-stone-600">Delivered by Cloudy Food rider</p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full mt-6 bg-stone-900 text-white py-3 rounded-xl font-bold"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
