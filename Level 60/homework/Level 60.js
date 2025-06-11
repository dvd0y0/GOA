// # 1
console.log("=== Task 1: University Data ===");
const university = {
    name: "Tbilisi State University",
    departments: 7,
    website: "https://www.tsu.ge",
    ratings: {
        student1: 4.5,
        student2: 4.0,
        student3: 4.8
    }
};

console.log("University Object:", university);

console.log("Has scholarship property:", "scholarship" in university);

Object.assign(university, { studentsCount: 15000 });
console.log("After adding studentsCount:", university);

Object.freeze(university);
university.name = "New University"; 
console.log("After attempted modification:", university);

console.log("Is university object frozen?", Object.isFrozen(university));

console.log("\n=== Task 2: Sports Club Data ===");
const sportsClub = {
    clubName: "Dinamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
        title1: "National Championship 2020",
        title2: "Cup 2018",
        title3: "Super Cup 2019"
    }
};

console.log("Sports Club Properties:", Object.keys(sportsClub));

console.log("Sports Club Values:", Object.values(sportsClub));

console.log("Has sponsors property:", "sponsors" in sportsClub);

Object.assign(sportsClub, { stadiumCapacity: 55000 });
console.log("After adding stadiumCapacity:", sportsClub);

Object.freeze(sportsClub);
sportsClub.clubName = "New Club";
console.log("After attempted modification:", sportsClub);

console.log("Is sportsClub object frozen?", Object.isFrozen(sportsClub));

console.log("\n=== Task 3: Hotel Management ===");
const hotel = {
    hotelName: "Radisson Blu",
    stars: 5,
    location: "Tbilisi, Georgia",
    guestReviews: {
        guest1: 4.7,
        guest2: 4.9,
        guest3: 4.3
    }
};

console.log("Hotel Object:", hotel);

console.log("Has spa property:", "spa" in hotel);


Object.assign(hotel, { roomsCount: 200 });
console.log("After adding roomsCount:", hotel);

Object.freeze(hotel);
hotel.hotelName = "New Hotel";
console.log("After attempted modification:", hotel);

console.log("Is hotel object frozen?", Object.isFrozen(hotel));

console.log("\n=== Task 4: Cinema Database ===");
const cinema = {
    cinemaName: "Amirani Cinema",
    moviesCount: 10,
    location: "Tbilisi, Georgia",
    movieReviews: {
        user1: 4.2,
        user2: 4.6,
        user3: 3.9
    }
};

console.log("Cinema Object:", cinema);

console.log("Has vipSeats property:", "vipSeats" in cinema);

Object.assign(cinema, { ticketPrice: 15 });
console.log("After adding ticketPrice:", cinema);

Object.freeze(cinema);
cinema.cinemaName = "New Cinema"; 
console.log("After attempted modification:", cinema);

console.log("Is cinema object frozen?", Object.isFrozen(cinema));