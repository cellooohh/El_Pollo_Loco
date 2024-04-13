class Bottles extends DrawbleObject {
    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };
    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ]

    constructor(x) {
        super();
        this.loadImage(
            this.IMAGES_BOTTLES[
            Math.floor(Math.random() * this.IMAGES_BOTTLES.length)
            ]
        );
        this.x = x;
        this.y = 360;
        this.height = 60;
        this.width = 70;
    }

}