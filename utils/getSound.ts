const proxyUrl = "https://cors-anywhere.herokuapp.com/";

export default async (str: string) => {
  // can use res assign to src / audio but i want to convert to short url
  try {
    const response: any = await $fetch(`${proxyUrl}${str}`);
    return blobToUri(response);
  } catch (err) {
    console.error(err);
    if (str.startsWith("data:audio")) {
      return str;
    }
    return "";
  }
};
