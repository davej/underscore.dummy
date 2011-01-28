// Version: **0.1**
//
// Underscore.dummy is an [Underscore](http://documentcloud.github.com/underscore/)
// extension for creating dummy content. It's useful for prototyping an
// interface when you don't have real data available.
//
// Copyright: [Dave Jeffery](http://www.davejeffery.com/), 2011.
// Underscore.dummy is freely distributable under the terms of the MIT license.

// Extend Underscore
// -----------------
// Extend underscore with the underscore.dummy functions
_.mixin({
  
  // Generate _Lorem Ipsum_ Text
  // ---------------------------
  //
  // Generates dummy _"Lorem ipsum"_ text in words, sentences or paragraphs.
  //
  // _API Examples:_
  //
  //     _(4).loremIpsum("words")
  //       -> "Sed diam nonumy eirmod"
  //
  //     _(1).loremIpsum("sentences") 
  //       -> "Integer ac mauris vel ligula laoreet tristique."
  //
  //     // Outputs a string with 3 paragraphs seperated by the
  //     // newline character
  //     _(3).loremIpsum("paragraphs") 
  //     
  //     // Outputs a string with 5 paragraphs wrapped in <p> tags)
  //     _(5).loremIpsum("paragraphs", "<p>", "</p>") 
  loremIpsum: function(number, type, prepend, append) {
    var str = "",
    // Each item in array represents a paragraph of _Lorem ipsum_ text.
    lorem_ipsum = [
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut odio. Nam sed est. Nam a risus et est iaculis adipiscing. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer ut justo. In tincidunt viverra nisl. Donec dictum malesuada magna. Curabitur id nibh auctor tellus adipiscing pharetra. Fusce vel justo non orci semper feugiat. Cras eu leo at purus ultrices tristique.",
      "Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      "Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
      "Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
      "Cras consequat magna ac tellus. Duis sed metus sit amet nunc faucibus blandit. Fusce tempus cursus urna. Sed bibendum, dolor et volutpat nonummy, wisi justo convallis neque, eu feugiat leo ligula nec quam. Nulla in mi. Integer ac mauris vel ligula laoreet tristique. Nunc eget tortor in diam rhoncus vehicula. Nulla quis mi. Fusce porta fringilla mauris. Vestibulum sed dolor. Aliquam tincidunt interdum arcu. Vestibulum eget lacus. Curabitur pellentesque egestas lectus. Duis dolor. Aliquam erat volutpat. Aliquam erat volutpat. Duis egestas rhoncus dui. Sed iaculis, metus et mollis tincidunt, mauris dolor ornare odio, in cursus justo felis sit amet arcu. Aenean sollicitudin. Duis lectus leo, eleifend mollis, consequat ut, venenatis at, ante.",
      "Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    ];
    

    if (type == "words") {
      var words = arguments.callee(null, "sentences").split(" ");
          random_word = _.randomInt(0, words.length);
            
      _(number || words.length).times(function(i){
        str += words[(random_word+i)%words.length] + " ";
      });
      // Capitalize first character. Remove punctuation and superfluous space
      // character at the end.
      str = (str.charAt(0).toUpperCase() + str.substring(1).toLowerCase())
          .replace(/[\.\,]/g, "").slice(0,-1);
    }
    
    if (type == "sentences") {
      var sentences = arguments.callee(null, "paragraphs", null, " ").split(". ");
      // Last array item is an empty string, so remove it.
      sentences.splice(-1,1);
      var random_sentence = _.randomInt(0, sentences.length-1);
            
      _(number || sentences.length).times(function(i){
        str += sentences[(random_sentence+i)%sentences.length] + ". ";
      });
      // Remove superfluous space at the end of last sentence.
      str = str.slice(0,-1);
    }
    
    if (type == "paragraphs") {        
      var random_paragraph = _.randomInt(0, lorem_ipsum.length);
            
      _(number || lorem_ipsum.length).times(function(i){
        // Prepend and append specified strings,
        // otherwise just add a newline `\n` after each paragraph.
        str +=  (prepend || "") +
                lorem_ipsum[(random_paragraph+i)%lorem_ipsum.length] +
                (append || "\n");
      });
    }
    return str;
  },
  
  // Generate Random String
  // ----------------------
  //
  // Generate a random string containing `length` (int) characters.
  // Handy for creating IDs for things like short URLs.
  //
  // _API Examples:_
  //
  //     _.randomString() -> "FfNtu5"
  //     _.randomString(8) -> "KDNBTTVt"
  //     _.randomString(10, "abc123") -> "31ab1b112c"
  randomString: function(length, available_chars) {
    var random_num = 0,
        str = "",
        chars = available_chars || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        
    _(length || 6).times(function(){
      random_num = Math.floor(Math.random() * chars.length);
      str += chars.substring(random_num,random_num+1);
    });
    return str;
  },
  
  // Generate Random Integer
  // -----------------------
  //
  // Generate a random Int between `min` (int) and `max` (int).
  // Handy for file-sizes, random datetimes and lots of other things.
  //
  // _API Examples:_  
  //
  //     _.randomInt() -> 24 // Defaults to between 0 and 100
  //     _.randomInt(500, 1000) -> 697
  randomInt: function(min, max) {
    var number = 0;
    
    while ((min || 1) > number) number = Math.floor(Math.random() * (max || 100));      
    return number;
  },
  
  // Generate Random Boolean
  // -----------------------
  //
  // Generate a random Boolean (`true`/`false`).
  //
  // _API Example:_
  //
  //     _.randomBoolean() -> true (50/50 chance of true/false)
  randomBoolean: function() {
    if (Math.random() > 0.5) return true; return false;
  }

// End `mixin`.
});