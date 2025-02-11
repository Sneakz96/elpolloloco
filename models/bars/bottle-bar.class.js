class BottleBar extends DrawableObject {

    //SET VARIABLE
    percentage = 0;
    x = 40;
    y = 50;
    width = 200;
    height = 60;

    //IMAGES
    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png'
    ];

    // 
    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = this.x;
        this.y = 50;
        this.width = 200;
        this.height = 60;
        this.setPercentage(this.percentage);
    }

    //    
    setPercentage(percentage) {
        this.percentage = percentage; // => 0...5 
        let path = this.IMAGES[this.resolveBottleIndex()];
        this.img = this.imageCache[path];
    }

    // RETURN CURRENT PERCENTAGE OF BOTTLES
    resolveBottleIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage == 80) {
            return 4;
        } else if (this.percentage == 60) {
            return 3;
        } else if (this.percentage == 40) {
            return 2;
        } else if (this.percentage == 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
