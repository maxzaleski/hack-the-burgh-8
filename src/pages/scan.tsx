import { useState } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Card from 'src/components/common/Card';
import { Shell } from '../components/Layout';

const QrReader = dynamic(() => import('react-qr-reader'), { ssr: false });

export default function ScanPage() {
  const [codeData, setCodeData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const errorHandler = (error) => {
    console.log(error);
  };

  const scanHandler = (data) => {
    if (data) {
      console.log(data);
      setCodeData(data);
      setShowModal(true);
      //router.push(`${data}/`);
    }
  };

  const modalHandler = () => {
    setShowModal(!showModal);
    setCodeData(null);
  };
  //<p>The Value is {codeData}</p>
  return (
    <Shell>
      <div className="relative flex flex-col h-full w-screen bg-slate-100">
        {showModal && (
          <div
            className="modal-backdrop h-full absolute top-0 left-0 right-0 z-50"
            style={{
              backgroundColor: 'rgba(23, 23, 23, 0.8)',
            }}
            onClick={modalHandler}>
            <div
              className="modal px-6 flex h-full items-center justify-center"
              onClick={modalHandler}>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h1>You are now friends with John Doe!</h1>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center px-4 h-20 bg-red-100 text-red-600">
          <p className="text-center" style={{ fontWeight: 'bold', fontSize: '120%' }}>
            Socialise and Scan QR Codes to Earn Points!
          </p>
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
    </Shell>
  );
}
