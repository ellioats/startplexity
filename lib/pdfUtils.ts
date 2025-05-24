// helper function to convert text to pdf, call from client side.

import jspdf from 'jspdf';

export function generatePdfFromText(text: string) {
  const doc = new jspdf();

  const lines = doc.splitTextToSize(text, 180)
  doc.text(lines, 10, 10);

  const blob = doc.output('blob');
  return blob;
}

