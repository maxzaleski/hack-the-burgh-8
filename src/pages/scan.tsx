import { useState } from 'react';
import QrReader from 'modern-react-qr-reader';
import { useRouter } from 'next/router';

export default function ScanPage() {
  const [codeData, setCodeData] = useState();
  const router = useRouter();

  const errorHandler = (error) => {
    console.log(error);
  };

  const scanHandler = (data) => {
    if (data) {
      setCodeData(data);
      console.log(data);
      //router.push(`${data}/`);
    }
  };

  return (
    <div className="flex flex-col h-full w-screen">
      <div className="flex items-center h-20 text-white" style={{backgroundColor: "#60A5FA"}}>
        <p className="text-center" style={{fontWeight: "bold", fontSize: "120%"}}>Socialise and Scan QR Codes to Earn Points!</p>
      </div>
      <div className="my-auto">
        <div>
          <QrReader
            delay={100}
            facingMode="environment"
            onError={errorHandler}
            onScan={scanHandler}
          />
        </div>
      </div>
    </div>
  );
}
