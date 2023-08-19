var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

const entries = [
  {
    "name": "Parks and Rec",
    "description": "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
    "url": "https://www.youtube.com/embed/5IZWeAwdJ-s"
},
{
    "name": "Brooklyn 99",
    "description": "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    "url": "https://www.youtube.com/embed/sEOuJ4z5aTc"
},
{
    "name": "Community",
    "description": "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
    "url": "https://www.youtube.com/embed/C4W4L9TLJa8"
},
{
    "name": "Sword Art Online",
    "description": "One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...",
    "url": "https://www.youtube.com/embed/6ohYYtxfDCg"
},
{
    "name": "Jack Ryan",
    "description": "Up-and-coming CIA analyst, Jack Ryan, is thrust into dangerous field assignments.",
    "url": "https://www.youtube.com/embed/AK-Mdu1Epy0"
},
{
    "name": "Succession",
    "description": "The Roy family is known for controlling the biggest media and entertainment company in the world. However, their world changes when their father steps down from the company.",
    "url": "https://www.youtube.com/embed/OzYxJV_rmE8"
},
{
    "name": "Megalobox",
    "description": "Junk Dog, an underground fighter with the alias of \"Gearless Joe\" sets out to join the worlds most prestigious mecha boxing championship, Megalonia.",
    "url": "https://www.youtube.com/embed/gVxLZityaR0"
},
{
    "name": "Reboot",
    "description": "Follows an early 2000s family sitcom that Hulu has rebooted and their dysfunctional cast that must deal with their unresolved issues in today's fast-changing world",
    "url": "https://www.youtube.com/embed/iIc74fSrs1g"
},
{
    "name": "Eighty Six",
    "description": "The Republic of San Magnolia is at war with its neighboring country, the Empire of Giad. Both sides use unmanned drones to conduct a \"war without casualties\". The story follows Lena as she commands a squad of drones called the 86",
    "url": "https://www.youtube.com/embed/VSdS29SDvn4"
},
{
    "name": "only Murderes in the Building",
    "description": "Three strangers - who live in the same New York City apartment building and share an obsession with true crime - suddenly find themselves embroiled in a murder.",
    "url": "https://www.youtube.com/embed/uTtaNEy3PDw"
},
{
    "name": "Haikyuu",
    "description": "Determined to be like the volleyball championship's star player nicknamed \"the small giant\", Shoyo joins his school's volleyball club.",
    "url": "https://www.youtube.com/embed/JOGp2c7-cKc"
},
{
    "name": "Erased",
    "description": "29-year-old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother's death, which began with a series of kidnappings while he was in 5th grade.",
    "url": "https://www.youtube.com/embed/DwmxEAWjTQQ"
},
{
    "name": "The Ranch",
    "description": "The son of a Colorado rancher returns home from a semi-pro football career to run the family business.",
    "url": "https://www.youtube.com/embed/epCvKyjH7g8"
},
{
    "name": "The wheel of time",
    "description": "Set in a high fantasy world where magic exists, but only some can access it, a woman named Moiraine crosses paths with five young men and women.",
    "url": "https://www.youtube.com/embed/11ZozKfRqvA"
},
{
    "name": "The office",
    "description": "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
    "url": "https://www.youtube.com/embed/tNcDHWpselE"
},
{
    "name": "Attack on Titan",
    "description": "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    "url": "https://www.youtube.com/embed/LV-nazLVmgo"
},
{
    "name": "Demon slayer",
    "description": "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    "url": "https://www.youtube.com/embed/VQGCKyvzIM4"
},
{
    "name": "Ranking of Kings",
    "description": "The people of the kingdom look down on the young Prince Bojji, who can neither hear nor speak. They call him \"The Useless Prince\" while jeering at his supposed foolishness.",
    "url": "https://www.youtube.com/embed/Tr1ahorojPg"
},
{
    "name": "shaman King",
    "description": "Shaman King follows the adventures of a 13-year-old shaman and his teammate a samurai warrior spirit, who traverse the world fighting evil spirits and misguided shamans on their journey to be the next Shaman King.",
    "url": "https://www.youtube.com/embed/rV8RZrZskdk"
}, {
  "name": "stay close",
  "description": "The lives of a photojournalist, a soccer mom and a homicide detective are disturbed by a terrible event from the past.",
  "url": "https://www.youtube.com/embed/nonC9TyX9hM"
},
{
  "name": "HTGAWM",
  "description": "A\u00a0group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives.",
  "url": "https://www.youtube.com/embed/dkb-aBaxkVk"
},
{
  "name": "Beef",
  "description": "Two people let a road rage incident burrow into their minds and slowly consume their every thought and action.",
  "url": "https://www.youtube.com/embed/AFPIMHBzGDs"
},
{
  "name": "Citadel",
  "description": "Global spy agency Citadel has fallen, and its agents' memories were wiped clean. Now the powerful syndicate, Manticore, is rising in the void. Can the Citadel agents recollect their past and summon the strength to fight back?",
  "url": "https://www.youtube.com/embed/O0JG6V-12ac"
},
{
  "name": "Triada",
  "description": "It follows Becca, a forensics expert who, when investigating a murder, realizes that the body of the victim looks exactly like her.",
  "url": "https://www.youtube.com/embed/wSZUISc0ESE"
},
{
  "name": "From",
  "description": "Unravel the mystery of a city in middle U.S.A. that imprisons everyone who enters. As the residents struggle to maintain a sense of normality and seek a way out, they must also survive the threats of the surrounding forest.",
  "url": "https://www.youtube.com/embed/pDHqAj4eJcM"
},
{
  "name": "Black bird",
  "description": "After Jimmy Keene is sentenced to 10 years in a minimum security prison without parole, he cuts a deal with the FBI to enter maximum-security prison for the criminally insane and befriend a suspected serial killer, Larry Hall (Paul Walter Hauser). Keene's job is to elicit a confession from Hall in order to slam the door on Hall's appeal and find the buried bodies of as many as eighteen women. But is Hall a serial killer? Or a serial confessor?",
  "url": "https://www.youtube.com/embed/aH1FOkJys3Y"
},
{
  "name": "Severance",
  "description": "Mark leads a team of office workers whose memories have been surgically divided between their work and personal lives. When a mysterious colleague appears outside of work, it begins a journey to discover the truth about their jobs.",
  "url": "https://www.youtube.com/embed/xEQP4VVuyrY"
},
{
  "name": "Mindhunter",
  "description": "In the late 1970s, two FBI agents broaden the realm of criminal science by investigating the psychology behind murder and end up getting too close to real-life monsters.",
  "url": "https://www.youtube.com/embed/DHJO6VR6TYY"
},
{
  "name": "The last ship",
  "description": "The crew of a naval destroyer is forced to confront the reality of a new existence when a pandemic kills off most of the earth's population.",
  "url": "https://www.youtube.com/embed/5ELd2aKFDXs"
},
{
  "name": "Stranger Things",
  "description": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
  "url": "https://www.youtube.com/embed/b9EkMc79ZSU"
},
{
  "name": "Tom clancy's Jack Ryan",
  "description": "Up-and-coming CIA analyst, Jack Ryan, is thrust into dangerous field assignments.",
  "url": "https://www.youtube.com/embed/AK-Mdu1Epy0"
},
{
  "name": "Good girls",
  "description": "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take back their power.",
  "url": "https://www.youtube.com/embed/kbjIaPzODs0"
},
{
  "name": "love& death",
  "description": "Two churchgoing couples enjoy small town family life in Texas - until somebody picks up an axe.",
  "url": "https://www.youtube.com/embed/FlbNJJwc4jA"
},
{
  "name": "Clickbait",
  "description": "When family man Nick Brewer is abducted in a crime with a sinister online twist, those closest to him race to uncover who is behind it and why.",
  "url": "https://www.youtube.com/embed/JZJo0BFZDQ8"
},
{
  "name": "Why woman kill",
  "description": "An anthology series that follows three women in different decades all living in the same house, as they deal with infidelity and betrayals in their marriages.",
  "url": "https://www.youtube.com/embed/rFYNqmKdaoI"
},
{
  "name": "The patient",
  "description": "A psychotherapist finds himself held prisoner by a serial killer who demands he help him curb his homicidal urges",
  "url": "https://www.youtube.com/embed/5LYJ7OpOQBA"
},
{
  "name": "Outlander",
  "description": "Claire Beauchamp Randall, a nurse in World War II, mysteriously goes back in time to Scotland in 1743. There, she meets a dashing Highland warrior and gets drawn into an epic rebellion.",
  "url": "https://www.youtube.com/embed/PFFKjptRr7Y"
},
{
  "name": "Prision break",
  "description": "A structural engineer installs himself in a prison he helped design, in order to save his falsely accused brother from a death sentence by breaking themselves out from the inside.",
  "url": "https://www.youtube.com/embed/AL9zLctDJaU"
}
];

