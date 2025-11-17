# 📊 Google Sheets Setup Guide for TPL Registration

Complete step-by-step guide to connect your TPL website to Google Sheets.

---

## ✅ What You'll Get

- 📱 **View registrations on mobile** - Open Google Sheets app anytime
- 📧 **Email notifications** - Get alerts at hrushikesh.tembe17@extc.sce.edu.in
- 🆓 **100% Free** - No hosting or server costs
- ☁️ **Cloud storage** - All data saved in Google Drive
- 👥 **Easy sharing** - Share spreadsheet with other organizers

---

## 🚀 Step-by-Step Setup (5 minutes)

### Step 1: Create Google Spreadsheet

1. Go to https://sheets.google.com
2. Click **+ Blank** to create a new spreadsheet
3. Rename it to **"TPL Registrations 2024"**
4. Keep this tab open

### Step 2: Open Apps Script Editor

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. You'll see a code editor with some default code
3. **Delete all the default code** in the editor

### Step 3: Add the Registration Script

1. Copy ALL the code from the file: `google-apps-script.js` (in the same folder as this guide)
2. Paste it into the Apps Script editor
3. Click the **disk icon** (💾) to save
4. Name your project: **"TPL Registration System"**

### Step 4: Deploy as Web App

1. Click **Deploy** button (top right) → **New deployment**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description**: TPL Registration API
   - **Execute as**: **Me** (your email)
   - **Who has access**: **Anyone**
5. Click **Deploy**
6. **Authorize the app:**
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** → **Go to TPL Registration System (unsafe)**
   - Click **Allow**
7. **IMPORTANT**: Copy the **Web app URL** that appears
   - It looks like: `https://script.google.com/macros/s/AKfycby.../exec`
   - Keep this URL safe!

### Step 5: Update Your Website

1. Open the file: `index.html` (in the tpl_website folder)
2. Find line 969 (search for `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE`)
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with the URL you copied in Step 4
4. Save the file

**Example:**
```javascript
// Before:
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

// After:
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby.../exec';
```

### Step 6: Test Your Setup

1. Open `index.html` in your web browser
2. Click **"आता नोंदणी करा!"**
3. Fill in the registration form with test data
4. Upload a test photo
5. Upload a test payment screenshot
6. Submit the form

**Check Results:**
- ✅ Go back to your Google Sheet
- ✅ You should see a new row with your test data
- ✅ Check your email (hrushikesh.tembe17@extc.sce.edu.in) for notification

---

## 📱 Viewing Data on Mobile

### Android:
1. Download **Google Sheets** app from Play Store
2. Open the app and sign in
3. Find **"TPL Registrations 2024"**
4. View all registrations anytime!

### iOS (iPhone/iPad):
1. Download **Google Sheets** from App Store
2. Open and sign in
3. Find your spreadsheet
4. View registrations on the go!

---

## 👥 Sharing with Other Organizers

1. Open your Google Sheet
2. Click **Share** button (top right)
3. Enter email addresses of other organizers
4. Choose permission level:
   - **Viewer** - Can only view
   - **Editor** - Can edit and update status
5. Click **Send**

---

## 📊 Your Spreadsheet Columns

The spreadsheet will automatically create these columns:

| Column | Description |
|--------|-------------|
| Timestamp | When player registered |
| Player Name | Full name |
| Availability (13-14 Dec) | होय or नाही |
| T-shirt Size | S/M/L/XL/XXL |
| Photo Filename | Name of uploaded photo |
| Payment Screenshot | Name of payment proof |
| Payment Amount | ₹100 |
| Status | Pending Verification/Verified/Rejected |
| Submission Date | Date added to sheet |

---

## 📧 Email Notifications

You will automatically receive an email at **hrushikesh.tembe17@extc.sce.edu.in** when:
- ✅ A new player registers
- ✅ Email contains all player details
- ✅ Beautiful HTML formatting
- ✅ Link to view spreadsheet

**Email includes:**
- Player name
- Availability status
- T-shirt size
- Photo filename
- Payment screenshot filename
- Payment amount
- Next steps checklist

---

## 🔧 Troubleshooting

### Problem: "Authorization Required" error
**Solution:**
- Go back to Apps Script editor
- Click **Deploy** → **Manage deployments**
- Click **Edit** (pencil icon)
- Make sure "Who has access" is set to **Anyone**
- Click **Deploy**

### Problem: Data not appearing in spreadsheet
**Solution:**
- Check if you updated the URL in index.html correctly
- Open browser console (F12) and check for errors
- Make sure the Google Script URL ends with `/exec`
- Try redeploying the Apps Script

### Problem: Email not received
**Solution:**
- Check spam/junk folder
- Verify email address in google-apps-script.js line 14
- Gmail may have limits (check Gmail quota)

### Problem: "Script has exceeded daily limit"
**Solution:**
- Google has daily limits (free tier: ~20,000 executions/day)
- This is more than enough for TPL registrations
- If needed, wait 24 hours or upgrade Google Workspace

---

## 🎯 Advanced Features

### Filter and Sort Data
1. Click on any column header
2. Click the filter icon (funnel)
3. Sort or filter by any criteria

### Update Player Status
1. Find the player's row
2. Click on the **Status** cell
3. Change from "Pending Verification" to:
   - **Verified** - Payment confirmed
   - **Rejected** - Payment issue

### Export Data
1. Click **File** → **Download**
2. Choose format:
   - Excel (.xlsx)
   - PDF
   - CSV

### View Statistics
Use built-in Google Sheets formulas:
```
=COUNTIF(C:C,"होय")  // Count available players
=COUNTIF(E:E,"M")    // Count Medium t-shirts
=COUNTIF(H:H,"Verified")  // Count verified payments
```

---

## 🔒 Security & Privacy

- ✅ Only you can edit the spreadsheet (unless you share it)
- ✅ Data stored securely in Google Drive
- ✅ Automatic backups by Google
- ✅ Access from any device

---

## 📞 Need Help?

If you encounter any issues:
1. Check this guide again carefully
2. Verify all steps were completed
3. Check browser console for errors (Press F12)
4. Try in a different browser (Chrome recommended)

---

## ✅ Setup Checklist

- [ ] Created Google Spreadsheet
- [ ] Opened Apps Script editor
- [ ] Pasted code from google-apps-script.js
- [ ] Deployed as Web App
- [ ] Authorized the app
- [ ] Copied the Web App URL
- [ ] Updated index.html with the URL
- [ ] Tested with sample registration
- [ ] Verified data appears in sheet
- [ ] Checked email notification received
- [ ] Installed Google Sheets mobile app

---

**🏏 Your TPL registration system is now ready!** 🎉

All registrations will automatically save to Google Sheets, and you'll receive email notifications for each new player!
