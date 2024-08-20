/**
 * Returns a column from a csv file at the given url as a list.
 * 
 * @param url {string} - the url to the raw csv contents
 * @param columnNumber {number} - the column you'd like as a list (the first column is 0)
 * @return column {list} - the list containing the specified column contents
 */
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

/**
 * Returns the specified column from a 2D Array.
 * 
 * @param matrix {2D array} - the 2D array
 * @param col {number} - the desired column (the first column is 0)
 * @return column {lsit} - the desired column as a list
 */
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
