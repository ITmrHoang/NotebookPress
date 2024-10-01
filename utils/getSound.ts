export default async (str: string) => {
  if (str.length <= 256 || str.length) {
    try {
      const response: any = await $fetch(str);
      const blob = response.blob();
      return blob;
    } catch (err) {
      console.error(err);
      return "";
    }
  } else {
    const _blob = readBase64(str);
    console.log(_blob);
    return _blob;
  }
};
