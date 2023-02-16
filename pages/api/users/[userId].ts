import { NextApiRequest, NextApiResponse } from "next";
import { getJsonData, setJsonData } from "@/utils/helpers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "PUT":
      updateUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
  }
}

async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { name } = req.body;
    const { userId } = req.query;

    const users = await getJsonData("/json/users.json");

    const user = users.find((user) => user.id === userId);
    if (!user) return res.send({ message: "No user found" });

    const updatedUser = users.map((user) => {
      if (user.id === userId) {
        return {
          id: user.id,
          name: name,
        };
      } else {
        return user;
      }
    });

    await setJsonData("/json/users.json", updatedUser);

    res.send({ message: "success" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }

  res.send({ params: req.query });
}

async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;

    const users = await getJsonData("/json/users.json");

    const user = users.find((user) => user.id === userId);
    if (!user) return res.send({ message: "No user found" });

    const updatedUser = users.filter((user) => user.id !== userId);

    await setJsonData("/json/users.json", updatedUser);

    res.send({ message: "success" });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }

  res.send({ params: req.query });
}
