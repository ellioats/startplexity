// component that provides button to download pdf of specified text.

"use client"

import { generatePdfFromText } from "@/lib/pdfUtils"

export default function DownloadPdfButton({ text }: { text: string }) {

  const handleDownload = () => {
    const blob = generatePdfFromText(text);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'download pdf';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    // add css
    <button onClick={handleDownload} >
      Download as PDF
    </button>
  );

}
