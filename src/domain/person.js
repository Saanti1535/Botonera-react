export class Person {
  constructor(id, name, imgPath, audioPaths) {
    this.id = id;
    this.name = name;
    this.img = imgPath;
    this.audios = audioPaths || [];
    this.convertToAudio();
  }

  convertToAudio() {
    this.audios = this.audios.map((audio) => new Audio(audio));
  }
}
