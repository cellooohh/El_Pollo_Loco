class Cloud extends MovableObject {
    width = 500;
    height = 250;
    y = 20;

    IMAGES_CLOUDS = [
        "img/5_background/layers/4_clouds/1.png",
    ];

    constructor(x) {
        super().loadImage('img/5_background/layers/4_clouds/1.png');
        this.loadImages(this.IMAGES_CLOUDS);

        this.x = x + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
          }, 1000 / 60);
      
          setInterval(() => {
            this.playAnimation(this.IMAGES_CLOUDS);
          }, 500);
        }

}