import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { MakePDF } from "../components/pdf";

function Home() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  });
  return (
    <div style={{ height: "100vh" }}>
      <p>HOla</p>
      {isClient && (
        <>
          <PDFDownloadLink document={<MakePDF />}>
            {({ loading }) =>
              loading ? "Loading document..." : "Download File"
            }
          </PDFDownloadLink>
          <div style={{ height: "50vh" }}>
            <PDFViewer width={"100%"} height={"100%"}>
              <MakePDF itemList={["Mango", "Pera", "Papaya", "Uva", "Otros"]} />
            </PDFViewer>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
