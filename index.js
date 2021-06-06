class Formatter {
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize (str){
   return str.replace(/[^A-Za-z0-9 '-]/g, '') ;
  }

  static titleize(strg){
    return strg.replace(/\b\w/g, l => l.toUpperCase())
  }
}