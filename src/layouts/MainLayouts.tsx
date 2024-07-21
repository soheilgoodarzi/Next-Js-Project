import {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from '@/components/Footer';
interface IMainLayout {
  children: React.ReactNode;
}
const MainLayouts = (props: IMainLayout) => {
  const {children} = props;
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};
export default MainLayouts;
