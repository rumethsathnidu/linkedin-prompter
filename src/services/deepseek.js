const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';

const INTENSITY_INSTRUCTIONS = {
  1: `Level 1 (Mild Professional):
- Write 1 to 2 crisp, pretentious corporate-jargon sentences.
- Sound like an overly polished resume bullet point or status update.
- NO emojis, NO hashtags, NO dramatic line breaks.`,
  2: `Level 2 (Thought Leader):
- Write a classic LinkedIn humblebrag post (3 to 5 short lines with blank lines between paragraphs).
- Start by translating the mundane action into corporate jargon, then add a short unsolicited "takeaway" or "lesson".
- Include 0 to 1 subtle emoji and end with 3 relevant corporate hashtags.`,
  3: `Level 3 (Full Cringe / CEO Mode):
- Peak "LinkedIn Lunatic" energy.
- Open with a dramatic 1-line hook (e.g., "I wasn't going to post this today, but...", "Unpopular opinion:", "Stop scrolling.").
- Use single-sentence paragraphs separated by blank lines.
- Turn the mundane action into an epic tale of grit, 10x mindset, and synergy.
- End with an engagement bait question (e.g., "Agree? 👇") and 5 to 6 unhinged hashtags.`,
};

const SYSTEM_PROMPT = `You are a hilarious satire writer who translates mundane, everyday sentences into over-the-top corporate LinkedIn posts as a meme.

Classic examples of the humor style:
- "I washed the dishes." -> "Spearheaded post-consumption asset restoration and sanitation protocols."
- "I changed a lightbulb." -> "Successfully executed a high-impact facilities illumination optimization task."
- "I hit snooze 5 times." -> "Implemented a multi-stage strategic rest cycle to maximize morning alignment."
- "My dog barked at the mailman." -> "Proactively identified and neutralized a potential perimeter security breach."
- "I got laid off." -> "Thrilled to announce I am embarking on an unexpected journey of self-discovery and open to new synergies!"

Rules:
- Output ONLY the final LinkedIn post text. No quotation marks around the whole post, no preamble, no explanations.
- Make it genuinely funny, specific to the user's exact input, and authentically LinkedIn-cringe.`;

export async function translateWithDeepSeek(input, intensity = 2, remixSeed = 0) {
  const apiKey = import.meta.env.VITE_DEEPSEEK_API_KEY;
  if (!apiKey) {
    throw new Error('Missing VITE_DEEPSEEK_API_KEY');
  }

  const userPrompt = `Convert this normal sentence into a LinkedIn post:
"${input.trim()}"

${INTENSITY_INSTRUCTIONS[intensity] || INTENSITY_INSTRUCTIONS[2]}
${remixSeed > 0 ? `\nGive a fresh, completely different angle/variation (variation #${remixSeed + 1}).` : ''}`;

  const response = await fetch(DEEPSEEK_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.95,
      max_tokens: 350,
    }),
  });

  if (!response.ok) {
    const errText = await response.text().catch(() => '');
    throw new Error(`DeepSeek API error (${response.status}): ${errText || response.statusText}`);
  }

  const data = await response.json();
  const content = data?.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new Error('Empty response from DeepSeek');
  }

  return content;
}
