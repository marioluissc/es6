class Message {
  constructor(text = '', created = Date.now()) {
    this.text = text;
    this.created = created;
  }
  get created() {
    return `${this._created}` ;
  }
  set created(created) {
    if (!created || isNaN(created)) {
      throw new Error('Invalid Created');
    }
    this._created = created;
  }
  toString() {
    return `Message created at ${this.created} - Text: ${this.text}`;
  }
}

class ImageMessage  extends Message {
  constructor (text = '', created = Date.now(), url = '', thumbnail = '' ) {
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }
  toString (){
    return `${super.toString()} - URL: ${this.url} - Thumbnail: ${this.thumbnail} `;
  }
}

var text = 'safsd';
var created = Date.now();

var duckMessage = {
  text,
  created
}

var emptyMessage = new Message();
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var photoMessage = new ImageMessage('Photo', Date.now(), 'URL2', 'www.');

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));
console.log(duckMessage);

console.log(textMessage instanceof ImageMessage);
console.log(textMessage instanceof Message);