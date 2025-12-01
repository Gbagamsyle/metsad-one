# Deploying to Vercel

This document describes how to deploy the `metsad-one` project to Vercel (frontend + serverless API). The repository contains a Vite + React frontend and two serverless endpoints in `api/` (`send-contact.js` and `send-newsletter.js`) which use the Resend SDK to send emails.

**Quick summary**
- Framework: Vite (React)
- Serverless functions: `api/send-contact.js`, `api/send-newsletter.js` (Node)
- Build command: `npm run build`
- Output directory: `dist`

**Required environment variables (add these in Vercel Project Settings → Environment Variables)**
- `RESEND_API_KEY` — your Resend API key used by the serverless functions.
- `ADMIN_EMAIL` — the admin recipient address (where notifications are sent).
- `FROM_EMAIL` — the From address used when sending emails.
- `VITE_API_URL` — optional: a full backend URL if you host the backend separately. When frontend and `api/` are deployed together on Vercel, you can use relative paths (no value needed).

Optional (only if you use client-side Resend):
- `VITE_RESEND_API_KEY` — *only* if you plan to use Resend directly from the browser (not recommended).

Pre-deployment checklist
- Ensure you have a Vercel account and the GitHub repo connected.
- Confirm `RESEND_API_KEY` and email addresses are correct.
- Make sure `FROM_EMAIL` is allowed by your Resend account (check Resend docs if needed).

Deploy via Vercel UI
1. Go to https://vercel.com and import your GitHub repository.
2. During import set:
   - Framework Preset: Vite (Vercel usually detects this automatically).
   - Root Directory: (leave blank if repo root contains `package.json`).
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add Environment Variables in the import step or later in Project Settings (`RESEND_API_KEY`, `ADMIN_EMAIL`, `FROM_EMAIL`, and `VITE_API_URL` if required).
4. Deploy. Vercel will create preview deployments for branches and a production deployment for your default branch.

Deploy with Vercel CLI
1. Install the Vercel CLI (if not installed):
```powershell
npm i -g vercel
vercel login
```
2. Link the project (first run in project root):
```powershell
vercel --prod
```
3. Add environment variables via CLI (example):
```powershell
vercel env add RESEND_API_KEY production
vercel env add ADMIN_EMAIL production
vercel env add FROM_EMAIL production
```
Follow prompts to enter the secret values.

Local testing with Vercel Dev
- You can test serverless functions locally with `vercel dev`. This simulates the Vercel serverless environment and serves the `api/` functions under the local dev URL.

API endpoints (deployed)
- POST `/api/send-contact` — JSON body: `{ name, email, phone?, message }`
- POST `/api/send-newsletter` — JSON body: `{ email }`

Example curl tests (replace `<URL>` with your Vercel deployment URL):
```bash
curl -X POST "https://<URL>/api/send-contact" \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com","message":"Hello!"}'

curl -X POST "https://<URL>/api/send-newsletter" \
  -H "Content-Type: application/json" \
  -d '{"email":"subscriber@example.com"}'
```

Notes & troubleshooting
- Logs: check the Vercel dashboard → Deployments → select a deployment → Functions → view logs for serverless function failures.
- CORS: When frontend and serverless functions are deployed together in Vercel, calls to `/api/*` are same-origin and CORS is not needed. If you host the backend separately, ensure `VITE_API_URL` is set to the backend base URL and that CORS is allowed on the backend.
- Secrets: prefer Vercel Project-level Environment Variables rather than embedding keys in `env` files.

Advanced
- If you prefer controlling routing or function regions, you can add a `vercel.json` file. It's not required for this project.

If you want, I can:
- Add a `vercel.json` with custom headers or rewrites for `/api`.
- Add a short `README` example of how to set `VITE_API_URL` in the frontend `.env` for preview vs production.

— END —
