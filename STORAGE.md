# Storage Configuration

This app requires file upload functionality. On Vercel, you need to configure Vercel Blob Storage:

## Setup Instructions:

1. Install Vercel Blob SDK:
```bash
npm install @vercel/blob
```

2. Enable Vercel Blob in your Vercel project dashboard

3. The app will automatically use Vercel Blob when deployed to Vercel

## Local Development:
- Files are stored in `public/uploads/` directory
- This works fine locally but not on Vercel's serverless environment

## Production (Vercel):
- Requires Vercel Blob Storage to be configured
- Set up through Vercel dashboard under Storage
