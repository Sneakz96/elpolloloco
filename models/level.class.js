class Level {

    level_end_x = 2750;
    
    enemies;
    clouds;
    backgroundObjects;
    coins;
    bottles;

    constructor(enemies, clouds, backgroundObjects, coins, bottles) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coins = coins;
        this.bottles = bottles;
    }

    startLevel() {
        this.enemies.forEach(enemy => {
            enemy.animate();
        });
        this.clouds.forEach(cloud => {
            cloud.animate();
        });
    }
}