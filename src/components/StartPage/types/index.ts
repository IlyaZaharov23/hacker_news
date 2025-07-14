export type QuoteType = {
  text: string;
  author: string;
};

export type FooterPropsType = {
  isLoading: boolean;
  quote: QuoteType;
};

export type ActionsBlockPropsType = {
  setQuote: (quote: QuoteType) => void;
  //   switcherOpen: HTMLElement | null;
};
