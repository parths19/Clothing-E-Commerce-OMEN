import React, { useState } from 'react';

const Settings = () => {
  const [notifs, setNotifs] = useState({ email: true, sms: false, drops: true });

  const Toggle = ({ active, onClick, label }) => (
    <div className="flex justify-between items-center border-4 border-black p-4 bg-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:drop-shadow-none transition-all cursor-pointer" onClick={onClick}>
      <span className="font-black uppercase italic text-lg">{label}</span>
      <div className={`w-14 h-8 border-4 border-black p-1 transition-colors ${active ? 'bg-pink-500' : 'bg-gray-300'}`}>
        <div className={`w-4 h-full bg-black border-2 border-white transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 selection:bg-yellow-300">
      
      {/* HEADER SECTION */}
      <div className="relative border-b-[6px] border-black pb-4">
        <h2 className="text-6xl font-black uppercase italic tracking-tighter drop-shadow-[4px_4px_0px_rgba(236,72,153,1)]">
          SYSTEM SETTINGS
        </h2>
        
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: ACCOUNT CONFIG */}
        <div className="lg:col-span-7 space-y-8">
          <section className="border-4 border-black p-6 bg-white relative">
            <div className="absolute -top-4 left-4 bg-black text-white px-2 py-1 text-[10px] font-black uppercase">
              Security Matrix
            </div>
            <div className="space-y-6">
              <div className="group">
                <label className="block text-xs font-black uppercase mb-1">Passcode Override</label>
                <div className="flex gap-2">
                  <input type="password" value="********" readOnly className="flex-1 border-4 border-black p-3 bg-gray-100 font-black outline-none" />
                  <button className="bg-black text-white px-4 border-y-4 border-r-4 border-black uppercase font-black text-xs hover:bg-pink-500">Reset</button>
                </div>
              </div>
              
              <div className="p-4 bg-cyan-100 border-4 border-black border-dashed">
                <p className="text-sm font-black uppercase leading-tight">
                  Two-Factor Authentication is <span className="text-pink-600 underline">OFFLINE</span>.
                </p>
                <button className="mt-2 text-[10px] font-black uppercase underline hover:text-pink-500">Secure Account Now →</button>
              </div>
            </div>
          </section>

          {/* NOTIFICATION SQUAD */}
          <section className="space-y-4">
            <h3 className="text-2xl font-black uppercase italic underline decoration-pink-500 decoration-4 underline-offset-4">
              Alert Protocols
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Toggle label="Email Drops" active={notifs.email} onClick={() => setNotifs({...notifs, email: !notifs.email})} />
              <Toggle label="SMS Intel" active={notifs.sms} onClick={() => setNotifs({...notifs, sms: !notifs.sms})} />
              <Toggle label="App Pings" active={notifs.drops} onClick={() => setNotifs({...notifs, drops: !notifs.drops})} />
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: PREFERENCES (THE BLUEPRINT) */}
        <div className="lg:col-span-5">
          <div className="border-[6px] border-black bg-white p-6 drop-shadow-[10px_10px_0px_rgba(0,0,0,1)] relative h-full">
            <h3 className="text-3xl font-black uppercase mb-6 italic">Interface Lab</h3>
            
            <div className="space-y-6">
              <div>
                <span className="block text-xs font-black uppercase mb-3 text-gray-500 italic">// Visual Theme</span>
                <div className="flex gap-2">
                  <button className="flex-1 py-4 border-4 border-black bg-black text-white font-black uppercase italic -rotate-1">Dark Mode</button>
                  <button className="flex-1 py-4 border-4 border-black bg-white text-black font-black uppercase italic rotate-1">Light Mode</button>
                </div>
              </div>

              <div className="pt-2 border-t-4 border-black border-dotted">
              </div>

              <div className="mt-10 p-4 border-4 border-black bg-pink-100 italic font-black text-center text-sm">
                "CHOOSE YOUR VIBE WISELY, RECRUIT."
              </div>
            </div>

            {/* DESTRUCTIVE ACTION */}
            <div className="mt-12">
              <button className="w-full py-2 border-2 border-black text-[10px] font-black uppercase text-red-600 hover:bg-red-600 hover:text-white transition-colors">
                Self-Destruct (Delete Account)
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;