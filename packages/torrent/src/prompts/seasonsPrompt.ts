import { prompt } from "inquirer";

export const seasonsPrompt = async (seasons) => {
  const allChoice = { name: "All", value: "all", key: 0 };

  const seasonChoices = seasons.map((e, i) => ({
    name: `${e.name} (${e.episode_count})`,
    value: e,
    key: i + 1,
  }));

  const { result } = await prompt({
    message: "Seasons",
    type: "checkbox",
    name: "result",
    choices: [allChoice, ...seasonChoices],
  });

  if (result?.[0]?.value === "all") {
    return seasons;
  }

  return result;
};
