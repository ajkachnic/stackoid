import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";
import limiter from "../../middleware/limiter";
import { isURL, scrubURL } from '../../utils/validate';

const handler = nextConnect();

handler.use(
  limiter({
    max: 10,
    expireTime: 1000 * 60 * 5 // 5 minutes
  })
);
handler.use(middleware);

handler.post(async (req, res) => {
  const stacks = req.db.collection("stacks");

  // const body = {
  //   name: req.body.name,
  //   tagline: req.body.tagline,
  //   langaugesAndFrameworks: req.body.langaugesAndFrameworks,
  //   databaseAndStorage: req.body.databaseAndStorage,
  //   technologies: req.body.technologies,
  //   other: req.body.other,
  //   deployment: req.body.deployment,
  //   iconLink: req.body.iconLink,
  //   time: new Date().toISOString()
  // };
  if (req.body.link == undefined || isURL(req.body.link)) {
    req.body.link = scrubURL(req.body.link);
    console.log(req.body.link);
    const body = {
      ...req.body,
      time: new Date().toISOString(),
    };

    stacks.insertOne(body, (err, response) => {
      if (err) throw err;

      res.status(200).send({
        ok: true,
        message: "Stack created sucessfully",
      });
    });
  } else {
    res.status(400).json({
      ok: false,
      message: "Invalid URL",
    });
  }
});

export default handler;
