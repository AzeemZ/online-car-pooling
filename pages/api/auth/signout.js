import defaultHandler from "api-lib/_defaultHandler";
import { withSessionRoute } from "api-lib/auth/withSession";

const handler = defaultHandler();

handler.get(async (req, res) => {
  req.session.destroy();

  res.send({});
});

export default withSessionRoute(handler);
