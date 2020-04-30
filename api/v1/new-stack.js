import nextConnect from "next-connect";

import middleware from "../../middleware/middleware";
import limiter from "../../middleware/limiter";

import { fitsMax, isUrl } from "@ajkachnic/validata";

import { scrubURL } from "../../utils/validate";

const handler = nextConnect();

handler.use(
  limiter({
    max: 10,
    expireTime: 1000 * 60 * 5, // 5 minutes
  })
);

handler.use(middleware);

function bodyFits(object, limit) {
  let total = 0;
  function loop(object) {
    let keys = Object.keys(object);
    for (let key in keys) {
      if (typeof object[keys[key]] == "string") {
        if (object.hasOwnProperty(keys[key])) total += object[keys[key]].length;
      } else {
        if (typeof object[keys[key]] == "object") {
          loop(object[keys[key]]);
        }
      }
    }
  }
  loop(object);
  return total <= limit;
}

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
  if (req.body.link == undefined || isUrl(req.body.link)) {
    if (
      fitsMax(req.body.name, 50) &&
      fitsMax(req.body.tagline, 75) &&
      bodyFits(req.body, 500)
    ) {
      if (req.body.name != undefined) {
        req.body.link = scrubURL(req.body.link);
        const body = {
          name: req.body.name,
          tagline: req.body.tagline,
          ...(req.body.languagesAndFrameworks ? { languagesAndFrameworks: req.body.languagesAndFrameworks } : {}),
          ...(req.body.database ? { databasee: req.body.database }: {}),
          ...(req.body.technologies ? { technologies: req.body.technologies } : {}),
          ...(req.body.other ? { other: req.body.other } : {}),
          ...(req.body.deployment ? { deployment: req.body.deployment } : {}),
          time: new Date().toISOString(),
        };
        console.log(body)
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
          message: "No name received",
        });
      }
    } else {
      res.status(400).json({
        ok: false,
        message: "Max length exceded",
      });
    }
  } else {
    res.status(400).json({
      ok: false,
      message: "Invalid URL",
    });
  }
});

export default handler;
