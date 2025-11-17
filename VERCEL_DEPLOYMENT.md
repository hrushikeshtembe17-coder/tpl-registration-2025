# 🚀 TPL Registration Website - Vercel Deployment Guide

## 📋 Project Details
- **Project Name**: TPL Registration 2025
- **Owner**: hrushikesh.tembe17@extc.sce.edu.in
- **Type**: Static Website with Google Sheets Backend
- **Framework**: HTML/CSS/JavaScript

---

## ✅ Prerequisites

1. **Vercel Account**
   - Sign up at: https://vercel.com/signup
   - Use email: hrushikesh.tembe17@extc.sce.edu.in

2. **Install Vercel CLI** (Optional - for command line deployment)
   ```bash
   npm install -g vercel
   ```

---

## 🌐 Deployment Methods

### **Method 1: Deploy via Vercel Website (Easiest)** ⭐

1. **Login to Vercel**
   - Go to: https://vercel.com/login
   - Login with: hrushikesh.tembe17@extc.sce.edu.in

2. **Import Project**
   - Click "Add New..." → "Project"
   - Choose "Import Git Repository" or "Deploy from Template"

3. **Connect GitHub (Recommended)**
   - Link your GitHub account
   - Create a new repository for this project
   - Push the `tpl_website` folder to GitHub
   - Import the repository in Vercel

4. **Configure Project**
   - Project Name: `tpl-registration-2025`
   - Framework Preset: "Other"
   - Root Directory: `./` (if deploying entire tpl_website folder)
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

5. **Deploy**
   - Click "Deploy"
   - Wait 30-60 seconds for deployment
   - Your site will be live at: `https://tpl-registration-2025.vercel.app`

---

### **Method 2: Deploy via Drag & Drop**

1. **Go to Vercel Deploy**
   - Visit: https://vercel.com/new

2. **Drag and Drop**
   - Drag the entire `tpl_website` folder to the upload area
   - Vercel will automatically detect and deploy

3. **Configure**
   - Set project name: `tpl-registration-2025`
   - Click "Deploy"

---

### **Method 3: Deploy via Vercel CLI**

1. **Login to Vercel CLI**
   ```bash
   vercel login
   ```
   - Enter email: hrushikesh.tembe17@extc.sce.edu.in
   - Verify via email link

2. **Navigate to Project**
   ```bash
   cd d:\eazr_life_scoring\eazr_life\tpl_website
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

4. **Follow Prompts**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name: `tpl-registration-2025`
   - Directory: `./`
   - Override settings? **N**

5. **Deployment Complete**
   - Your URL will be shown: `https://tpl-registration-2025.vercel.app`

---

## 🔧 Post-Deployment Configuration

### **Update URLs (Important!)**

After deployment, you'll get a Vercel URL like:
`https://tpl-registration-2025.vercel.app`

**No changes needed!** Your website already uses Google Apps Script URL for the backend, which is independent of Vercel hosting.

### **Current Configuration:**
- ✅ Google Apps Script URL: Already configured
- ✅ Images: Stored in Google Drive
- ✅ Data: Stored in Google Sheets
- ✅ Frontend: Hosted on Vercel

---

## 📱 Custom Domain (Optional)

### **Add Custom Domain**

1. **In Vercel Dashboard**
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., `tpl.sce.edu.in`)

2. **Update DNS Records**
   - Add CNAME record pointing to `cname.vercel-dns.com`
   - Wait for DNS propagation (5-30 minutes)

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificate
   - Your site will be accessible via HTTPS

---

## 🔄 Automatic Deployments

### **Setup Auto-Deploy from GitHub**

1. **Connect GitHub Repository**
   - In Vercel project settings
   - Connect to your GitHub repo

2. **Auto-Deploy Configuration**
   - Production Branch: `main` or `master`
   - Every push to main branch will auto-deploy

3. **Benefits**
   - Automatic deployments on git push
   - Preview deployments for pull requests
   - Rollback to previous versions easily

---

## 🌍 Your Deployed URLs

After deployment, you'll have:

- **Production URL**: `https://tpl-registration-2025.vercel.app`
- **Google Sheets**: Already configured
- **Google Drive**: Already configured for image storage

---

## ✅ Verification Checklist

After deployment, verify:

- [ ] Website loads correctly
- [ ] Images (tpl_logo.jpg, gpay.jpeg) display properly
- [ ] Registration form works
- [ ] Photo upload works
- [ ] Payment screenshot upload works
- [ ] Data saves to Google Sheets
- [ ] Image links appear in Google Sheets
- [ ] Mobile responsive design works

---

## 🆘 Troubleshooting

### **Issue: Website not loading**
- Check Vercel deployment logs
- Verify all files are uploaded

### **Issue: Images not showing**
- Check image paths in HTML
- Ensure images are in the same directory

### **Issue: Registration not working**
- Verify Google Apps Script URL is correct
- Check browser console for errors
- Test with test_registration.html

### **Issue: CORS errors**
- Already handled with `mode: 'no-cors'` in fetch
- No changes needed

---

## 📞 Support

- **Vercel Documentation**: https://vercel.com/docs
- **Vercel Support**: support@vercel.com
- **Project Owner**: hrushikesh.tembe17@extc.sce.edu.in

---

## 🎉 Quick Start Commands

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Navigate to project
cd d:\eazr_life_scoring\eazr_life\tpl_website

# Deploy to production
vercel --prod
```

---

**Status**: Ready for deployment! 🚀
**Last Updated**: November 2025
**Version**: 1.0.0
