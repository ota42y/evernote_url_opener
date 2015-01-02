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
  document.getElementById("userId").value = userId;
  document.getElementById("userShard").value = userShard;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
save_options);
