/**
 * Write a function `commonCharacters(str1, str2)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `str1`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

//Works for any number of input strings:
var commonCharacters = function(string1, string2) {
	//var str1=string1.split(" ");
	//var str2=string2.split(" ");
    var common = " ";
    for(var i=0;i<string1.length;i++){
    	ch=string1.charAt(i);
  	   if(string2.indexOf(ch) != -1){
  	   		common=common+ch;
  	   		
  	   }
  	}
  	return common;
};





