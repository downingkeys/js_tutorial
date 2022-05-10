//Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Makes the phrase LOUDER.
  this.louder = function louder() {
    let processedContent = this.content.toUpperCase();
    return processedContent;
  }
  console.log(Phrase);
}
