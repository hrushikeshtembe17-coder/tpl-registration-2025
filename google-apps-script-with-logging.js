// Google Apps Script for TPL Registration Data Collection (WITH LOGGING)
// Instructions to set up:
// 1. Go to your Google Sheet
// 2. Click Extensions → Apps Script
// 3. Copy this entire code and paste it there
// 4. Click on "Deploy" > "New deployment"
// 5. Select type: "Web app"
// 6. Execute as: "Me"
// 7. Who has access: "Anyone"
// 8. Click "Deploy" and copy the Web app URL
// 9. Replace URL in index.html with this URL

function doPost(e) {
  try {
    // Log that we received a request
    Logger.log('Received POST request');

    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    Logger.log('Got spreadsheet: ' + SpreadsheetApp.getActiveSpreadsheet().getName());

    // If this is the first time, add headers
    if (sheet.getLastRow() === 0) {
      Logger.log('Adding headers...');
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
      Logger.log('Headers added');
    }

    // Parse the incoming data
    Logger.log('Parsing data...');
    Logger.log('Raw postData: ' + e.postData.contents);
    const data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data: ' + JSON.stringify(data));

    // Append the data to the sheet
    Logger.log('Adding row to sheet...');
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
    Logger.log('Row added successfully');

    // Auto-resize columns for better visibility
    sheet.autoResizeColumns(1, 9);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Data saved successfully',
      'rowCount': sheet.getLastRow()
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error
    Logger.log('ERROR: ' + error.toString());

    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script is working
function doGet(e) {
  Logger.log('Received GET request');
  return ContentService.createTextOutput('TPL Registration System is active! Logs enabled.');
}
