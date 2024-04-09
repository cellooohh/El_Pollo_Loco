class StatusBarBottle extends DrawbleObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'

    ]

    quantity = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 35;
        this.y = 100;
        this.width = 200;
        this.height = 60;
        this.setQuantity(0);
    }

    setQuantity(quantity) {
        this.quantity = quantity;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

      resolveImageIndex() {
        if (this.quantity == 100) {
          return 5;
        } else if (this.quantity > 80) {
          return 4;
        } else if (this.quantity > 60) {
          return 3;
        } else if (this.quantity > 40) {
          return 2;
        } else if (this.quantity > 20) {
          return 1;
        } else {
          return 0;
        }
      }


}