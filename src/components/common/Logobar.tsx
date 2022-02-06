import Image from 'next/image';

export default function LogoBar() {
  return (
    <div
      className="flex justify-center items-center h-20"
      style={{ borderBottom: '1px solid rgb(203, 213, 225)' }}>
      <Image src="/and.png" height={40} width={200} />
    </div>
  );
}
