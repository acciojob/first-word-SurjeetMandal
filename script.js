function firstWord(s) {
  // your code here
	let res = s.trim();

	let space = res.indexOf(" ");

	return space !== -1 ? res.substring(0,space) : s;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
