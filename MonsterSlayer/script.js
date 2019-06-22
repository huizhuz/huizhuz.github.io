var vm = new Vue({
    el: '#app',
    data: {
        myHp: 100,
        monsterHp: 100,
        gameLog: [],
        isShown: false
    },
    methods: {
        getRandomNumber: function () {
            return Math.floor(Math.random() * 10);
        },
        monsterHpCheck : function(monsterHpDown){
            if(this.monsterHp > 0) {
                this.gameLog.push("Player hits monster for " + monsterHpDown);
            } else if(this.myHp > 0) {
                this.monsterHp = 0;
                this.gameLog.push("You killed the monster!");
                this.isShown = false;
            } else {
                this.monsterHp = 0;
                this.myHp = 0;
                this.gameLog.push("You both died!");
                this.isShown = false;
            }
        },
        myHpCheck: function(myHpDown){
            if(this.myHp > 0) {
                this.gameLog.push("Monster hits player for " + myHpDown);
            } else if(this.monsterHp > 0) {
                this.myHp = 0;
                this.gameLog.push("You lost!");
            } else {
                this.myHp = 0;
                this.monsterHp = 0;
                if(this.gameLog.indexOf("You both died!")<=-1){
                    this.gameLog.push("You both died!");
                }
            }
        },
        startGame: function () {
            this.isShown = true;
            this.monsterHp = 100;
            this.myHp = 100;
            this.gameLog = [];
        },
        attackClicked: function () {
            let monsterHpDown = this.getRandomNumber() + 5;
            this.monsterHp = this.monsterHp - monsterHpDown;
            this.monsterHpCheck(monsterHpDown);

            if(this.monsterHp == 0) {
                return;
            }
            let myHpDown = this.getRandomNumber() + 5;
            this.myHp = this.myHp - myHpDown;
            this.myHpCheck(myHpDown);

        },

        specialClicked: function () {
            let monsterHpDown = this.getRandomNumber() + 10;
            this.monsterHp = this.monsterHp - monsterHpDown;
            this.monsterHpCheck(monsterHpDown);

            if(this.monsterHp == 0) {
                return;
            }

            let myHpDown = this.getRandomNumber() + 5;
            this.myHp = this.myHp - myHpDown;
            this.myHpCheck(myHpDown);
        },

        healClicked: function () {

            let myHpUp = this.getRandomNumber() + 15;
            let myHpDown = this.getRandomNumber() + 5;
            let beforeHeal = this.myHp;

            this.myHp = this.myHp + myHpUp;
            if (this.myHp > 100) {
                this.myHp = 100;
                this.gameLog.push("Player heals by " + (100 - beforeHeal));
            } else {
                this.gameLog.push("Player heals by " + myHpUp);
            }

            this.myHp = this.myHp - myHpDown;
            this.myHpCheck(myHpDown);
        },

        giveUp: function(){
            this.isShown = false;
        }
    },
    computed: {
        logSort: function(){
            return this.gameLog.reverse();
        }
    }
})