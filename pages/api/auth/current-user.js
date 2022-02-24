import defaultHandler from "api-lib/_defaultHandler";
import { withSessionRoute } from "api-lib/auth/withSession";

const handler = defaultHandler();

handler.get((req, res) => {
  res.status(200).json({ currentUser: req.session.user ?? null });
});

export default withSessionRoute(handler);
