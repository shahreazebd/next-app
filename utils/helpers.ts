import path from "node:path";
import fs from "node:fs/promises";

type User = {
  name: string;
  id: string;
};

export async function getJsonData(p: string) {
  const dir = path.join(process.cwd() + p);
  const data = await fs.readFile(dir, "utf-8");
  return JSON.parse(data) as User[];
}

export async function setJsonData(p: string, data: User[]) {
  const dir = path.join(process.cwd() + p);

  const d = await fs.writeFile(dir, JSON.stringify(data));

  return d;
}
