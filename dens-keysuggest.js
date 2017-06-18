/*

Dennis Stopa

bol.com suggest
Google.nl suggest

*/

function getBolsuggest(keyword) {
    
  var bolSuggestUrl = 'http://zoeksuggesties.s-bol.com/extern/qs/OpenSearch/media_all/' + keyword;
  var response = UrlFetchApp.fetch(bolSuggestUrl);
  var keywords = JSON.parse(response.getContentText());
  
  return keywords;
  
}

function getGoogleSuggest(keyword) {

  var googleSuggestUrl = 'http://suggestqueries.google.com/complete/search?client=chrome&hl=nl&q=' + keyword;
  var response = UrlFetchApp.fetch(googleSuggestUrl);
  var keywords = JSON.parse(response.getContentText());

  return keywords;
}