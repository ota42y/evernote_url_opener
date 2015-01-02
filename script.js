function openEvernote(note_id){
	chrome.runtime.sendMessage({method: "getUserData"}, function(response) {
		var userId = response.userId;
		var userShard = response.userShard;
		if(userId && userShard){
			note_url = "evernote:///view/" + userId + "/" + userShard + "/" + note_id + "/" + note_id + "/";
			console.log("open " + note_url)
			location.href = note_url;
		}
	});
}

var url = location.href;

var m;

// note page(already logined)
m = url.match(/^https:\/\/www.evernote.com\/shard\/.*\/view\/notebook\/([^#]*)/)
if(m){
	openEvernote(m[1]);
}

// https://www.evernote.com/view/notebook/NOTE_ID#st=p&n=NOTE_ID
// note page(not login) -> login page -> this page
m = url.match(/^https:\/\/www.evernote.com\/view\/notebook\/([^#]*)/)
if(m){
	openEvernote(m[1]);
}

// note link
// https://www.evernote.com/shard/USER_SHARD/WORD/USER_ID/NOTE_ID/
m = url.match(/^https:\/\/www.evernote.com\/shard\/.*\/.*\/.*\/(.*)\//)
if(m){
	openEvernote(m[1]);
}

m = url.match(/^https:\/\/www.evernote.com\/Login.action\?targetUrl=%2Fview%2Fnotebook%2F([^#]*)/)
if(m){
	openEvernote(m[1]);
}

m = url.match(/^https:\/\/www.evernote.com\/notelink\/Login.action\?targetUrl=.*%2F(.*)%2F/)
if(m){
	openEvernote(m[1]);
}
