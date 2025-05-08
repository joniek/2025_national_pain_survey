// Menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();

  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('Test 1', 'test1')
      .addItem('Test 2', 'test2')
      .addItem('Test 3', 'test3')
      .addSeparator()
      .addSubMenu(ui.createMenu('Clean Up')
        .addItem('Remove excess cells', 'cleanup_remove_excess_cells')
        .addItem('Remove excess cells', 'cleanup_remove_excess_cells'))
      // .addSubMenu(ui.createMenu('Sub-menu')
      //     .addItem('Second item', 'menuItem2'))
      .addToUi();
}

function test1(){
  name_the_ranges('sample_data');
}

function test2(){
}

function test3(){
}


function cleanup_remove_excess_cells(){
  delete_excess_cells('sample_data');
}

// Clean up new data source.
function clean_up(){
  // delete_excess_cells();

}

function name_the_ranges(sheet_name){

  var sheet = get_sheet(sheet_name);
  if (sheet != null){
    log_change(sheet_name, 'Name the ranges', 'Name the ranges');

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues();
    console.log(headers);
    console.log(headers[0].length);

    // for (let i = 0; i < headers[0].length)
  }


}



function insert_wa(){

}