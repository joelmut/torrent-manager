import { addHandler } from "parse-torrent-title";

addHandler('season', /S([0-9]{1,2})/i, { type: 'integer' });
addHandler(({ title, result }) => {
  const match = title.match(/S([0-9]{1,2}) ?E[0-9]{1,2}/i);
  result.isSeasonPack = !match;
});