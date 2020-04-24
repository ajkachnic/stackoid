import rateLimit from 'express-rate-limit';
import mongoStore from 'rate-limit-mongo';

function limiter({ max, expireTime, windowTime }) {

  let limiter = new rateLimit({
    store: new mongoStore({
      uri: process.env.STACKOID_MONGO,
      collectionName: "limiter",
      expireTimeMs: expireTime || 60 * 1000 * 2, // 2 Minutes
    }),
    max: max || 50,
    windowMs: windowTime || 10 * 60 * 1000,
    message: JSON.stringify({
      ok: false,
      message: "Too many requests, please try again later.",
    }),
  });
  return limiter
}

export default limiter