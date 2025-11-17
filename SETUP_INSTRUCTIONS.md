# TPL Registration System - Setup Instructions

## Overview
This system allows players to register for TPL, upload their photos, make payment via UPI, upload payment screenshot, and all data is automatically stored in Google Sheets (free online database).

---

## Setup Steps

### Step 1: Create Google Sheet for Data Storage

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new blank spreadsheet
3. Name it: **"TPL 2024 Registrations"**
4. Keep this tab open - you'll use this spreadsheet

---

### Step 2: Set Up Google Apps Script

1. In your Google Sheet, click on **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Open the file `google-apps-script.js` (in this folder)
4. Copy ALL the code from that file
5. Paste it into the Apps Script editor
6. Click the **Save** icon (💾) and name the project: **"TPL Registration Handler"**

---

### Step 3: Deploy the Script as Web App

1. In the Apps Script editor, click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the settings:
   - **Description**: TPL Registration API
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access** when prompted
7. Select your Google account
8. Click **Advanced** > **Go to TPL Registration Handler (unsafe)**
9. Click **Allow**
10. **IMPORTANT**: Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/ABC...XYZ/exec`)

---

### Step 4: Connect the Website to Google Sheets

1. Open `index.html` file
2. Find this line (around line 968):
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with the Web app URL you copied
4. Example:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/ABC123...XYZ789/exec';
   ```
5. Save the file

---

## How It Works

### For Players (Users):

1. Player clicks "आता नोंदणी करा!" button
2. Fills registration form:
   - Availability (13-14 Dec)
   - Name
   - T-shirt size
   - Photo upload
3. After submitting form, payment section appears
4. Player scans QR code and makes ₹100 payment
5. Player uploads payment screenshot
6. Clicks "नोंदणी सबमिट करा" button
7. Data is sent to Google Sheets
8. Player receives confirmation message

### For Organizers (You):

1. All registration data appears in your Google Sheet automatically
2. Each row contains:
   - Timestamp
   - Player Name
   - Availability
   - T-shirt Size
   - Photo filename
   - Payment screenshot filename
   - Payment Amount
   - Status (Pending Verification)
   - Submission Date

3. You can:
   - View all registrations in one place
   - Verify payments by checking screenshot filenames
   - Update status from "Pending Verification" to "Verified"
   - Export data to Excel if needed
   - Share access with other organizers

---

## Payment Verification Process

Since file uploads (photos/screenshots) cannot be sent directly to Google Sheets, here's the recommended process:

### Option 1: Manual Verification (Recommended)
1. Players upload payment screenshot on the website
2. Screenshot filename is stored in Google Sheets
3. Players can also send actual screenshots via WhatsApp to organizers
4. Organizers verify payments manually and update status in sheet

### Option 2: Use Telegram Bot (Advanced)
1. Create a Telegram group for TPL
2. Ask players to send payment screenshots there with their name
3. Match names with Google Sheets entries
4. Update verification status

### Option 3: Use Google Forms (Alternative)
1. Create a Google Form with file upload enabled
2. After payment, players submit screenshot via form
3. Link form responses with main registration sheet

---

## Testing the System

1. Open `index.html` in a browser
2. Click "आता नोंदणी करा!"
3. Fill the form with test data
4. Upload any image as photo
5. Submit the form
6. Upload any image as payment screenshot
7. Click submit
8. Check your Google Sheet - a new row should appear with the test data

---

## Troubleshooting

### Data not appearing in Google Sheets?
- Check if you copied the Web app URL correctly
- Make sure you clicked "Deploy" (not just "Save") in Apps Script
- Check browser console for errors (Press F12)
- Verify the script has permission to write to the sheet

### "Access Denied" error?
- Redeploy the script with "Execute as: Me" and "Who has access: Anyone"
- Re-authorize the script

### Players not receiving confirmation?
- Check internet connection
- Try clearing browser cache
- Make sure payment screenshot is uploaded

---

## Free Alternatives for File Storage

Since Google Sheets cannot store actual image files, here are free options:

1. **Telegram Bot** (Recommended)
   - Free unlimited storage
   - Easy for players to send images
   - Organizers can verify easily

2. **Google Drive Folder**
   - Create a shared Google Drive folder
   - Share link with players
   - Ask them to upload screenshots there with name

3. **WhatsApp Group**
   - Create a WhatsApp group
   - Players send screenshots there
   - Easy verification

4. **Cloudinary** (Free tier)
   - Free image hosting
   - Can integrate with website
   - 25 GB storage free

---

## Data Privacy & Security

- Google Sheets can only be accessed by people you share it with
- Player data is stored securely in your Google account
- You can delete data anytime
- Consider informing players that their data will be stored

---

## Support

If you need help:
1. Check the troubleshooting section above
2. Verify all steps were followed correctly
3. Test with sample data first
4. Contact organizers listed on the website

---

## Summary Checklist

- [ ] Created Google Sheet
- [ ] Set up Apps Script
- [ ] Deployed as Web app
- [ ] Copied Web app URL
- [ ] Updated index.html with the URL
- [ ] Tested with sample data
- [ ] Verified data appears in sheet
- [ ] Set up file verification method
- [ ] Website is ready for registrations!

---

**Good luck with TPL 2024!** 🏏
