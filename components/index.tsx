import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import { MakePDF } from "./pdf";
const generatePdfDocument = async () => {
  const blob = await pdf(<MakePDF />).toBlob();
  saveAs(blob, "pdfExample.pdf");
};

export default generatePdfDocument;
