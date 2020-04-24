import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";
import limiter from "../../middleware/limiter";
const handler = nextConnect();

handler.use(limiter({
  max: 100,
}))
handler.use(middleware);


handler.get(async (req, res) => {
  const stacks = req.db.collection("stacks");

  let skip = parseInt(req.query.skip) || 0;

  stacks
    .find()
    .skip(skip)
    .limit(1)
    .sort({
      time: -1,
    })
    .toArray((err, result) => {
      if (err) throw err;

      res.status(200).send(result);
    });
});

export default handler;
