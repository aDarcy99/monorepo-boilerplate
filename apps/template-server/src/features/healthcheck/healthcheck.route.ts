import express, { Router } from "express";

const router: Router = express.Router();

/**
 * @openapi
 * /health-check/:
 *   get:
 *     summary: Health check endpoint
 *     description: Returns a simple text response to verify that the server is reachable.
 *     tags:
 *       - Health-check
 *     responses:
 *       200:
 *         description: Server responded successfully.
 */
router.get("/", async (req, res) => {
  res.send("pinged");
});

export default router;