const bracketSchema = new mongoose.Schema({
  round: Number,
  matchNumber: Number,
  entry1: Object,
  entry2: Object,
  winner: Object,
  isCurrent: { type: Boolean, default: false }, // Add isCurrent field
});
const Bracket = mongoose.model("Bracket", bracketSchema);

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to seed and shuffle the entries
function seedAndShuffle(entries) {
  const seededEntries = entries.map((entry) => ({
    seed: getRandomNumber(1, 8), // Adjust the range as needed
    entry,
  }));

  seededEntries.sort((a, b) => a.seed - b.seed);

  return seededEntries.map((entry) => entry);
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({ title: "Hello World" });
});

router.get("/bracket/new", async (req, res) => {
  //const entries = req.body.entries; // Array of entries provided in the request body

  if (!Array.isArray(entries) || entries.length < 2) {
    res.status(400).json({
      error: "Invalid input. The bracket requires at least 2 entries.",
    });
    return;
  }

  try {
    // Clear the existing bracket data from the database before creating a new one
    await Bracket.deleteMany({});

    // Shuffle the entries randomly
    const shuffledEntries = seedAndShuffle(entries);

    // Determine the number of rounds based on the number of entries
    const numRounds = Math.ceil(Math.log2(entries.length));

    // Create the bracket with all the matches for each round
    const bracket = [];
    let matchNumber = 1;
    let currentIndex = 0;

    for (let round = 1; round <= numRounds; round++) {
      const numMatches = entries.length / Math.pow(2, round);
      for (let i = 0; i < numMatches; i++) {
        const match = {
          round,
          matchNumber,
          isCurrent: round === 1 && i === 0, // Set isCurrent to true for the first match in round 1
          entry1: shuffledEntries[currentIndex],
          entry2: shuffledEntries[currentIndex + 1],
          winner: null,
        };
        bracket.push(match);
        currentIndex += 2;
        matchNumber++;
      }
    }

    // Save the bracket to the database
    await Bracket.insertMany(bracket);

    res.json({ message: "Bracket created successfully", bracket });
  } catch (error) {
    res.status(500).json({ error: "Failed to create bracket" });
  }
});

