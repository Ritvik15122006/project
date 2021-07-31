

class Security {

    constructor() {
        if (gameState === 1) {
            this.access1 = createInput("Code1")
            this.access1.position(500, 250);
            this.access1.style('background', 'white');

            this.button1 = createButton('Check');
            this.button1.position(500, 280);
            this.button1.style('background', 'lightgrey');
        }
        if (gameState === 2) {
            this.access2 = createInput("Code1")
            this.access2.position(700, 190);
            this.access2.style('background', 'white');

            this.button2 = createButton('Check');
            this.button2.position(700, 220);
            this.button2.style('background', 'lightgrey');
        }
        if (gameState === 3) {
            this.access3 = createInput("Code1")
            this.access3.position(100, 290);
            this.access3.style('background', 'white');

            this.button3 = createButton('Check');
            this.button3.position(100, 320);
            this.button3.style('background', 'lightgrey');
        }

        this.greeting = createElement('h2');
        this.title = createElement('h2');

        this.greeting2 = createElement('h2');
        this.title2 = createElement('h2');

        this.greeting3 = createElement('h2');
        this.title3 = createElement('h2');
    }

    display() {
        if (gameState === 1) {
            this.title.html("M O O S I H T E");
            this.title.position(400, 180);
            this.greeting.html("Hint: A thick, smooth drink of fresh Fruit pureed with Milk, Yogurt, or Ice cream. !! ")
            this.greeting.position(200, 130);
            this.button1.mousePressed(() => {
                if (system.authenticate(accessCode1, this.access1.value())) {

                    const accessCode1 = "SMOOTHIE";
                   

                    this.button1.hide();
                    this.access1.hide();
                    this.greeting.hide();
                    this.title.hide();
                    score++;
                }
                gameState=2
            });
        }
        if (gameState === 2) {

            this.title2.html("C U T N I F O N");
            this.title2.position(400, 180);
            this.greeting2.html("Hint: Performs a particular task  !! ")
            this.greeting2.position(200, 130);
            this.button2.mousePressed(() => {
                if (system.authenticate(accessCode2, this.access2.value())) {
                    this.button2.hide();
                    this.access2.hide();
                    this.greeting2.hide();
                    this.title2.hide();

                    score++;
                    textSize(30);
                    fill("black");
                    a=text("Score: " + score, 450, 50);
                    
                    
                }
            });
        }
        if (gameState === 3) {
            this.button3.mousePressed(() => {
                if (system.authenticate(accessCode3, this.access3.value())) {
                    this.button3.hide();
                    this.access3.hide();
                    score++;
                }
            });
        }
    }
}