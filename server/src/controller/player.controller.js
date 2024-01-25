const {
  getPlayers,
  addPlayerSql,
  increasePoint,
  decreasePoint,
  getMaxPoint,
} = require("../repository/player.repository");

async function getAllPlayer(req, res) {
  const userPlayer = await getPlayers();
  const maxPoint = await getMaxPoint()
  res.status(200).json({
    userPlayer,
    maxPoint,
    message: "o me ke",
  });
}

async function addPlayer(req, res) {
  console.log(req.body);
  const { namePlayer } = req.body;
  const userPlayer = await addPlayerSql(namePlayer);
  const players = await getPlayers();

  res.status(200).json({
    players,
    message: "o me ke",
  });
}

async function updatePoint(req, res) {
  const { id } = req.params;
  const { check } = req.body;
  console.log(req.body);
  if (check == "increase") {
    await increasePoint(id);
  } else {
    await decreasePoint(id);
  }
  const players = await getPlayers();

  res.status(200).json({
    players,
    message: "update thanh cong nhan",
  });
}

module.exports = {
  getAllPlayer,
  addPlayer,
  updatePoint,
};
