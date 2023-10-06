/// <reference types="vite/client" />

type LanguageType = "es" | "hi" | "en" | "ja";

type WordType = {
  word: string;
  meaning: string;
  options: string[];
};

interface StateType {
  loading: boolean;
  result: string[];
  words: WordType[];
  error?: string;
}

interface IFetchedData {
  translations: {
    text: string;
  }[];
}
