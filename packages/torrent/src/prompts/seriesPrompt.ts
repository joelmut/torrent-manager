import { prompt } from "inquirer";

export const seriesPrompt = async (series) => {
  const choices = series.map((e, i) => ({
    name: e.original_name,
    value: e,
    key: i + 1,
  }));

  const { result } = await prompt({
    message: "Search Results",
    type: "list",
    name: "result",
    choices,
  });

  return result;
};
