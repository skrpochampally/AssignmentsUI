

function palindrome(string) {
	 return string == string.split("").reverse().join("");
}
alert(palindrome("PEEP"));

