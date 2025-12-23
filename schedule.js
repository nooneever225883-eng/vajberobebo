let scheduledMessages = [];

exports.handler = async (req, res) => {
  const { messages } = req.body;

  if (!Array.isArray(messages))
    return res.status(400).json({ error: "messages must be an array" });

  scheduledMessages.push(...messages);

  console.log("Scheduled messages:", scheduledMessages);
  res.json({ success: true, scheduledMessages });
};
