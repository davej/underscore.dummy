underscore.dummy
================

Underscore.dummy is an Underscore extension for creating dummy content. It's useful for prototyping an interface when you don't have real data available.

  
 
  
Generate _Lorem Ipsum_ Text
---------------------------

Generate dummy _"Lorem ipsum"_ text in words, sentences or paragraphs.

_API Examples:_

    _.loremIpsum(4, "words");
      -> "Sed diam nonumy eirmod"

    _.loremIpsum(1, "sentences");
      -> "Integer ac mauris vel ligula laoreet tristique."

  Outputs a string with 3 paragraphs seperated by the
  newline character
    _.loremIpsum(3, "paragraphs");
    
  Outputs a string with 5 paragraphs wrapped in <p> tags)
    _.loremIpsum(5, "paragraphs", {prepend:"<p>", append:"</p>"});

  
Generate Random String
----------------------

Generate a random string containing `length` (int) characters.
Handy for creating IDs for things like short URLs.

_API Examples:_

    _.randomString() -> "FfNtu5";
    _.randomString(8) -> "KDNBTTVt";
    _.randomString(10, "abc123") -> "31ab1b112c";

  
Generate Random Integer
-----------------------

Generate a random Int between `min` (int) and `max` (int).
Handy for file-sizes, random datetimes and lots of other things.

_API Examples:_  

    _.randomInt() -> 24; // Defaults to between 0 and 100
    _.randomInt(500, 1000) -> 697;

  
Generate Random Boolean
-----------------------

Generate a random Boolean (`true`/`false`).

_API Example:_

    _.randomBoolean() -> true; // (50/50 chance of true/false)
