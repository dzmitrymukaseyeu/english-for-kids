class Dictionary {
  constructor() {
    Dictionary.initialize();
  }

  static initialize() {
    this.setA = [
      {
        text: 'open',
        translate: 'открыть',
        image: 'open.jpg',
        sound: 'open.mp3',
      },
      {
        text: 'cry',
        translate: 'плакать',
        image: 'cry.jpg',
        sound: 'cry.mp3',
      },
      {
        text: 'dance',
        translate: 'танцевать',
        image: 'dance.jpg',
        sound: 'dance.mp3',
      },
      {
        text: 'dive',
        translate: 'нырять',
        image: 'dive.jpg',
        sound: 'dive.mp3',
      },
      {
        text: 'draw',
        translate: 'рисовать',
        image: 'draw.jpg',
        sound: 'draw.mp3',
      },
      {
        text: 'fish',
        translate: 'ловить рыбу',
        image: 'fish.jpg',
        sound: 'fish.mp3',
      },
      {
        text: 'fly',
        translate: 'летать',
        image: 'fly.jpg',
        sound: 'fly.mp3',
      },
      {
        text: 'hug',
        translate: 'обнимать',
        image: 'hug.jpg',
        sound: 'hug.mp3',
      },
      {
        text: 'jump',
        translate: 'прыгать',
        image: 'jump.jpg',
        sound: 'jump.mp3',
      },
    ];
    this.setB = [
      {
        text: 'open',
        translate: 'открыть',
        image: 'open.jpg',
        sound: 'open.mp3',
      },
      {
        text: 'play',
        translate: 'играть',
        image: 'play.jpg',
        sound: 'play.mp3',
      },
      {
        text: 'point',
        translate: 'указывать',
        image: 'point.jpg',
        sound: 'point.mp3',
      },
      {
        text: 'ride',
        translate: 'ездить',
        image: 'ride.jpg',
        sound: 'ride.mp3',
      },
      {
        text: 'run',
        translate: 'бежать',
        image: 'run.jpg',
        sound: 'run.mp3',
      },
      {
        text: 'sing',
        translate: 'петь',
        image: 'sing.jpg',
        sound: 'sing.mp3',
      },
      {
        text: 'skip',
        translate: 'пропускать, прыгать',
        image: 'skip.jpg',
        sound: 'skip.mp3',
      },
      {
        text: 'swim',
        translate: 'плавать',
        image: 'swim.jpg',
        sound: 'swim.mp3',
      },
    ];
    this.setС = [
      {
        text: 'argue',
        translate: 'спорить',
        image: 'argue.jpg',
        sound: 'argue.mp3',
      },
      {
        text: 'build',
        translate: 'строить',
        image: 'build.jpg',
        sound: 'build.mp3',
      },
      {
        text: 'carry',
        translate: 'нести',
        image: 'carry.jpg',
        sound: 'carry.mp3',
      },
      {
        text: 'catch',
        translate: 'ловить',
        image: 'catch.jpg',
        sound: 'catch.mp3',
      },
      {
        text: 'drive',
        translate: 'водить машину',
        image: 'drive.jpg',
        sound: 'drive.mp3',
      },
      {
        text: 'drop',
        translate: 'падать',
        image: 'drop.jpg',
        sound: 'drop.mp3',
      },
      {
        text: 'pull',
        translate: 'тянуть',
        image: 'pull.jpg',
        sound: 'pull.mp3',
      },
      {
        text: 'push',
        translate: 'толкать',
        image: 'push.jpg',
        sound: 'push.mp3',
      },
    ];
    this.adjective = [
      {
        text: 'big',
        translate: 'большой',
        image: 'big.jpg',
        sound: 'big.mp3',
      },
      {
        text: 'small',
        translate: 'маленький',
        image: 'small.jpg',
        sound: 'small.mp3',
      },
      {
        text: 'fast',
        translate: 'быстрый',
        image: 'fast.jpg',
        sound: 'fast.mp3',
      },
      {
        text: 'slow',
        translate: 'медленный',
        image: 'slow.jpg',
        sound: 'slow.mp3',
      },
      {
        text: 'friendly',
        translate: 'дружелюбный',
        image: 'friendly.jpg',
        sound: 'friendly.mp3',
      },
      {
        text: 'unfriendly',
        translate: 'недружелюбный',
        image: 'unfriendly.jpg',
        sound: 'unfriendly.mp3',
      },
      {
        text: 'young',
        translate: 'молодой',
        image: 'young.jpg',
        sound: 'young.mp3',
      },
      {
        text: 'old',
        translate: 'старый',
        image: 'old.jpg',
        sound: 'old.mp3',
      },
    ];
    this.animalA = [
      {
        text: 'cat',
        translate: 'кошка',
        image: 'cat.jpg',
        sound: 'cat.mp3',
      },
      {
        text: 'chick',
        translate: 'цыпленок',
        image: 'chick.jpg',
        sound: 'chick.mp3',
      },
      {
        text: 'chicken',
        translate: 'курица',
        image: 'chicken.jpg',
        sound: 'chicken.mp3',
      },
      {
        text: 'dog',
        translate: 'собака',
        image: 'dog.jpg',
        sound: 'dog.mp3',
      },
      {
        text: 'horse',
        translate: 'лошадь',
        image: 'horse.jpg',
        sound: 'horse.mp3',
      },
      {
        text: 'pig',
        translate: 'свинья',
        image: 'pig.jpg',
        sound: 'pig.mp3',
      },
      {
        text: 'rabbit',
        translate: 'кролик',
        image: 'rabbit.jpg',
        sound: 'rabbit.mp3',
      },
      {
        text: 'sheep',
        translate: 'овца',
        image: 'sheep.jpg',
        sound: 'sheep.mp3',
      },
    ];
    this.animalB = [
      {
        text: 'bird',
        translate: 'птица',
        image: 'bird.jpg',
        sound: 'bird.mp3',
      },
      {
        text: 'fish',
        translate: 'рыба',
        image: 'fish1.jpg',
        sound: 'fish.mp3',
      },
      {
        text: 'frog',
        translate: 'лягушка',
        image: 'frog.jpg',
        sound: 'frog.mp3',
      },
      {
        text: 'giraffe',
        translate: 'жираф',
        image: 'giraffe.jpg',
        sound: 'giraffe.mp3',
      },
      {
        text: 'lion',
        translate: 'лев',
        image: 'lion.jpg',
        sound: 'lion.mp3',
      },
      {
        text: 'mouse',
        translate: 'мышь',
        image: 'mouse.jpg',
        sound: 'mouse.mp3',
      },
      {
        text: 'turtle',
        translate: 'черепаха',
        image: 'turtle.jpg',
        sound: 'turtle.mp3',
      },
      {
        text: 'dolphin',
        translate: 'дельфин',
        image: 'dolphin.jpg',
        sound: 'dolphin',
      },
    ];
    this.clothes = [
      {
        text: 'skirt',
        translate: 'юбка',
        image: 'skirt.jpg',
        sound: 'skirt.mp3',
      },
      {
        text: 'pants',
        translate: 'штаны',
        image: 'pants.jpg',
        sound: 'pants.mp3',
      },
      {
        text: 'blouse',
        translate: 'блузка',
        image: 'blouse.jpg',
        sound: 'blouse.mp3',
      },
      {
        text: 'dress',
        translate: 'платье',
        image: 'dress.jpg',
        sound: 'dress.mp3',
      },
      {
        text: 'boot',
        translate: 'ботинки',
        image: 'boot.jpg',
        sound: 'boot.mp3',
      },
      {
        text: 'shirt',
        translate: 'рубашка',
        image: 'shirt.jpg',
        sound: 'shirt.mp3',
      },
      {
        text: 'coat',
        translate: 'пальто',
        image: 'coat.jpg',
        sound: 'coat.mp3',
      },
      {
        text: 'shoe',
        translate: 'туфли',
        image: 'shoe.jpg',
        sound: 'shoe.mp3',
      },
    ];
    this.emotion = [
      {
        text: 'sad',
        translate: 'грустный',
        image: 'sad.jpg',
        sound: 'sad.mp3',
      },
      {
        text: 'angry',
        translate: 'сердитый',
        image: 'angry.jpg',
        sound: 'angry.mp3',
      },
      {
        text: 'happy',
        translate: 'веселый',
        image: 'happy.jpg',
        sound: 'happy.mp3',
      },
      {
        text: 'tired',
        translate: 'уставший',
        image: 'tired.jpg',
        sound: 'tired.mp3',
      },
      {
        text: 'surprised',
        translate: 'удивленный',
        image: 'surprised.jpg',
        sound: 'surprised.mp3',
      },
      {
        text: 'scared',
        translate: 'испуганный',
        image: 'scared.jpg',
        sound: 'scared.mp3',
      },
      {
        text: 'smile',
        translate: 'улыбка',
        image: 'smile.jpg',
        sound: 'smile.mp3',
      },
      {
        text: 'laugh',
        translate: 'смех',
        image: 'laugh.jpg',
        sound: 'laugh.mp3',
      },
    ];
  }
}

export default Dictionary;
