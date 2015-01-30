// Saves options to chrome.storage
function save_options() {
  var userId = document.getElementById('userId').value;
  var userShard = document.getElementById('userShard').value;
  chrome.extension.getBackgroundPage().setUserData(userId, userShard);
  document.getElementById("result").innerText = "saved";
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  userId = chrome.extension.getBackgroundPage().getUserId();
  userShard = chrome.extension.getBackgroundPage().getUserShard();
  fill_data(userShard, userId);
}

function fill_data(userShard, userId){
  document.getElementById("userShard").value = userShard;
  document.getElementById("userId").value = userId;
}

// when evernote url exist, pase id and fill text box and save.
function auto_fill(){
  var url = document.getElementById('evernoteUrl').value;

  m = url.match(/^https:\/\/www.evernote.com\/shard\/(.*)\/.*\/(.*)\/(.*)\//)
  if(m && m[1] && m[2]){
    fill_data(m[1], m[2])
    save_options();
    document.getElementById("fillResult").innerText = "success";
    return;
  }

  m = url.match(/^https:\/\/www.evernote.com\/shard\/(.*)\/.*\/(.*)\/(.*)\//)
  if(m && m[1] && m[2]){
    fill_data(m[1], m[2])
    save_options();
    document.getElementById("fillResult").innerText = "success";
    return;
  }
  document.getElementById("fillResult").innerText = "not set url";
}

window.addEventListener("DOMContentLoaded", function(){
  restore_options();
  document.getElementById('save').addEventListener('click',save_options);
  document.getElementById('fill').addEventListener('click',auto_fill);
}, false);
