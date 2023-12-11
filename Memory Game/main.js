const cards = document.querySelectorAll(".card")
let cardone, cardtwo
let score = 0
cards.forEach(card => {
    
    card.addEventListener('click', flip)
});

function shuffle() {
    const container = document.querySelector(".container");
    const div_card = Array.from(container.children);
    for (let i = div_card.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [div_card[i], div_card[j]] = [div_card[j], div_card[i]];
    }
    div_card.forEach(div => container.appendChild(div))
    cards.forEach(card => {
        card.classList.remove('flip');
    });
}

function flip(e) {
    let clicked = e.target;
    if (clicked !== cardone) {
        clicked.classList.add('flip')
        // if cardone return undeifne the condition is true
        if (!cardone) {
            return cardone = clicked
        }
        //incase cardone is defined exicute the rest of code
        cardtwo = clicked
        let oneimg = cardone.querySelectorAll("img")[1].src,
            twoimg = cardtwo.querySelectorAll("img")[1].src;
        matchimg(oneimg, twoimg)
        console.log(score)
        if (score == 8) {
            return winner()
        }
    }
}

function matchimg(img1, img2) {
    if (img1 == img2) {
        cardone = cardtwo = "";
        return score += 1
    }
    //incase if it does not match the condition
    console.log("not same")
    setTimeout(() => {
        cardone.classList.add('shake');
        cardtwo.classList.add('shake');
    }, 300);
    setTimeout(() => {
        cardone.classList.remove('flip', "shake");
        cardtwo.classList.remove('flip', "shake");
        cardone = cardtwo = "";
    }, 800);
}

function winner() {
    let winner = document.querySelector('.winner')
    winner.style.visibility = "visible"
}

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

