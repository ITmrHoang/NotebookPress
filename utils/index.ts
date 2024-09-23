export function readingFileToBase64(file: string | Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onerror = reject;
    reader.onload = (e) => resolve(btoa(reader.result as string));
    reader.readAsDataURL(file as any);
  });
}

export function readBase64(str: string): string {
  return atob(str);
}

export function callbackReadfile(target: string | Blob, callback: (_data: string) => void): void {
  let reader = new FileReader();
  reader.onload = function (event) {
    let data: string = btoa(event?.target?.result as string); // the actual conversion of data from binary to base64 format
    callback(data);
  };
  reader.readAsDataURL(target as Blob);
}
