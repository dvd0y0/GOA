let img1 = ['1.jpg', '2.jpg', '3.jpg'];

let num = 0;

function next() {
    let img = document.querySelector('img');
    num++;
    if(num >= img1.length) {
        num = 0;
    };

    img.src = img1[num];
}

function back()  {
    let img = document.querySelector('img');
    num--;

    if(num < 0) {
        num = img1.length - 1;
    };

        img.src = img1[num];
}

// ჩვენ იმიტომ ქვჭირდება რომ გავალამაზოტ საიტი და გავხადოთ უფრო ადვილი მომხმარებისთვის ან კიდე შეიძლება გააკეთო პროქტები და რომ უფრო ადვილად მომხმარებელმა დაათვალიეროს სურათები ან კიდე კომიქსების საიტზე გამოდგება ან წიგნივით 