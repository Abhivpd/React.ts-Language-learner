import axios from "axios";
import { generate } from "random-words";
import _ from "lodash";

const generateOptions = (
  meanings: { Text: string }[],
  index: number
): string[] => {
  const correctAns = meanings[index].Text;

  const incorrectAnswers = meanings.filter(
    (meaning) => meaning.Text !== correctAns
  );

  const incorrectOptions: string[] = _.sampleSize(incorrectAnswers, 3).map(
    (option) => option.Text
  );

  const options: string[] = _.shuffle([correctAns, ...incorrectOptions]);

  return options;
};

export const translateWords = async (params: LanguageType) => {
  try {
    const words = generate(8).map((word) => ({
      Text: word,
    }));

    const response = await axios.post(
      "https://microsoft-translator-text.p.rapidapi.com/translate",
      words,
      {
        params: {
          "to[0]": params,
          "api-version": "3.0",
          profanityAction: "NoAction",
          textType: "plain",
        },
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "d3c9a0cab4msh25a0636e1ff8a9ap193d62jsn22b341132ac5",
          "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
        },
      }
    );

    const resData: IFetchedData[] = response.data;

    const word: WordType[] = resData.map((data, i) => {
      const options = generateOptions(words, i);
      return {
        word: data.translations[0].text,
        meaning: words[i].Text,
        options,
      };
    });
    return word;
  } catch (error) {
    console.log(error);
    throw new Error("some error");
  }
};
