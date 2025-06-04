export default async (fileUrl: string, nameFile=`file_${new Date().toISOString().split('.')[0]}`) => {
  // Create a link element
  const link = document.createElement("a");
  // Set the download attribute with a filename
  link.download = nameFile;
  // Set the href attribute to the file URL
  link.href = fileUrl;
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
};
