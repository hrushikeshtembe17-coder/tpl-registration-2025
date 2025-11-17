// Google Apps Script for TPL Registration with Image Upload
// This version saves images to Google Drive

function doPost(e) {
  try {
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
        'Photo Link',
        'Payment Screenshot Link',
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
    const data = JSON.parse(e.postData.contents);
    Logger.log('Parsed data received');

    // Create a folder for this player's images in Google Drive
    const folderName = 'TPL_Registrations_' + new Date().getFullYear();
    let folder;
    const folders = DriveApp.getFoldersByName(folderName);
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }
    Logger.log('Using folder: ' + folderName);

    // Save photo to Google Drive (if provided)
    let photoLink = 'Not provided';
    if (data.photoBase64 && data.photoName) {
      try {
        Logger.log('Saving photo...');
        const photoBlob = Utilities.newBlob(
          Utilities.base64Decode(data.photoBase64.split(',')[1]),
          'image/jpeg',
          data.name + '_photo_' + Date.now() + '.jpg'
        );
        const photoFile = folder.createFile(photoBlob);
        photoFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        photoLink = photoFile.getUrl();
        Logger.log('Photo saved: ' + photoLink);
      } catch (photoError) {
        Logger.log('Photo save error: ' + photoError);
        photoLink = 'Error: ' + data.photoName;
      }
    }

    // Save payment screenshot to Google Drive (if provided)
    let screenshotLink = 'Not provided';
    if (data.screenshotBase64 && data.screenshotName) {
      try {
        Logger.log('Saving screenshot...');
        const screenshotBlob = Utilities.newBlob(
          Utilities.base64Decode(data.screenshotBase64.split(',')[1]),
          'image/jpeg',
          data.name + '_payment_' + Date.now() + '.jpg'
        );
        const screenshotFile = folder.createFile(screenshotBlob);
        screenshotFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        screenshotLink = screenshotFile.getUrl();
        Logger.log('Screenshot saved: ' + screenshotLink);
      } catch (screenshotError) {
        Logger.log('Screenshot save error: ' + screenshotError);
        screenshotLink = 'Error: ' + data.screenshotName;
      }
    }

    // Append the data to the sheet
    Logger.log('Adding row to sheet...');
    sheet.appendRow([
      data.timestamp,
      data.name,
      data.availability,
      data.tshirtSize,
      photoLink,
      screenshotLink,
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
      'message': 'Data and images saved successfully',
      'photoLink': photoLink,
      'screenshotLink': screenshotLink
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
  return ContentService.createTextOutput('TPL Registration System with Image Upload is active!');
}
