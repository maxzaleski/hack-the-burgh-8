import LogoBar from '../common/Logobar';
import Navbar from '../UI/Navbar/Navbar';

export const Shell = (props) => (
  <div className="main flex flex-col h-full">
    <LogoBar />
    <div className="content mx-auto mb-auto h-full" style={{ overflowY: 'scroll' }}>
      {props.children}
    </div>
    <Navbar />
  </div>
);
