# TPL Registration System - Testing Guide

## How to Test if Email & Data Submission Works

### Step 1: Deploy the Google Apps Script

1. Go to https://script.google.com/
2. Open your TPL project
3. Click **Deploy** > **Manage deployments**
4. Check if deployment is active
5. Copy the Web app URL

### Step 2: Update the Website

1. Open `index.html`
2. Find line 516:
   ```javascript
   const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
   ```
3. Replace with your actual URL:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ACTUAL_URL/exec';
   ```
4. Save the file

### Step 3: Test with Sample Data

1. Open `index.html` in a browser
2. Click "आता नोंदणी करा!"
3. Fill the form with test data:
   - Availability: होय
   - Name: Test Player
   - T-shirt Size: M
   - Photo: Upload any image
4. Submit the form
5. Upload payment screenshot
6. Click "नोंदणी सबमिट करा"

### Step 4: Verify Success

#### Check 1: Browser Alert
You should see an alert: "नोंदणी आणि पेमेंट यशस्वी! 🎉"

#### Check 2: Google Sheet
1. Open your Google Sheet
2. You should see a new row with:
   - Timestamp
   - Test Player
   - होय
   - M (Medium)
   - Photo filename
   - Screenshot filename
   - ₹100
   - Pending Verification

#### Check 3: Email Inbox
1. Check inbox: hrushikesh.tembe17@extc.sce.edu.in
2. Look for email: "🏏 New TPL Registration - Test Player"
3. Email should contain all player details
4. Click "View All Registrations" button to verify link works

---

## Troubleshooting

### Problem: Data Not Appearing in Sheet

**Possible Causes:**
- Wrong Web app URL in index.html
- Script not deployed
- Script permissions not granted

**Solution:**
1. Check browser console (F12) for errors
2. Verify deployment URL is correct
3. Redeploy the script with "Execute as: Me" and "Anyone can access"

### Problem: Email Not Received

**Possible Causes:**
- Email in spam folder
- Script doesn't have email permissions
- Wrong email address in script

**Solution:**
1. Check spam/junk folder
2. In Apps Script, run the `sendEmailNotification` function manually to grant permissions
3. Verify email address in line 14 of google-apps-script.js

### Problem: "डेटा सबमिट करताना काही त्रुटी आली" Alert

**Possible Causes:**
- No internet connection
- CORS issue (expected with mode: 'no-cors')
- Script URL incorrect

**Solution:**
1. Check internet connection
2. Verify script URL in index.html line 516
3. The alert might show even if submission succeeded (due to CORS)
4. **Always check Google Sheet to confirm** - if data appears, submission worked!

---

## Understanding Success/Failure

### Current Behavior:

The website uses `mode: 'no-cors'` which means:
- ✅ Data is sent successfully
- ❌ Can't read response from server
- ✅ Success alert always shows (even if we can't verify response)
- ✅ **Best way to verify**: Check Google Sheet

### Why This Happens:

Google Apps Script web apps have CORS restrictions. Using `mode: 'no-cors'` allows the request to go through, but we can't read the response.

### Reliable Verification Method:

**Always check these 3 things after testing:**

1. **Google Sheet** - Does new row appear? ✅
2. **Email Inbox** - Did email arrive? ✅
3. **Browser Console** (F12) - Any errors? ❌

If both sheet and email work, system is functioning correctly!

---

## Manual Email Test

To test email separately:

1. Open your Google Apps Script editor
2. Add this test function:

```javascript
function testEmail() {
  const testData = {
    timestamp: new Date().toLocaleString(),
    name: 'Test Player',
    availability: 'होय',
    tshirtSize: 'M',
    photoName: 'test.jpg',
    screenshotName: 'payment.jpg',
    paymentAmount: '₹100',
    status: 'Pending Verification'
  };

  const spreadsheetUrl = SpreadsheetApp.getActiveSpreadsheet().getUrl();
  sendEmailNotification(testData, spreadsheetUrl);
}
```

3. Click Run ▶️
4. Authorize permissions if asked
5. Check email inbox

---

## Production Checklist

Before going live with real players:

- [ ] Google Sheet created and accessible
- [ ] Apps Script deployed as web app
- [ ] Web app URL updated in index.html
- [ ] Test registration completed successfully
- [ ] Data appears in Google Sheet
- [ ] Email received at hrushikesh.tembe17@extc.sce.edu.in
- [ ] All form fields working
- [ ] Payment QR code uploaded (gpay.jpeg)
- [ ] Contact numbers updated in website
- [ ] Countdown timer shows correct deadline

---

## Viewing Submission Logs

To see if script ran successfully:

1. Open Apps Script editor
2. Click **Executions** (clock icon on left)
3. You'll see:
   - ✅ Completed successfully
   - ❌ Failed (with error details)
   - ⏱️ Timestamp of each execution

This shows every time someone submitted the form!

---

## Getting Help

If problems persist:

1. Check **Executions** log in Apps Script
2. Look at browser console (F12) for JavaScript errors
3. Verify email in script matches: hrushikesh.tembe17@extc.sce.edu.in
4. Try redeploying the script
5. Test with incognito/private browser window

---

**Remember**: Even if you can't see success/failure response in browser, the Google Sheet and email are the source of truth!
