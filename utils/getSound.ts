export default async (str: string) => {
  if (str.startsWith("data:audio")) {
    let _blob = str;
    // can use res assign to src / audio but i want to convert to short url
    try {
      _blob = await base64ToBlob(str).then((result) => {
        return blobToUri(result);
      });
    } finally {
      return _blob;
    }
  } else {
    try {
      const response: any = await $fetch(str);
      return blobToUri(response);
    } catch (err) {
      console.error(err);
      return "";
    }
  }
};
