import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const chatEngineResponse = await axios.post(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: password,
      },
      {
        headers: { "private-key": "177bf919-6c75-4121-bbf7-43a0351c77d1" },
      }
    );
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).json({ error: error.message });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const chatEngineResponse = await axios.get(
      "https://api.chatengine.io/users/me",
      {
        headers: {
          "Project-ID": "cb5d4813-27be-4eea-b467-5a41d4ab16bd",
          "User-Name": username,
          "User-Secret": password,
        },
      }
    );
    res.status(200).json({ response: chatEngineResponse.data });
  } catch (error) {
    console.error("error", error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
