const messageInput =
	document.getElementById("message-input");
const checkMessageButton = document.getElementById(
	"check-message-btn"
);
const result = document.getElementById("result");

const helpRegex = /please help|assist me/i;
const dollarRegex =
	/[0-9]+ (?:hundred|thousand|million|billion)? dollars/i;

const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
