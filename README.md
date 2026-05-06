# Yoga Sūtras of Patanjali — Chanting App

iOS app for chanting along to the 196 Yoga Sūtras of Patanjali. Drawer navigation across the four pādas (chapters); tap a verse to play its recorded chant.

## Tech Stack

- Expo SDK 55 (React Native 0.83, React 19, New Architecture)
- React Navigation v7 (drawer)
- UI Kitten 5.3.1 + Eva Design (theming and components)
- expo-audio for playback (Reanimated v4 + Worklets)

## Setup

1. **Install dependencies**
   ```bash
   yarn install
   ```

2. **(Optional) Configure environment**
   ```bash
   cp .env.example .env
   ```
   `.env` is only needed for local TestFlight uploads via `altool`. EAS submissions don't need it.

3. **Build the dev client** (first time, or after adding native dependencies)
   ```bash
   npx expo prebuild --platform ios --clean
   npx expo run:ios          # simulator
   npx expo run:ios -d       # physical device
   ```
   This project uses a **dev build**, not Expo Go, because it depends on native modules (expo-audio, reanimated, gesture handler). First build takes a few minutes.

4. **Start development server** (after initial build)
   ```bash
   yarn start
   ```
   The dev build connects to Metro with hot reload. If port 8081 is taken, pass `--port 8082`.

5. **When to rebuild**

   Re-run `npx expo prebuild --platform ios --clean` if you add/update a package with native code, change `app.json` plugins, or update the Expo SDK.

## Building & Deploying

### Quick: Build + Submit to TestFlight (cloud, via EAS)
```bash
yarn testflight
```
Builds a production iOS binary on EAS and submits it to App Store Connect / TestFlight in one step.

### Quick: Build + Submit on local machine
```bash
yarn testflight:local
```
Builds the IPA locally (no EAS cloud minutes) and uploads it via `altool`. Requires `.env` to have `APP_STORE_API_KEY` and `APP_STORE_API_ISSUER` filled in. Splits into:
- `yarn testflight:local:build` — local IPA only (`eas build --local`)
- `yarn testflight:local:submit` — `altool` upload of the most recent `build-*.ipa`

### Manual Steps

```bash
# Build only on EAS (no submit)
yarn testflight:build
# equivalent to: eas build --platform ios --profile production

# Submit the latest EAS build
yarn testflight:submit
# equivalent to: eas submit --platform ios --latest

# Submit a specific EAS build by ID
eas submit --platform ios --id <build-id>

# List builds and check status
eas build:list
eas build:list --status finished

# Test JS bundle locally before building
npx expo export --platform ios
```

### Requirements for iOS Builds

- Apple Developer Program membership ($99/year)
- EAS CLI: `npm install -g eas-cli`
- Expo account linked: `eas login`
- App version source is `remote` (managed in App Store Connect / EAS) and the build number auto-increments on each production build.

## Project Structure

```
├── App.js                  # Root: theme provider + navigator
├── index.js                # Expo entry point
├── views/
│   ├── AppNavigator.jsx    # Drawer navigator (Chapters 1–4 + About)
│   ├── About/              # About screen
│   └── Chapter[1-4]/       # Each chapter: index.jsx + constants.js (Sanskrit text)
├── components/
│   └── Track.jsx           # Single verse row with play/pause
├── trackpaths.js           # Map of verse-index → bundled .m4a require()
└── assets/
    ├── tracks/             # All audio (.m4a per verse)
    └── icon.png, splash.png, favicon.png
```

## Audio Assets

Each verse is a separate `.m4a` file under `assets/tracks/`, indexed by chapter (Roman numeral) and line number — e.g. `I.5.m4a`, `III.27.m4a`. The verse-line list lives in `views/Chapter[1-4]/constants.js` and is loaded into `trackpaths.js` via static `require()` calls.

Note: every chapter's data skips `.12` (intentional gap in the source material).

## App Identifiers

| | |
|---|---|
| iOS bundle ID | `com.matthewvedder.yfchanting` |
| Android package | `com.matthewvedder.yfchanting` |
| EAS Project ID | `87f01f4a-63bb-42d1-a17a-6442ff2548c9` |
