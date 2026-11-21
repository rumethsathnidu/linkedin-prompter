# LinkedIn Prompter

A React + Vite meme web application that converts mundane everyday sentences into over-the-top corporate LinkedIn posts.

## Features

- **AI-Powered Translation**: Uses the DeepSeek Chat API to turn any normal sentence into corporate jargon, with a built-in offline template engine fallback.
- **Humblebrag Intensity Slider**:
  1. **Mild Professional** — Resume-ready corporate speak.
  2. **Thought Leader** — Humblebrag takeaway with hashtags.
  3. **CEO Mode** — Dramatic spacing, unsolicited life lessons, and maximum hashtags.
- **Fake LinkedIn Post Mockup**: Interactive reaction picker (Like, Celebrate, Support, Insightful, Funny), follow toggle, and live hashtag highlighting.
- **Profile Customizer**: Edit the display name, headline, and upload a custom profile picture.
- **Export & Share**: Copy the generated post text to your clipboard or download the mockup card as a high-resolution PNG.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React
- `html-to-image`

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   Create a `.env` file in the project root:
   ```env
   VITE_DEEPSEEK_API_KEY=your_deepseek_api_key_here
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
