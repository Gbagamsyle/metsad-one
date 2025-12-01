# Deploying the `server` to Render

This document explains the minimal steps to deploy the `server` folder as a web service on Render.

Recommended options (no Docker):

1. Go to Render dashboard -> New -> Web Service.
2. Connect your GitHub repository `Gbagamsyle/metsad-one` and choose the branch `render-backend`.
3. In the "Root Directory" field enter: `server`.
4. Environment:
   - Build Command: leave blank (Render will run `npm install` in `server` automatically) or set `npm ci`
   - Start Command: `npm start` (the `server/package.json` already has a `start` script: `node index.js`).
   - Port: Render sets `PORT` in the environment; the server reads `process.env.PORT` (already supported).
5. Add the required environment variables in Render's dashboard (under the service settings -> Environment):
   - `RESEND_API_KEY` (your Resend API key)
   - `ADMIN_EMAIL` (recipient for admin notifications)
   - `FROM_EMAIL` (sender address for emails)

If you prefer to use the included Dockerfile:

1. When creating the Web Service choose to deploy using the Dockerfile option.
2. The provided `server/Dockerfile` uses `node:20-alpine` and starts the service with `node index.js`.

Notes & testing
- After deploy, Render will provide a stable HTTPS URL (e.g. `https://your-service.onrender.com`).
- Set your frontend `VITE_API_URL` to `https://your-service.onrender.com` (or `https://api.yourdomain.com` if you add a custom subdomain).
- Test the `/api/send-contact` and `/api/send-newsletter` endpoints with curl or Postman.

Example curl (replace with real URL):

```
curl -X POST https://your-service.onrender.com/api/send-contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"you@example.com","message":"Hello from test"}'
```
