class Collision extends World {
    pickupBottle() {
        this.bottlecount +=1;
        if (this.bottlecount < 5) {
            this.bottlecount = 5; 
        }
    }
}


//   hit() {
//     this.energy -= 5;
//     if (this.energy < 0) {
//       this.energy = 0;
//     } else {
//       this.lastHit = new Date().getTime();
//     }
//   }