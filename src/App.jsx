import React, { useCallback, useEffect, useRef, useState } from 'react';
import { toPng } from 'html-to-image';
import ControlPanel from './components/ControlPanel';
import LinkedInPostCard from './components/LinkedInPostCard';
import { generateLinkedInPost } from './data/jargonEngine';
import { translateWithDeepSeek } from './services/deepseek';

export default function App() {
  const [input, setInput] = useState('I washed the dishes.');
  const [intensity, setIntensity] = useState(2);
  const [variantIndex, setVariantIndex] = useState(0);
  const [postText, setPostText] = useState(() =>
    generateLinkedInPost('I washed the dishes.', 2, 0)
  );
  const [loading, setLoading] = useState(false);
  const [aiError, setAiError] = useState('');
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const [profile, setProfile] = useState({
    name: 'Chad Synergize',
    headline: 'Visionary Thought Leader | 10x Dish Restorer | Helping Brands Scale',
    avatarUrl: '',
  });

  const postRef = useRef(null);
  const requestIdRef = useRef(0);

  const runAiTranslation = useCallback(
    async (text, level, seed = 0) => {
      const trimmed = text.trim();
      if (!trimmed) {
        setPostText(generateLinkedInPost('', level, seed));
        return;
      }

      const currentId = ++requestIdRef.current;
      setLoading(true);
      setAiError('');

      try {
        const aiResult = await translateWithDeepSeek(trimmed, level, seed);
        if (requestIdRef.current === currentId) {
          setPostText(aiResult);
        }
      } catch (err) {
        if (requestIdRef.current === currentId) {
          setAiError(
            'AI service unavailable — using built-in template fallback.'
          );
          setPostText(generateLinkedInPost(trimmed, level, seed));
        }
      } finally {
        if (requestIdRef.current === currentId) {
          setLoading(false);
        }
      }
    },
    []
  );

  // Generate initial AI post on first load
  useEffect(() => {
    runAiTranslation('I washed the dishes.', 2, 0);
  }, [runAiTranslation]);

  const handleGenerate = (text, level) => {
    setVariantIndex(0);
    runAiTranslation(text, level, 0);
  };

  const handleRemix = () => {
    const nextSeed = variantIndex + 1;
    setVariantIndex(nextSeed);
    runAiTranslation(input, intensity, nextSeed);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleDownload = async () => {
    const el = postRef.current;
    if (!el) return;
    setDownloading(true);
    try {
      const dataUrl = await toPng(el, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        width: el.offsetWidth,
        height: el.offsetHeight,
        style: {
          margin: '0',
        },
      });
      const link = document.createElement('a');
      link.download = 'linkedin-meme-post.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export image:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f2ee] text-[#191919] flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-[#e0dfdc] sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#0a66c2] text-white font-extrabold text-lg flex items-center justify-center tracking-tight">
              in
            </div>
            <div>
              <h1 className="text-base font-bold leading-none text-[#191919]">
                LinkedIn Prompter
              </h1>
              <p className="text-[11px] text-[#666666] mt-0.5">
                Turn mundane reality into corporate thought leadership
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5">
            <ControlPanel
              input={input}
              setInput={setInput}
              intensity={intensity}
              setIntensity={setIntensity}
              onGenerate={handleGenerate}
              onRemix={handleRemix}
              loading={loading}
              aiError={aiError}
              onCopy={handleCopy}
              copied={copied}
              onDownload={handleDownload}
              downloading={downloading}
              profile={profile}
              setProfile={setProfile}
            />
          </div>

          <div className="lg:col-span-7">
            <div className="w-full max-w-[560px] mx-auto">
              <div className="mb-2 flex items-center justify-between px-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#666666]">
                  Live Post Preview
                </span>
                <span className="text-[11px] text-[#666666]">
                  Hover “Like” to pick a reaction
                </span>
              </div>
              <LinkedInPostCard
                ref={postRef}
                profile={profile}
                postText={postText}
                intensity={intensity}
                loading={loading}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
