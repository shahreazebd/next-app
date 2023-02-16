import { NextApiRequest, NextApiResponse } from "next";
import { getJsonData, setJsonData } from "@/utils/helpers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      createUser(req, res);
      break;
  }
}

async function getUsers(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await getJsonData("/json/users.json");

    res.send({ message: "success", data: users });
  } catch (error: any) {
    res.status(500).send({ error: error.message });
  }
}

async function createUser(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  try {
    const jsonData = await getJsonData("/json/users.json");

    jsonData.push({
      id: Math.random().toString(),
      name,
    });

    await setJsonData("/json/users.json", jsonData);

    res.status(201).send({ message: "success" });
  } catch (error: any) {
    res.send({ error: error.message });
  }
}
