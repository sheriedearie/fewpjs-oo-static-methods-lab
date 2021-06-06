class Formatter {
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (str){
   return str.replace(/[^A-Za-z0-9 '-]/g, '') ;
  }

  static titleize(text){
   return text.replace("the, a, an, but, of, and, for, at, by,from", '').toLowerCase();
  }
}