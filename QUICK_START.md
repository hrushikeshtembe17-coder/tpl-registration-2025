# ⚡ Quick Start - Google Sheets Setup (2 minutes)

## 📝 Super Quick Setup

### 1️⃣ Create Spreadsheet
- Go to https://sheets.google.com
- Create new blank spreadsheet
- Name it: **TPL Registrations 2024**

### 2️⃣ Add Script
- Click **Extensions** → **Apps Script**
- Delete default code
- Copy & paste code from `google-apps-script.js`
- Save (💾)

### 3️⃣ Deploy
- Click **Deploy** → **New deployment**
- Type: **Web app**
- Execute as: **Me**
- Access: **Anyone**
- Click **Deploy** → **Authorize**
- **Copy the URL** (looks like: `https://script.google.com/macros/s/...`)

### 4️⃣ Update Website
- Open `index.html`
- Line 969: Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your URL
- Save

### 5️⃣ Test
- Open `index.html` in browser
- Submit test registration
- Check Google Sheet for data
- Check email for notification

---

## 📱 View on Mobile

**Android/iOS:**
1. Install Google Sheets app
2. Open "TPL Registrations 2024"
3. View all data! ✅

---

## 🎯 That's It!

Your registration system is ready. All data automatically saves to Google Sheets and sends email notifications!

For detailed instructions, see [GOOGLE_SHEETS_SETUP.md](GOOGLE_SHEETS_SETUP.md)
