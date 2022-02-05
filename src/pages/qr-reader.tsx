import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const QrReader = dynamic(() => import("react-qr-reader"), { ssr: false });

export default function QRReader() {
  const [data, setData] = useState<string>();

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleScan = (data: string | null) => {
    data && setData(data)
  };
  
  const handleError = (err: string) => {
    console.error(err);
  };

  return (
    <QrReader onError={handleError} onScan={handleScan} style={{ width: '100%' }} />
  );
}
