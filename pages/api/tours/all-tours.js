const { getTours } = require("../../../lib/data");

export default async function handler(req, res) {
  const tours = await getTours();
  res.json(tours);
}