router.get("/bracket", async (req, res) => {
  var bracket = await Bracket.find();
  if (!bracket) {
    res.status(500).json({ error: "Failed to create bracket" });
    return;
  }
  res.json({ message: "Bracket created successfully", bracket });
});

router.get("/bracket/bout", async (req, res) => {
  // Fetch the current bout from MongoDB based on the isCurrent field
  try {
    const currentBout = await Bracket.findOne({ isCurrent: true });
    if (!currentBout) {
      res.status(404).json({ error: "Current bout not found" });
      return;
    }

    res.json(currentBout);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch current bout data" });
  }
});

router.post("/bracket/bout/:round/:matchNumber", async (req, res) => {
  const round = parseInt(req.params.round, 10);
  console.log("Round", round);
  const matchNumber = parseInt(req.params.matchNumber, 10);
  var winner = { entry: req.body.winner }; // The winner provided in the request body

  if (
    isNaN(round) ||
    isNaN(matchNumber) ||
    round < 1 ||
    matchNumber < 1 ||
    !winner
  ) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }

  // Find the current bout in MongoDB based on the provided round and matchNumber
  try {
    const currentBout = await Bracket.findOne({
      round,
      matchNumber,
      isCurrent: true,
    });
    if (!currentBout) {
      res.status(404).json({ error: "Current bout not found" });
      return;
    }
    if (currentBout.matchNumber == entries.length - 1) {
      currentBout.winner = winner;
      try {
        console.log("done");
        var test = await currentBout.save();
      } catch (error) {
        console.log(error);
      }
      res.status(200).json({ won: true, data: winner });
      return;
    }
    // Update the winner and mark the current bout as completed
    currentBout.isCurrent = false;
    currentBout.winner = winner;
    try {
      var test = await currentBout.save();
    } catch (error) {
      console.log(error);
    }

    // Next bout
    var nextMatchNum = matchNumber + 1;
    var nextRoundNum = round + 1;
    var nextBout = await Bracket.findOne({ round, matchNumber: nextMatchNum });
    if (!nextBout) {
      nextBout = await Bracket.findOne({
        round: nextRoundNum,
        matchNumber: nextMatchNum,
      });
    }
    nextBout.isCurrent = true;
    var test = await nextBout.save();
    // console.log(test);
    // res.status(200).json({ data: test });
    // return

    //advance winner to next round
    console.log(winner);
    var nextRoundMatch;
    while (!nextRoundMatch) {
      nextRoundMatch = await Bracket.findOne({
        round: nextRoundNum,
        matchNumber: nextMatchNum,
      });
      nextMatchNum++;
      if (nextRoundMatch) {
        if (nextRoundMatch.entry1 && nextRoundMatch.entry2) {
          nextRoundMatch = null;
        }
      }
    }
    if (nextRoundMatch.entry1) {
      nextRoundMatch.entry2 = winner;
    } else {
      nextRoundMatch.entry1 = winner;
    }

    var success = await nextRoundMatch.save();
    console.log("Success", success);

    res.json({ message: "Winner selected successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to select winner" });
  }
});

router.get("/series", function (req, res, next) {
  res.json({
    series1: {
      name: "Scrubs",
      description:
        'In the unreal world of Sacred Heart Hospital, intern John "J.D." Dorian learns the ways of medicine, friendship and life.',
      url: "https://www.youtube.com/embed/Ji6-Pbfypys",
    },
    series2: {
      name: "House",
      description:
        "An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
      url: "https://www.youtube.com/embed/MczMB8nU1sY",
    },
  });
});

module.exports = router;
