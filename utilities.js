// Gets the sheet by name.
function get_sheet(sheet_name){

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    try {
        var sheet = ss.getSheetByName(sheet_name);
        return sheet;
    } 
    catch (error){
        console.error('Error:', error.message);
        ss.toast('Error', error.message);
        return null;
    }

}


// Remove excess cells. 
function delete_excess_cells(sheet_name){
    var sheet = get_sheet(sheet_name);

    if (sheet != null){

        // Check that there are excess cells. 
        if (sheet.getMaxRows() > sheet.getLastRow()+1){
            sheet.deleteRows(sheet.getLastRow()+1, sheet.getMaxRows()-sheet.getLastRow()-1);
            log_change(sheet.getName(), 'Remove excess rows', 'Excess rows were removed.');
        }

        // Check that there are excess cells. 
        if (sheet.getMaxColumns() > sheet.getLastColumn()){            
            sheet.deleteColumns(sheet.getLastColumn()+1, sheet.getMaxColumns()-sheet.getLastColumn());
            log_change(sheet.getName(), 'Remove excess columns', 'Excess columns were removed.');
        }

    }

    log_change(sheet.getName(), 'Removing excess cells complete.','');

}


// Log changes.
function log_change(sheet_name, change_title, change_description){
    try {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('log');
        sheet.insertRowBefore(2);
        sheet.getRange(2,1,1,4).setValues([[new Date(), sheet_name, change_title, change_description]]);
        
        console.log(sheet.getName());    
    }
    catch (error){
        console.error('Error:', error.message)
    }
}

