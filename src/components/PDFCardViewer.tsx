import { useState } from "react";
import { Dialog } from "@headlessui/react";

interface PDFCardProps {
  title: string;
  file: string; // PDF file URL
}

const PDFCardViewer = ({ title, file }: PDFCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition-all"
        onClick={() => setIsOpen(true)}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500 mt-2">Click to download PDF</p>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded-lg w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-600 mb-4">Click below to download the PDF file:</p>
              <a
                href={file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Download PDF
              </a>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default PDFCardViewer;
