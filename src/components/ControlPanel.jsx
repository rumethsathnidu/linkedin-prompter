import React, { useRef, useState } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  Download,
  RefreshCw,
  Dice5,
  UserCog,
  ChevronDown,
  ChevronUp,
  Upload,
  Trash2,
  Loader2,
} from 'lucide-react';
import { CLASSIC_EXAMPLES, RANDOM_INPUTS } from '../data/jargonEngine';

const INTENSITY_LABELS = {
  1: {
    name: 'Mild Professional',
    desc: 'Resume-ready corporate speak. No emojis.',
    badge: '👔 Mild',
  },
  2: {
    name: 'Thought Leader',
    desc: 'Humblebrag takeaway + 3 hashtags.',
    badge: '💡 Thought Leader',
  },
  3: {
    name: 'Full Cringe / CEO Mode',
    desc: 'Spaced-out drama, unsolicited advice & maximum hashtags.',
    badge: '🚀 CEO Lunatic',
  },
};

export default function ControlPanel({
  input,
  setInput,
  intensity,
  setIntensity,
  onGenerate,
  onRemix,
  loading,
  aiError,
  onCopy,
  copied,
  onDownload,
  downloading,
  profile,
  setProfile,
}) {
  const [showProfileEdit, setShowProfileEdit] = useState(false);
  const fileInputRef = useRef(null);

  const currentIntensity = INTENSITY_LABELS[intensity];

  const handleRandom = () => {
    const next = RANDOM_INPUTS[Math.floor(Math.random() * RANDOM_INPUTS.length)];
    setInput(next);
    onGenerate(next, intensity);
  };

  const handlePresetClick = (presetText) => {
    setInput(presetText);
    onGenerate(presetText, intensity);
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setProfile((p) => ({ ...p, avatarUrl: reader.result }));
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded-lg border border-[#e0dfdc] shadow-sm p-5 space-y-5">
      {/* Input Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label
            htmlFor="reality-input"
            className="text-sm font-semibold text-[#191919] flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#0a66c2]" />
            Normal Sentence (Reality)
          </label>
          <button
            type="button"
            onClick={handleRandom}
            disabled={loading}
            className="text-xs font-medium text-[#0a66c2] hover:bg-[#eef3f8] disabled:opacity-50 px-2 py-1 rounded flex items-center gap-1 transition"
          >
            <Dice5 className="w-3.5 h-3.5" />
            Random Reality
          </button>
        </div>

        <textarea
          id="reality-input"
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              onGenerate(input, intensity);
            }
          }}
          placeholder="e.g., I washed the dishes."
          className="w-full rounded-md border border-[#d0cec9] px-3 py-2.5 text-sm text-[#191919] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#0a66c2] focus:border-transparent resize-none"
        />

        <div className="mt-2.5 flex items-center justify-between gap-2">
          <span className="text-[11px] text-[#666666]">
            Press ⌘/Ctrl + Enter to generate
          </span>
          <button
            type="button"
            onClick={() => onGenerate(input, intensity)}
            disabled={loading || !input.trim()}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#0a66c2] hover:bg-[#004182] disabled:opacity-60 text-white text-xs font-semibold transition"
          >
            {loading ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Translating...
              </>
            ) : (
              <>
                <Sparkles className="w-3.5 h-3.5" />
                Generate with AI
              </>
            )}
          </button>
        </div>

        {aiError && (
          <p className="mt-2 text-[11px] text-[#b24020] bg-[#fdf3f1] border border-[#f5d5ce] rounded px-2.5 py-1.5">
            {aiError}
          </p>
        )}

        {/* Classic Presets */}
        <div className="mt-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#666666] block mb-1.5">
            Classic Examples
          </span>
          <div className="flex flex-wrap gap-1.5">
            {CLASSIC_EXAMPLES.map((ex) => {
              const active =
                input.trim().toLowerCase() === ex.input.toLowerCase();
              return (
                <button
                  key={ex.label}
                  type="button"
                  onClick={() => handlePresetClick(ex.input)}
                  className={`text-xs px-2.5 py-1 rounded-full border transition ${
                    active
                      ? 'bg-[#0a66c2] text-white border-[#0a66c2] font-medium'
                      : 'bg-[#f8f7f4] text-[#444444] border-[#e0dfdc] hover:bg-[#eef3f8] hover:border-[#0a66c2]'
                  }`}
                >
                  {ex.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Humblebrag Intensity Slider */}
      <div className="pt-2 border-t border-[#ebebeb]">
        <div className="flex items-center justify-between mb-1.5">
          <label
            htmlFor="intensity-slider"
            className="text-sm font-semibold text-[#191919]"
          >
            Humblebrag Intensity
          </label>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#eef3f8] text-[#0a66c2]">
            {currentIntensity.badge}
          </span>
        </div>

        <input
          id="intensity-slider"
          type="range"
          min={1}
          max={3}
          step={1}
          value={intensity}
          onChange={(e) => {
            const nextLevel = Number(e.target.value);
            setIntensity(nextLevel);
            if (input.trim()) {
              onGenerate(input, nextLevel);
            }
          }}
          className="w-full accent-[#0a66c2] cursor-pointer"
        />

        <div className="flex justify-between text-[11px] text-[#666666] mt-1">
          <span>1. Mild</span>
          <span>2. Thought Leader</span>
          <span>3. CEO Mode</span>
        </div>
        <p className="text-xs text-[#666666] mt-1.5">{currentIntensity.desc}</p>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 border-t border-[#ebebeb] grid grid-cols-1 sm:grid-cols-3 gap-2">
        <button
          type="button"
          onClick={onRemix}
          disabled={loading || !input.trim()}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#0a66c2] text-[#0a66c2] hover:bg-[#eef3f8] disabled:opacity-50 text-xs font-semibold transition"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Remix
        </button>

        <button
          type="button"
          onClick={onCopy}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full border border-[#666666] text-[#333333] hover:bg-[#f3f2ef] text-xs font-semibold transition"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#057642]" />
              <span className="text-[#057642]">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Text</span>
            </>
          )}
        </button>

        <button
          type="button"
          onClick={onDownload}
          disabled={downloading}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-full bg-[#0a66c2] hover:bg-[#004182] disabled:opacity-60 text-white text-xs font-semibold transition"
        >
          <Download className="w-3.5 h-3.5" />
          {downloading ? 'Saving...' : 'Download PNG'}
        </button>
      </div>

      {/* Collapsible Profile Customizer */}
      <div className="pt-2 border-t border-[#ebebeb]">
        <button
          type="button"
          onClick={() => setShowProfileEdit((v) => !v)}
          className="w-full flex items-center justify-between text-xs font-semibold text-[#666666] hover:text-[#191919] py-1 transition"
        >
          <span className="flex items-center gap-1.5">
            <UserCog className="w-3.5 h-3.5" />
            Customize Fake Profile
          </span>
          {showProfileEdit ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {showProfileEdit && (
          <div className="mt-3 space-y-3">
            {/* Avatar Upload */}
            <div>
              <label className="text-[11px] font-medium text-[#666666] block mb-1.5">
                Profile Picture
              </label>
              <div className="flex items-center gap-2.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#d0cec9] hover:bg-[#f3f2ef] text-xs font-medium text-[#191919] transition"
                >
                  <Upload className="w-3.5 h-3.5" />
                  {profile.avatarUrl ? 'Change Photo' : 'Upload Photo'}
                </button>
                {profile.avatarUrl && (
                  <button
                    type="button"
                    onClick={() => {
                      setProfile((p) => ({ ...p, avatarUrl: '' }));
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs text-[#b24020] hover:bg-[#fdf3f1] transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Remove
                  </button>
                )}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#666666] block mb-1">
                Display Name
              </label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, name: e.target.value }))
                }
                className="w-full rounded border border-[#d0cec9] px-2.5 py-1.5 text-xs text-[#191919] focus:outline-none focus:ring-1 focus:ring-[#0a66c2]"
              />
            </div>

            <div>
              <label className="text-[11px] font-medium text-[#666666] block mb-1">
                Headline
              </label>
              <input
                type="text"
                value={profile.headline}
                onChange={(e) =>
                  setProfile((p) => ({ ...p, headline: e.target.value }))
                }
                className="w-full rounded border border-[#d0cec9] px-2.5 py-1.5 text-xs text-[#191919] focus:outline-none focus:ring-1 focus:ring-[#0a66c2]"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
