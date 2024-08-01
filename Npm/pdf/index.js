const PDFDocument = require("pdfkit");
const fs = require("fs");

const pdfGenerator = (text, image) => {
  // Create a document
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("output.pdf"));
  //ADD your text
  doc.fontSize(25).text(text, 100, 100);
  //ADD an image
  doc.image(image, {
    fit: [250, 300],
    align: "center",
    valign: "center",
  });
  // Finalize PDF file
  doc.end();
};
pdfGenerator("Hello this is aryan", "aaa.png");
