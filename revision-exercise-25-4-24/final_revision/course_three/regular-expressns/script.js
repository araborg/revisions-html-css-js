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

const stockRegex =
	/(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;

const dearRegex =
	/(?:\s|^)d[e3][a4@]r fr[i1|][e3]nd(?:\s|$)/i;

const denyList = [
	helpRegex,
	dollarRegex,
	freeRegex,
	stockRegex,
	dearRegex,
];
