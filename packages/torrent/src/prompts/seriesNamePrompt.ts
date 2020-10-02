import { prompt } from "inquirer";

export const seriesNamePrompt = async () => {
  const { result } = await prompt({
    message: "Search for TV Series",
    type: "input",
    name: "result",
  });

  return result;
};
