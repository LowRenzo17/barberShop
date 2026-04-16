import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/ui/Button';

// Mock Data
const SERVICES = [
  { id: 'cut', name: 'Signature Fade', duration: '45 min', price: 'Ksh 3,500' },
  { id: 'beard', name: 'Beard Trim & Sculpt', duration: '30 min', price: 'Ksh 2,500' },
  { id: 'combo', name: 'The Nairobi Executive', duration: '75 min', price: 'Ksh 5,500' },
];

const BARBERS = [
  { id: 'njuguna', name: 'Njuguna M.', title: 'Master Barber' },
  { id: 'kamau', name: 'Kamau R.', title: 'Senior Barber' },
  { id: 'odhiambo', name: 'Odhiambo K.', title: 'Barber' },
  { id: 'any', name: 'Any Available', title: 'First Open Slot' },
];

const TIME_SLOTS = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM',
  '11:30 AM', '12:00 PM', '01:00 PM', '01:30 PM', '02:00 PM',
  '03:00 PM', '04:00 PM', '05:00 PM', '05:30 PM'
];

// Zod schema for step 4
const customerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
});

export function Booking() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    serviceId: '',
    barberId: '',
    date: '',
    time: ''
  });
  const [reference, setReference] = useState('');

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(customerSchema)
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 5));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSelection = (key, value) => {
    setBookingData(prev => ({ ...prev, [key]: value }));
  };

  const onSubmit = (data) => {
    const ref = `NB-${Math.floor(1000 + Math.random() * 9000)}`;
    localStorage.setItem('lastBooking', JSON.stringify({ ...bookingData, ...data, reference: ref }));
    setReference(ref);
    setStep(5);
  };

  const formAnimation = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="pt-32 pb-24 min-h-[90vh] bg-[#131313]">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 border-b-2 border-[#1c1b1b] pb-6">
          <h1 className="text-4xl font-epilogue font-bold text-[#e5e2e1] uppercase tracking-tighter mb-2">
            INITIALIZE FORGE
          </h1>
          <div className="flex gap-2 items-center">
            {[1,2,3,4].map(i => (
              <React.Fragment key={i}>
                <div className={`w-8 h-1 rounded-sm ${i <= step && step !== 5 ? 'bg-[#e9c349]' : 'bg-[#353534]'}`} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div key="step1" {...formAnimation}>
              <h2 className="text-xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-6">Select Service</h2>
              <div className="grid grid-cols-1 gap-4">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => handleSelection('serviceId', s.id)}
                    className={`flex items-center justify-between p-6 text-left border ${bookingData.serviceId === s.id ? 'border-[#e9c349] bg-[#e9c349]/5' : 'border-[#353534] bg-[#1c1b1b]'} hover:border-[#e9c349] transition-colors rounded-sm`}
                  >
                    <div>
                      <h3 className="font-epilogue font-bold text-[#e5e2e1] uppercase text-lg">{s.name}</h3>
                      <span className="text-[#e5e2e1]/50 text-sm font-bold tracking-widest uppercase">{s.duration}</span>
                    </div>
                    <div className="text-[#e9c349] font-bold text-xl">{s.price}</div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-end">
                <Button onClick={nextStep} disabled={!bookingData.serviceId}>CONTINUE SCANNING</Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" {...formAnimation}>
              <h2 className="text-xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-6">Select Blacksmith</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {BARBERS.map(b => (
                  <button
                    key={b.id}
                    onClick={() => handleSelection('barberId', b.id)}
                    className={`p-6 text-left border ${bookingData.barberId === b.id ? 'border-[#e9c349] bg-[#e9c349]/5' : 'border-[#353534] bg-[#1c1b1b]'} hover:border-[#e9c349] transition-colors rounded-sm`}
                  >
                    <h3 className="font-epilogue font-bold text-[#e5e2e1] uppercase text-lg mb-1">{b.name}</h3>
                    <span className="text-[#e5e2e1]/50 text-sm font-bold tracking-widest uppercase">{b.title}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>BACK</Button>
                <Button onClick={nextStep} disabled={!bookingData.barberId}>CONFIRM SMITH</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" {...formAnimation}>
              <h2 className="text-xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-6">Select Operation Time</h2>
              <div className="mb-6">
                <label className="text-sm font-bold tracking-widest uppercase text-[#e5e2e1]/50 block mb-2">DATE</label>
                <input 
                  type="date" 
                  className="w-full bg-[#1c1b1b] border-b border-[#353534] text-[#e5e2e1] px-4 py-3 rounded-t-sm focus:outline-none focus:border-[#ffb5a0] transition-colors"
                  onChange={e => handleSelection('date', e.target.value)}
                  value={bookingData.date}
                />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {TIME_SLOTS.map(t => (
                  <button
                    key={t}
                    onClick={() => handleSelection('time', t)}
                    className={`py-3 text-center border ${bookingData.time === t ? 'border-[#ffb5a0] bg-[#ffb5a0]/10 text-[#ffb5a0]' : 'border-[#353534] bg-[#1c1b1b] text-[#e5e2e1]/70'} hover:border-[#ffb5a0] transition-colors rounded-sm text-sm font-bold tracking-wider`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-between">
                <Button variant="outline" onClick={prevStep}>BACK</Button>
                <Button onClick={nextStep} disabled={!bookingData.date || !bookingData.time}>LOCK IN TIME</Button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" {...formAnimation}>
              <h2 className="text-xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-6">Patron Details</h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      {...register("firstName")}
                      placeholder="FIRST NAME"
                      className="w-full bg-transparent border-b border-[#353534] text-[#e5e2e1] px-0 py-3 focus:outline-none focus:border-[#ffb5a0] transition-colors placeholder:text-[#e5e2e1]/30 font-bold tracking-widest uppercase text-sm"
                    />
                    {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName.message}</span>}
                  </div>
                  <div>
                    <input 
                      {...register("lastName")}
                      placeholder="LAST NAME"
                      className="w-full bg-transparent border-b border-[#353534] text-[#e5e2e1] px-0 py-3 focus:outline-none focus:border-[#ffb5a0] transition-colors placeholder:text-[#e5e2e1]/30 font-bold tracking-widest uppercase text-sm"
                    />
                    {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName.message}</span>}
                  </div>
                </div>
                <div>
                  <input 
                    {...register("email")}
                    placeholder="EMAIL ADDRESS"
                    type="email"
                    className="w-full bg-transparent border-b border-[#353534] text-[#e5e2e1] px-0 py-3 focus:outline-none focus:border-[#ffb5a0] transition-colors placeholder:text-[#e5e2e1]/30 font-bold tracking-widest uppercase text-sm"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email.message}</span>}
                </div>
                <div>
                  <input 
                    {...register("phone")}
                    placeholder="PHONE NUMBER"
                    type="tel"
                    className="w-full bg-transparent border-b border-[#353534] text-[#e5e2e1] px-0 py-3 focus:outline-none focus:border-[#ffb5a0] transition-colors placeholder:text-[#e5e2e1]/30 font-bold tracking-widest uppercase text-sm"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                </div>
                
                <div className="pt-8 flex justify-between">
                  <Button type="button" variant="outline" onClick={prevStep}>BACK</Button>
                  <Button type="submit">COMMIT TO FORGE</Button>
                </div>
              </form>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" {...formAnimation} className="text-center py-12">
              <div className="w-16 h-16 bg-[#e9c349]/10 border-2 border-[#e9c349] p-4 mx-auto mb-6 flex items-center justify-center transform rotate-45">
                 <div className="w-4 h-4 bg-[#e9c349] -rotate-45" />
              </div>
              <h2 className="text-3xl font-epilogue font-bold text-[#e5e2e1] uppercase mb-4">
                FORGE SECURED
              </h2>
              <p className="text-[#e5e2e1]/70 mb-8 max-w-sm mx-auto">
                Your spot has been claimed. Be at the shop 5 minutes before your time. Bring your raw grit.
              </p>
              <div className="inline-block border border-[#353534] p-6 mb-8 bg-[#1c1b1b]">
                <span className="text-[#e5e2e1]/50 text-xs font-bold tracking-widest uppercase block mb-2">BOOKING REFERENCE</span>
                <span className="text-2xl font-epilogue font-bold text-[#e9c349] tracking-widest">{reference}</span>
              </div>
              <div>
                <Button onClick={() => window.location.href = '/'} variant="secondary">RETURN TO MAIN</Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
