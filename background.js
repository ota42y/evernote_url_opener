var now_page = 0;

function getUserId(){
  return localStorage['userId'];
}

function getUserShard(){
  return localStorage['userShard'];
}

function setUserData(userId, userShard){
  localStorage['userId'] = userId;
  localStorage['userShard'] = userShard;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getUserData"){
    sendResponse({userId: getUserId(), userShard: getUserShard()});
  }
});
