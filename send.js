exports.handler = async (req, res) => {
    console.log("Sending messages...");
  
    // Za demo, vraćamo sve zakazane poruke
    res.json({ sentMessages: "Sve poruke bi se ovdje poslale." });
  };
  