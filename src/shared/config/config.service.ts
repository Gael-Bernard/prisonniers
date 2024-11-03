import { readFileSync } from "fs";

export interface Config {
  token: string;
}

const json = await readFileSync('config.json');
const CONFIG: Config = JSON.parse(json as unknown as string);

export default CONFIG;
