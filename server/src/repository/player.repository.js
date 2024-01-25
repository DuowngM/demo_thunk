const database = require("../config/config");

async function getPlayers() {
  const [player] = await database.execute("select * from player");

  return player;
}
async function addPlayerSql(namePlayer) {
  console.log(namePlayer);
  const [player] = await database.execute(
    "insert into player (namePlayer) values (?)",
    [namePlayer]
  );
  return player;
}

async function increasePoint(id) {
  console.log(id);
  const [player] = await database.execute(
    "UPDATE player SET point = point + 1 WHERE id = ? ",
    [id]
  );
  return player;
}

async function decreasePoint(id) {
  const [player] = await database.execute(
    "UPDATE player SET point = point - 1 WHERE id = ? ",
    [id]
  );
  return player;
}

async function getMaxPoint() {
  const [player] = await database.execute(
    "Select MAX(`player`.point) as maxPoint from player"
  );
  return player[0].maxPoint;
}

module.exports = {
  getPlayers,
  addPlayerSql,
  increasePoint,
  decreasePoint,
  getMaxPoint
};
