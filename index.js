class Formatter {
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (str){
   return str.replace(/[^A-Za-z0-9 '-]/g, '') ;
  }

  static titleize(text){
    const splitText = text.split(" ")
    console.log(splitText)
  
    // gain access to each word
    // iterating over the word
    // need to keep track of prohibited words list
    // compare each word to see if it is in the prohibited words list
    // if word isn't in "list" caps it. if in list don't caps it
    // include word in string that will return at the end- regardless
    // make sure the first word is always caps- even if on the "list"
    // forEach.map
  }
}