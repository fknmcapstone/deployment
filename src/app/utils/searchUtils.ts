import { SearchItem } from "./searchData";

const normalizeText = (text: string): string => {
  return text.toLowerCase().trim();
};

export const searchItems = (
  query: string,
  items: SearchItem[]
): SearchItem[] => {
  if (!query.trim()) return [];

  const searchTerms = query.toLowerCase().split(" ");

  return items
    .filter((item) => {
      return searchTerms.some((term) => {
        const normalizedTerm = normalizeText(term);
        return (
          normalizeText(item.title).includes(normalizedTerm) ||
          normalizeText(item.category).includes(normalizedTerm) ||
          (item.description &&
            normalizeText(item.description).includes(normalizedTerm)) ||
          (item.tags &&
            item.tags.some((tag) =>
              normalizeText(tag).includes(normalizedTerm)
            ))
        );
      });
    })
    .sort((a, b) => {
      // Prioritize title matches
      const aInTitle = searchTerms.some((term) =>
        normalizeText(a.title).includes(normalizeText(term))
      );
      const bInTitle = searchTerms.some((term) =>
        normalizeText(b.title).includes(normalizeText(term))
      );

      if (aInTitle && !bInTitle) return -1;
      if (!aInTitle && bInTitle) return 1;

      return 0;
    });
};
