const level1 = new Level(
    
    [
        new Chicken(400),
        new Chicken(450),
        new Chicken(475),
        new Endboss(),
       
    ],

    [
        new Cloud(305),
        new Cloud(530), 
        new Cloud(1305), 
        new Cloud(1430), 
        new Cloud(1650), 
        new Cloud(1855), 
    ],

    [
        new BackgroundObjects('img/5_background/layers/air.png', -719),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', -719), 
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', -719), 
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', -719), 

        new BackgroundObjects('img/5_background/layers/air.png', 0),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 0),
        new BackgroundObjects('img/5_background/layers/air.png', 719),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719), 
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719), 
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719), 

        new BackgroundObjects('img/5_background/layers/air.png', 719*2),
        new BackgroundObjects('img/5_background/layers/3_third_layer/1.png', 719*2),
        new BackgroundObjects('img/5_background/layers/2_second_layer/1.png', 719*2),
        new BackgroundObjects('img/5_background/layers/1_first_layer/1.png', 719*2),
        new BackgroundObjects('img/5_background/layers/air.png', 719*3),
        new BackgroundObjects('img/5_background/layers/3_third_layer/2.png', 719*3), 
        new BackgroundObjects('img/5_background/layers/2_second_layer/2.png', 719*3), 
        new BackgroundObjects('img/5_background/layers/1_first_layer/2.png', 719*3), 
    ],

    [
        new Bottles(305),
        new Bottles(530),
        new Bottles(1305),
        new Bottles(1430),
        new Bottles(1650),
        new Bottles(1855),
    ],

);