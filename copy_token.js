'use strict';

chrome.tabs.query({ active: true, currentWindow: true }, function(result) {
  let tab = result[0];
  let myCode = "let tokenObject = JSON.parse(localStorage.getItem('token')); tokenObject['token'];";
//  let myCode = "let tokenObject = JSON.parse(localStorage.getItem('DktAuthToken')); tokenObject['accessToken'];";
  chrome.tabs.executeScript(tab['id'], { code: myCode }, function(result) {
    var dummy = document.getElementById('dummyTokenInput').value = result;
    document.getElementById('dummyTokenInput').select();
    document.execCommand('copy');
  });
});
