import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-key");
    if (!success) return res.sendStatus(429);
    next();
  } catch (error) {
    console.error("Rate limit exceeded , please try again later");
    next();
  }
};
export default rateLimiter;
