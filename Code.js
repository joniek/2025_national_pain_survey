// Menu
function onOpen() {
  var ui = SpreadsheetApp.getUi();

  // Or DocumentApp, SlidesApp or FormApp.
  ui.createMenu('Custom Menu')
      .addItem('Test 1', 'test1')
      .addItem('Test 2', 'test2')
      .addItem('Test 3', 'test3')
      // .addSeparator()
      // .addSubMenu(ui.createMenu('Sub-menu')
      //     .addItem('Second item', 'menuItem2'))
      .addToUi();
}

function test1(){
}

function test2(){
}

function test3(){
}


// Clean up new data source.
function clean_up(){
  delete_excess_cells();

}

function name_the_ranges(){

}



function insert_wa(){

}