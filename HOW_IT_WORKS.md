# 🌐 How TPL Registration Website Works

## ✅ Your Website is ALWAYS ONLINE (24/7)

### Important: Your laptop does NOT need to be on!

---

## 🏗️ Architecture Overview

```
User's Phone/Computer
        ↓
Vercel (Cloud Hosting) - ALWAYS RUNNING
        ↓
Google Apps Script (Google Servers) - ALWAYS RUNNING
        ↓
Google Sheets (Cloud Storage) - ALWAYS AVAILABLE
```

**Everything runs in the cloud!** Your laptop is NOT involved in the live website.

---

## 🔍 Understanding the Components

### 1. **Vercel Hosting** (Frontend)
- **URL**: `https://tpl-registration-2025.vercel.app`
- **Status**: Always online, 24/7
- **Location**: Vercel's global CDN (cloud servers)
- **Your laptop**: NOT needed

When someone visits your website:
- Vercel serves the HTML/CSS/JavaScript
- Works even if your laptop is OFF, SLEEPING, or BROKEN

### 2. **Google Apps Script** (Backend)
- **URL**: `https://script.google.com/macros/s/AKfycbwFBTrJx3i2VZHn68TifObjPcbAevnU6xHbT0HuUmRXh-Z5Tq0YMTE2yHk6r8CvXtcooQ/exec`
- **Status**: Always running on Google's servers
- **Location**: Google Cloud Platform
- **Your laptop**: NOT needed

When someone submits the form:
- Data is sent directly to Google's servers
- Images are uploaded to Google Drive
- All processing happens on Google's cloud

### 3. **Google Sheets** (Database)
- **Status**: Always accessible
- **Location**: Google Drive cloud storage
- **Your laptop**: NOT needed

All registration data is stored here permanently.

---

## ❓ Why Did You Think Your Laptop Was Needed?

### Possible Reasons:

#### 1. **You Were Testing Locally**
If you opened: `file:///d:/eazr_life_scoring/eazr_life/tpl_website/index.html`
- This only works when your laptop is on
- This is LOCAL testing, not the live website

**Solution**: Always use the live URL:
```
https://tpl-registration-2025.vercel.app
```

#### 2. **You Were Checking Google Sheets**
If you check Google Sheets on your laptop:
- You need your laptop ON to VIEW the data
- But data is STORED in the cloud even when laptop is off
- Other people can submit forms anytime

**Solution**:
- Data is always being saved to Google Sheets
- You can view it from ANY device (phone, tablet, another computer)
- Open Google Sheets on your phone to check registrations

#### 3. **Caching/Refresh Issue**
Sometimes you need to refresh Google Sheets to see new data:
- Press `F5` or `Ctrl+R` to refresh
- New registrations appear instantly after refresh

---

## 🧪 How to Test if It Works 24/7

### Test 1: From Your Phone (Laptop OFF)
1. **Turn OFF your laptop** completely
2. Open phone browser
3. Go to: `https://tpl-registration-2025.vercel.app`
4. Fill and submit a test registration
5. Check Google Sheets from your phone
6. **Result**: Should work perfectly!

### Test 2: From Another Device
1. Ask a friend to visit the website
2. They submit a registration
3. Check your Google Sheets
4. **Result**: Their data appears immediately!

### Test 3: Verify Vercel Deployment
1. Go to: https://vercel.com
2. Login with: hrushikesh.tembe17@extc.sce.edu.in
3. Check project: `tpl-registration-2025`
4. **Result**: Should show "Ready" status

---

## 📊 How to Check Registrations

### Option 1: From Your Laptop
1. Open Google Sheets
2. Go to your TPL registration sheet
3. Press `F5` to refresh
4. See all registrations (even ones submitted when laptop was off)

### Option 2: From Your Phone
1. Open Google Sheets app
2. Open TPL registration sheet
3. Pull down to refresh
4. See all registrations

### Option 3: From Any Device
1. Go to: https://docs.google.com/spreadsheets
2. Login with your account
3. Open TPL sheet
4. View all data

---

## 🔧 What Your Laptop IS Used For

Your laptop is ONLY needed for:

1. **Development** - Making changes to the website code
2. **Viewing Data** - Checking Google Sheets (can also use phone)
3. **Deploying Updates** - Pushing code changes to GitHub

Your laptop is NOT needed for:
- Users visiting the website
- Users submitting registrations
- Data being saved to Google Sheets
- Images being uploaded to Google Drive

---

## 🚀 Live URLs

### Main Website (Always Online)
```
https://tpl-registration-2025.vercel.app
```
- Share this URL with players
- Works 24/7, even when your laptop is off

### Google Apps Script (Backend)
```
https://script.google.com/macros/s/AKfycbwFBTrJx3i2VZHn68TifObjPcbAevnU6xHbT0HuUmRXh-Z5Tq0YMTE2yHk6r8CvXtcooQ/exec
```
- Automatically called by the website
- Always running on Google servers

### GitHub Repository
```
https://github.com/hrushikeshtembe17-coder/tpl-registration-2025
```
- Source code backup
- Auto-deploys to Vercel on push

---

## ✅ Verification Checklist

To confirm everything works independently:

- [ ] Website accessible at Vercel URL (laptop off)
- [ ] Users can submit registrations (laptop off)
- [ ] Data appears in Google Sheets (laptop off)
- [ ] Images uploaded to Google Drive (laptop off)
- [ ] Mobile responsive design works
- [ ] Photo validation works
- [ ] Payment screenshot upload works

---

## 📞 Quick Reference

| What | Where | Always Online? |
|------|-------|----------------|
| Website | Vercel | ✅ YES |
| Backend | Google Apps Script | ✅ YES |
| Database | Google Sheets | ✅ YES |
| Images | Google Drive | ✅ YES |
| Your Laptop | Your Desk | ❌ NOT NEEDED |

---

## 🎯 Summary

**Your website is 100% cloud-based and works 24/7 without your laptop!**

- Players can register anytime
- Data is saved automatically
- Images are stored in Google Drive
- Everything runs on cloud servers

**Your laptop is only needed to:**
- Make changes to the website
- View the registration data
- Deploy updates

---

**Last Updated**: November 2025
**Status**: ✅ Fully Operational - Cloud-Based System
