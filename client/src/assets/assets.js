export const generateSeats = () => {
  const rows = 'ABCDEFGHIJ'.split('');
  const seatsPerRow = 8;
  const seats = [];

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      seats.push({
        number: `${row}${i}`,
        isAvailable: true
      });
    }
  });

  return seats;
};
// export const generateDate = ({movie}) => {
//   const movieDate = new Date(movie.time.date);
//   movieDate.setHours(0, 0, 0, 0);

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const tomorrow = new Date();
//   tomorrow.setHours(0, 0, 0, 0);
//   tomorrow.setDate(today.getDate() + 1);

//   if (movieDate.getTime() === today.getTime()) {
//     return "Today";
//   }
//   if (movieDate.getTime() === tomorrow.getTime()) {
//     return "Tomorrow";
//   }

//   // Return as "DD-MM-YYYY"
//   const day = String(movieDate.getDate()).padStart(2, '0');
//   const month = String(movieDate.getMonth() + 1).padStart(2, '0');
//   const year = movieDate.getFullYear();
//   return `${day}-${month}-${year}`;
// }
export const generateDate = ({ movie }) => {
  // Parse "DD-MM-YYYY" manually
  const [day, month, year] = movie.time.date.split('-').map(Number);
  const movieDate = new Date(year, month - 1, day); // JS months are 0-based
  movieDate.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date();
  tomorrow.setHours(0, 0, 0, 0);
  tomorrow.setDate(today.getDate() + 1);

  if (movieDate.getTime() === today.getTime()) {
    return "Today";
  }

  if (movieDate.getTime() === tomorrow.getTime()) {
    return "Tomorrow";
  }

  return `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
};



export const movies = [
    {
        name:"Ice Age",
        _id:'wuvuceoi',
        time:{
            year:"2010",
            date:"2025-07-30",
            showTime:["12AM","4PM","9PM"]
        },
        image:["/images/iceage.jpg","/images/iceage2.jpg"],
        genre:"Comedy/Action",
        level:"hollywood",
        description:"Ice Age is a 2002 American animated adventure comedy film produced by Blue Sky Studios and distributed by 20th Century Fox. The film was directed by Chris Wedge and co-directed by Carlos Saldanha from a screenplay by Michael Berg, Michael J. Wilson, and Peter Ackerman, based on a story by Wilson. It features the voices of Ray Romano, John Leguizamo, Denis Leary, Goran Višnjić, and Jack Black. Set during the days of the Pleistocene ice age, the film centers around three main characters—Manny (Romano), a no-nonsense woolly mammoth; Sid (Leguizamo), a loudmouthed ground sloth; and Diego (Leary), a sardonic smilodon—who come across a human baby and work together to return it to its tribe. Additionally, the film occasionally follows Scrat, a speechless (Wedge), who is perpetually searching for a place in the ground to bury his acorn.",
        ticketPrice:450,
        cast:[
            {
                name:"Actor",
                image:"/images/cast/ii1.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ii2.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ii3.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ii4.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ii5.jpg"
            },
        ],
        screen:3,
        seats:generateSeats()        
            
    },
    {
        name:"Pirates of the caribeans",
        _id:'wuvuceoj',
        time:{
            year:"2017",
            date:"2025-08-12",
            showTime:["11AM","3PM","10PM"]
        },
        image:["/images/pirates.jpg","/images/pirates2.jpg"],
        genre:"Comedy/Action",
        level:"hollywood",
        description:"Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise. The films' plots are set primarily in the Caribbean, based on a fictionalized version of the Golden Age of Piracy (c. 1650–1726) while also leading to the range of a mid-1700s setting.Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise. The films' plots are set primarily in the Caribbean, based on a fictionalized version of the Golden Age of Piracy (c. 1650–1726) while also leading to the range of a mid-1700s setting.Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise. The films' plots are set primarily in the Caribbean, based on a fictionalized version of the Golden Age of Piracy (c. 1650–1726) while also leading to the range of a mid-1700s setting",
        ticketPrice:400,
         cast:[
            {
                name:"Actor",
                image:"/images/cast/pi1.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/pi2.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/pi3.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/pi4.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/pi5.jpeg"
            }
        ],
        screen:4,
        seats:generateSeats() 
    },
    {
        name:"Jurassic World",
        _id:'wuvuceok',
        time:{
            year:"2018",
            date:"09-09-2025",
            showTime:["10AM","12PM","3PM"]
        },
        image:["/images/jurrasic.jpg","/images/jurrasic2.jpg"],
        genre:"Scientific/Adventure",
        level:"hollywood",
        description:"Jurassic World is a 2015 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Rick Jaffa, Amanda Silver, and Derek Connolly from a story by Jaffa and Silver.[5] It is the first installment in the Jurassic World series and the fourth installment overall in the Jurassic Park film series, following Jurassic Park III (2001). It stars an ensemble cast including Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan; Wong reprised his role from the original Jurassic Park film. Set 22 years after the events of Jurassic Park.Jurassic World is a 2015 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Rick Jaffa, Amanda Silver, and Derek Connolly from a story by Jaffa and Silver.[5] It is the first installment in the Jurassic World series and the fourth installment overall in the Jurassic Park film series, following Jurassic Park III (2001). It stars an ensemble cast including Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan; Wong reprised his role from the original Jurassic Park film. Set 22 years after the events of Jurassic Park.Jurassic World is a 2015 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Rick Jaffa, Amanda Silver, and Derek Connolly from a story by Jaffa and Silver.[5] It is the first installment in the Jurassic World series and the fourth installment overall in the Jurassic Park film series, following Jurassic Park III (2001). It stars an ensemble cast including Chris Pratt, Bryce Dallas Howard, Vincent D'Onofrio, Ty Simpkins, Nick Robinson, Omar Sy, BD Wong, and Irrfan Khan; Wong reprised his role from the original Jurassic Park film. Set 22 years after the events of Jurassic Park.",
        ticketPrice:500,
        cast:[
            {
                name:"Actor",
                image:"/images/cast/ji1.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ji2.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ji3.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ji4.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/ji5.jpg"
            }
        ],
        screen:3,
        seats:generateSeats() 
    },
    {
        name:"Godzillla X Kong",
        _id:'wuvuceol',
        time:{
            year:"2020",
            date:"2025-08-12",
            showTime:["1PM","4PM","9PM"]
        },
        image:["/images/godzilla.jpg","/images/godzilla2.jpg"],
        genre:"Comedy/Action",
        level:"hollywood",
        description:"Godzilla x Kong: The New Empire[a] is a 2024 American monster film directed and co-written by Adam Wingard. Produced by Legendary Pictures and distributed by Warner Bros. Pictures, it is the sequel to Godzilla vs. Kong (2021) and the fifth film in the Monsterverse franchise, also serving as the 38th film of the Godzilla franchise and 13th in the King Kong franchise. The film stars Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle, Alex Ferns, and Fala Chen. Hall, Henry, and Hottle reprise their roles from the previous film.Godzilla x Kong: The New Empire[a] is a 2024 American monster film directed and co-written by Adam Wingard. Produced by Legendary Pictures and distributed by Warner Bros. Pictures, it is the sequel to Godzilla vs. Kong (2021) and the fifth film in the Monsterverse franchise, also serving as the 38th film of the Godzilla franchise and 13th in the King Kong franchise. The film stars Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle, Alex Ferns, and Fala Chen. Hall, Henry, and Hottle reprise their roles from the previous film.Godzilla x Kong: The New Empire[a] is a 2024 American monster film directed and co-written by Adam Wingard. Produced by Legendary Pictures and distributed by Warner Bros. Pictures, it is the sequel to Godzilla vs. Kong (2021) and the fifth film in the Monsterverse franchise, also serving as the 38th film of the Godzilla franchise and 13th in the King Kong franchise. The film stars Rebecca Hall, Brian Tyree Henry, Dan Stevens, Kaylee Hottle, Alex Ferns, and Fala Chen. Hall, Henry, and Hottle reprise their roles from the previous film. ",
        ticketPrice:450,
        cast:[
            {
                name:"Actor",
                image:"/images/cast/gi1.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/gi2.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/gi3.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/gi4.jpg"
            },
            {
                name:"Actor",
                image:"/images/cast/gi5.jpg"
            }
        ],
        screen:1,
        seats:generateSeats() 
    },
    {
        name:"Fast and Furious",
        _id:'wuvuceom',
        time:{
            year:"2011",
            date:"2025-07-31",
            showTime:["11AM","5PM"]
        },
        image:["/images/fast.jpg","/images/fast2.jpg"],
        genre:"Action/Thriller",
        level:"hollywood",
        description:"Fast & Furious, also known as The Fast and the Furious, is an American action media franchise centered on a series of films revolving around street racing, heists, and spies. The franchise also includes short films, a television series, toys, video games, live shows, and theme park attractions. The films are distributed by Universal Pictures.Fast & Furious, also known as The Fast and the Furious, is an American action media franchise centered on a series of films revolving around street racing, heists, and spies. The franchise also includes short films, a television series, toys, video games, live shows, and theme park attractions. The films are distributed by Universal Pictures.Fast & Furious, also known as The Fast and the Furious, is an American action media franchise centered on a series of films revolving around street racing, heists, and spies. The franchise also includes short films, a television series, toys, video games, live shows, and theme park attractions. The films are distributed by Universal Pictures.",
        ticketPrice:450,
        cast:[
            {
                name:"Vin Diesel",
                image:"/images/cast/fi1.jpg"
            },
            {
                name:"Jason Santhom",
                image:"/images/cast/fi2.jpg"
            },
            {
                name:"Paul Walker",
                image:"/images/cast/fi3.jpg"
            },
            {
                name:"Dwayne Johnson",
                image:"/images/cast/fi4.jpeg"
            },
            {
                name:"jason momoa",
                image:"/images/cast/fi5.jpg"
            }
        ],
        screen:5,
        seats:generateSeats() 
    },
]
const movieGenre = [
    {
        name:"Comedy/Action",
        path:"comedyaction"
    },
    {
        name:"Mystery/Thriller",
        path:"mysterythriller"
    },
    {
        name:"Horror/thriller",
        path:"horrorthriller"
    },
    {
        name:"Romance/Love",
        path:"romancelove"
    },
]

export const bookings = [
    {
        name:"Nasrul",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"zz",
        time:"zz",
        bookedtime:"3"
    },
       {
        name:"karthik",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"kumar",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"jessie",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"bharath",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"john",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"irfan",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"",
        time:"",
        bookedtime:"3"
    },
       {
        name:"imran",
        moviename:"Ice Age",
        screen:"3",
        seats:['A1','A2'],
        ticketPrice:400,
        date:"zz",
        time:"zz",
        bookedtime:"3"
    },
]
