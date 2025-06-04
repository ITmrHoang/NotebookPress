export default async (text:string,  nameFile=`file_${new Date().toISOString().split('.')[0]}`, mimeType = 'text/plain' ) => {
  // Create a blob with the file content
  const blob = new Blob([text], { type: mimeType });
  // Create a link element
  const link = document.createElement('a');
  // Set the download attribute with a filename
  link.download = nameFile;
  // Create a URL for the blob and set it as the href attribute
  const url = window.URL.createObjectURL(blob);
  link.href = url
  // Append the link to the body
  document.body.appendChild(link);
  // Programmatically click the link to trigger the download
  link.click();
  // Remove the link from the document
  document.body.removeChild(link);
  URL.revokeObjectURL(url); // Dọn dẹp bộ nhớ
}
