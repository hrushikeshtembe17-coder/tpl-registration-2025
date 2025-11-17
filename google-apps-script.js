// Google Apps Script for TPL Registration Data Collection
// Instructions to set up:
// 1. Go to https://script.google.com/
// 2. Create a new project
// 3. Copy this entire code and paste it there
// 4. Click on "Deploy" > "New deployment"
// 5. Select type: "Web app"
// 6. Execute as: "Me"
// 7. Who has access: "Anyone"
// 8. Click "Deploy" and copy the Web app URL
// 9. Replace 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE' in index.html with this URL

function doPost(e) {
  try {
    // Get the active spreadsheet or create a new one
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // If this is the first time, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Player Name',
        'Availability (13-14 Dec)',
        'T-shirt Size',
        'Photo Filename',
        'Payment Screenshot',
        'Payment Amount',
        'Status',
        'Submission Date'
      ]);

      // Format headers
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setBackground('#667eea');
      headerRange.setFontColor('#ffffff');
      headerRange.setFontWeight('bold');
      headerRange.setFontSize(11);
    }

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);

    // Append the data to the sheet
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.availability,
      data.tshirtSize,
      data.photoName,
      data.screenshotName,
      data.paymentAmount,
      data.status,
      new Date().toLocaleDateString('en-IN')
    ]);

    // Auto-resize columns for better visibility
    sheet.autoResizeColumns(1, 9);

    // Email notification disabled - data only saved to Google Sheets
    // sendEmailNotification(data, spreadsheetUrl);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script is working
function doGet(e) {
  return ContentService.createTextOutput('TPL Registration System is active!');
}
