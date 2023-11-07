class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        //load images/tile sprites
    }

    create() {
        //define keys
        this.keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.T);

        //word check
        this.wordCheck = 0; 

        //create word
        let word1 = "cat";
        let word2 = 'zxc';
        this.add.text(500, 250, word1);

        //fda
        let catCombo = this.input.keyboard.createCombo(word1, {
            resetOnWrongKey: true,
            maxKeyDelay: 0,
            resetOnMatch: true,
            deleteOnMatch: false
        });

        let zxcCombo = this.input.keyboard.createCombo(word2, {
            resetOnWrongKey: true,
            maxKeyDelay: 0,
            resetOnMatch: true,
            deleteOnMatch: false
        });

        this.input.keyboard.on('keycombomatch', (combo, event) => {
            if (this.wordCheck == 0){
                if (combo === catCombo) {
                    console.log("cat");
                };
            };
            if (this.wordCheck == 1){
                if (combo === zxcCombo) {
                    console.log("zxc");
                };
            };
        })

        //timer
        this.triggerTimer = this.time.addEvent({
            callback: this.randomize,
            callbackScope: this,
            delay: 5000,
            loop: true
        });
    
    }

    update() {

    }

    randomize(){
        //console.log("timer");
        this.wordCheck =  Math.floor(Math.random() * 2);
        //console.log(this.wordCheck);
    }
}