export const fetchService = {
  fetch: async (url: string) => {
    const request = await fetch(url);
    return request.json();
  },
};
