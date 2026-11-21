import React, { forwardRef, useState } from 'react';
import {
  ThumbsUp,
  MessageSquare,
  Repeat2,
  Send,
  Globe,
  MoreHorizontal,
  Plus,
} from 'lucide-react';

const REACTIONS = [
  { id: 'like', label: 'Like', emoji: '👍', color: '#0a66c2' },
  { id: 'celebrate', label: 'Celebrate', emoji: '👏', color: '#44712e' },
  { id: 'support', label: 'Support', emoji: '💜', color: '#7f5195' },
  { id: 'insightful', label: 'Insightful', emoji: '💡', color: '#b24020' },
  { id: 'funny', label: 'Funny', emoji: '😂', color: '#0073b1' },
];

function formatPostContent(text) {
  return text.split('\n').map((line, lineIdx) => {
    if (!line.trim()) {
      return <div key={lineIdx} className="h-3" />;
    }
    const parts = line.split(/(#[a-zA-Z0-9_]+)/g);
    return (
      <p key={lineIdx} className="leading-[1.45] text-[14.5px] text-[#191919]">
        {parts.map((part, i) =>
          part.startsWith('#') ? (
            <span
              key={i}
              className="font-semibold text-[#0a66c2] hover:underline cursor-pointer"
            >
              {part}
            </span>
          ) : (
            <React.Fragment key={i}>{part}</React.Fragment>
          )
        )}
      </p>
    );
  });
}

const LinkedInPostCard = forwardRef(function LinkedInPostCard(
  { profile, postText, intensity, loading },
  ref
) {
  const [userReaction, setUserReaction] = useState(null);
  const [showPicker, setShowPicker] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  const baseCount = intensity === 3 ? 2847 : intensity === 2 ? 412 : 48;
  const totalReactions = baseCount + (userReaction ? 1 : 0);

  const initials = (profile.name || 'CS')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');

  const activeReactionObj = REACTIONS.find((r) => r.id === userReaction);

  return (
    <div
      ref={ref}
      className="bg-white rounded-lg border border-[#e0dfdc] shadow-sm overflow-hidden w-full"
    >
      {/* Header */}
      <div className="p-4 pb-2 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 select-none">
            {profile.avatarUrl ? (
              <img
                src={profile.avatarUrl}
                alt={profile.name || 'Profile'}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#0a66c2] to-[#004182] text-white font-bold text-base flex items-center justify-center">
                {initials || 'LI'}
              </div>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-[14.5px] text-[#191919] leading-tight">
                {profile.name || 'Chad Synergize'}
              </span>
              <span className="text-xs text-[#666666] font-normal">• 1st</span>
            </div>
            <p className="text-xs text-[#666666] leading-snug mt-0.5 line-clamp-2">
              {profile.headline ||
                'Visionary Thought Leader | 10x Dish Restorer | Helping Brands Scale'}
            </p>
            <div className="flex items-center gap-1 text-[11.5px] text-[#666666] mt-0.5">
              <span>Just now</span>
              <span>•</span>
              <Globe className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setIsFollowing((v) => !v)}
            className="text-[#0a66c2] hover:bg-[#eef3f8] font-semibold text-sm px-2.5 py-1 rounded transition flex items-center gap-1"
          >
            {isFollowing ? (
              <span>Following</span>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Follow</span>
              </>
            )}
          </button>
          <button
            type="button"
            aria-label="More options"
            className="text-[#666666] hover:bg-[#f3f2ef] p-1.5 rounded-full transition"
          >
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-2.5 break-words min-h-[72px]">
        {loading ? (
          <div className="space-y-2 animate-pulse py-1">
            <div className="h-3.5 bg-[#ebebeb] rounded w-4/5" />
            <div className="h-3.5 bg-[#ebebeb] rounded w-full" />
            <div className="h-3.5 bg-[#ebebeb] rounded w-2/3" />
          </div>
        ) : (
          formatPostContent(postText)
        )}
      </div>

      {/* Reaction Summary */}
      <div className="px-4 py-2 flex items-center justify-between text-xs text-[#666666] border-b border-[#ebebeb]">
        <div className="flex items-center gap-1.5">
          <div className="flex -space-x-1">
            <span className="w-4 h-4 rounded-full bg-[#378fe9] text-[10px] flex items-center justify-center ring-1 ring-white">
              👍
            </span>
            <span className="w-4 h-4 rounded-full bg-[#6dae4f] text-[10px] flex items-center justify-center ring-1 ring-white">
              👏
            </span>
            <span className="w-4 h-4 rounded-full bg-[#df704d] text-[10px] flex items-center justify-center ring-1 ring-white">
              💡
            </span>
            {userReaction &&
              !['like', 'celebrate', 'insightful'].includes(userReaction) && (
                <span className="w-4 h-4 rounded-full bg-[#7f5195] text-[10px] flex items-center justify-center ring-1 ring-white">
                  {activeReactionObj?.emoji}
                </span>
              )}
          </div>
          <span className="hover:text-[#0a66c2] hover:underline cursor-pointer">
            {userReaction
              ? `You and ${baseCount.toLocaleString()} others`
              : `${totalReactions.toLocaleString()}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>
            {intensity === 3
              ? '184 comments'
              : intensity === 2
              ? '27 comments'
              : '3 comments'}
          </span>
          <span>•</span>
          <span>
            {intensity === 3
              ? '62 reposts'
              : intensity === 2
              ? '9 reposts'
              : '1 repost'}
          </span>
        </div>
      </div>

      {/* Action Bar */}
      <div className="px-2 py-1 grid grid-cols-4 gap-1 relative">
        <div
          className="relative"
          onMouseEnter={() => setShowPicker(true)}
          onMouseLeave={() => setShowPicker(false)}
        >
          {showPicker && (
            <div className="absolute bottom-full left-0 mb-1 bg-white border border-[#e0dfdc] shadow-lg rounded-full px-2 py-1.5 flex items-center gap-1.5 z-20">
              {REACTIONS.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  title={r.label}
                  onClick={() => {
                    setUserReaction(r.id);
                    setShowPicker(false);
                  }}
                  className="w-8 h-8 rounded-full hover:scale-125 transition-transform flex items-center justify-center text-lg"
                >
                  {r.emoji}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setUserReaction((prev) => (prev ? null : 'like'))}
            className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded hover:bg-[#f3f2ef] transition text-[13px] font-semibold"
            style={{
              color: activeReactionObj ? activeReactionObj.color : '#666666',
            }}
          >
            {activeReactionObj ? (
              <span className="text-base leading-none">
                {activeReactionObj.emoji}
              </span>
            ) : (
              <ThumbsUp className="w-4 h-4" />
            )}
            <span>{activeReactionObj ? activeReactionObj.label : 'Like'}</span>
          </button>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded hover:bg-[#f3f2ef] transition text-[13px] font-semibold text-[#666666]"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Comment</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded hover:bg-[#f3f2ef] transition text-[13px] font-semibold text-[#666666]"
        >
          <Repeat2 className="w-4 h-4" />
          <span>Repost</span>
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded hover:bg-[#f3f2ef] transition text-[13px] font-semibold text-[#666666]"
        >
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
});

export default LinkedInPostCard;
