import MainLayouts from '@/layouts/MainLayouts';
import News from './news';
import {NextPageWithLayout} from './_App';
import {ReactElement} from 'react';
const Home: NextPageWithLayout = () => {
  return (
    <div>
      <News></News>
    </div>
  );
};
Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayouts>{page}</MainLayouts>;
};
export default Home;
