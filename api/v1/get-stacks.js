import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";
import limiter from "../../middleware/limiter";
const handler = nextConnect();

handler.use(
  limiter({
    max: 100,
  })
);

handler.use(middleware);

handler.get(async (req, res) => {
  const stacks = req.db.collection("stacks");

  let limit = parseInt(req.query.limit) || 0;
  let skip = parseInt(req.query.skip) || 0;

  stacks.find().skip(skip).limit(limit).sort({
    time: -1
  }).toArray((err, result) => {
    if(err) throw err;

    res.status(200).send({
      ok: true,
      content: result
    })
  })
});

export default handler;
