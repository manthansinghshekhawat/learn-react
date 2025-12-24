import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    // Optional: Add a "Copied!" toast logic here
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    // Main Container with Animated Gradient Background
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-950 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1)_0%,rgba(8,10,15,1)_100%)] p-4">
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Glass Card */}
      <div className="relative w-full max-w-lg backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 transition-all hover:border-white/20">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 text-center mb-8 tracking-tight">
          Password Forge
        </h1>

        {/* Output Section */}
        <div className="relative flex items-center bg-black/40 rounded-2xl p-1 mb-8 group transition-all focus-within:ring-2 focus-within:ring-blue-500/50">
          <input
            type="text"
            value={password}
            className="w-full bg-transparent py-4 px-5 text-xl font-mono text-blue-100 outline-none selection:bg-blue-500/30"
            placeholder="Generating..."
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="group/btn relative overflow-hidden bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-xl transition-all active:scale-95 flex items-center gap-2 mr-1"
          >
            <span className="relative z-10">Copy</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
          </button>
        </div>

        {/* Controls Section */}
        <div className="space-y-6">
          {/* Slider */}
          <div className="space-y-3">
            <div className="flex justify-between text-sm font-medium text-slate-400">
              <label>Password Length</label>
              <span className="text-blue-400 text-lg font-mono">{length}</span>
            </div>
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
            />
          </div>

          {/* Checkboxes */}
          <div className="grid grid-cols-2 gap-4">
            <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-all select-none">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 bg-slate-800"
              />
              <span className="text-slate-300 font-medium">Numbers</span>
            </label>

            <label className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 cursor-pointer hover:bg-white/10 transition-all select-none">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-600 bg-slate-800"
              />
              <span className="text-slate-300 font-medium">Symbols</span>
            </label>
          </div>
        </div>

        {/* Security Strength Indicator (Visual only) */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div
              className={`h-1.5 flex-1 rounded-full ${
                length > 15 ? "bg-emerald-500" : "bg-orange-500"
              }`}
            ></div>
            <div
              className={`h-1.5 flex-1 rounded-full ${
                length > 20 ? "bg-emerald-500" : "bg-slate-700"
              }`}
            ></div>
            <div
              className={`h-1.5 flex-1 rounded-full ${
                length > 25 ? "bg-emerald-500" : "bg-slate-700"
              }`}
            ></div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-2">
              Strength
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
