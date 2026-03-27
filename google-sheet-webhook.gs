const SHEET_NAME = 'NameSubmissions';

function getSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error(`Sheet named "${SHEET_NAME}" was not found.`);
  }
  return sheet;
}

function doPost(e) {
  try {
    const sheet = getSheet_();

    const name = (e.parameter.name || '').toString().trim();
    const submittedAt = (e.parameter.submittedAt || new Date().toISOString()).toString();

    if (!name) {
      return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'Name is required.' }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    sheet.appendRow([submittedAt, name]);

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: error && error.message ? error.message : 'Unknown error' }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
