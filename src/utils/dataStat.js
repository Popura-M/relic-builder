const mainStatHead = [{ id: 1, name: "HP", base: 112.896, perLv: 1.4, max: 705.6 }];

const mainStatHand = [{ id: 1, name: "ATK", base: 56.448, perLv: 19.7568, max: 352.8 }];

const mainStatBody = [
  { id: 1, name: "HP%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 2, name: "ATK%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 3, name: "DEF%", base: 8.64, perLv: 3.024, max: 54 },
  { id: 4, name: "Crit Rate", base: 5.184, perLv: 1.8144, max: 32.4 },
  { id: 5, name: "Crit DMG", base: 10.368, perLv: 3.6288, max: 64.8 },
  { id: 6, name: "Outgoing Healing", base: 5.5296, perLv: 1.9354, max: 34.5606 },
  { id: 7, name: "Effect HIT Rate", base: 6.912, perLv: 2.4192, max: 43.2 },
];

const mainStatFeet = [
  { id: 1, name: "HP%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 2, name: "ATK%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 3, name: "DEF%", base: 8.64, perLv: 3.024, max: 54 },
  { id: 4, name: "Speed", base: 4.032, perLv: 1.4, max: 25.032 },
];

const mainStatPlanar = [
  { id: 1, name: "HP%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 2, name: "ATK%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 3, name: "DEF%", base: 8.64, perLv: 3.024, max: 54 },
  { id: 4, name: "Physical Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 5, name: "Fire Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 6, name: "Ice Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 7, name: "Lightning Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 8, name: "Wind Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 9, name: "Quantum Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
  { id: 10, name: "Imaginary Damage", base: 6.2208, perLv: 2.1773, max: 38.8803 },
];

const mainStatLink = [
  { id: 1, name: "Break Effect", base: 10.368, perLv: 3.6277, max: 64.8 },
  { id: 2, name: "Energy Regeneration Rate", base: 3.1104, perLv: 1.0886, max: 19.4394 },
  { id: 3, name: "HP%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 4, name: "ATK%", base: 6.912, perLv: 2.4192, max: 43.2 },
  { id: 5, name: "DEF%", base: 8.64, perLv: 3.024, max: 54 },
];

const subStats = [
  {
    id: 1,
    name: "HP",
    base: 38.103755,
  },
  {
    id: 2,
    name: "ATK",
    base: 19.051877,
  },
  {
    id: 3,
    name: "DEF",
    base: 19.051877,
  },
  {
    id: 4,
    name: "HP%",
    base: 3.888,
  },
  {
    id: 5,
    name: "ATK%",
    base: 3.888,
  },
  {
    id: 6,
    name: "DEF%",
    base: 4.86,
  },
  {
    id: 7,
    name: "Speed",
    base: 2.3,
  },
  {
    id: 8,
    name: "Crit Rate",
    base: 2.916,
  },
  {
    id: 9,
    name: "Crit DMG",
    base: 5.832,
  },
  {
    id: 10,
    name: "Effect HIT Rate",
    base: 3.888,
  },
  {
    id: 11,
    name: "Effect RES",
    base: 3.888,
  },
  {
    id: 12,
    name: "Break Effect",
    base: 5.832,
  },
];

export { mainStatHead, mainStatHand, mainStatBody, mainStatFeet, mainStatPlanar, mainStatLink, subStats };
