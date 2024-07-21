import {useRouter} from 'next/router';
import MainLayouts from '@/layouts/MainLayouts';
import news from '../../../data/news.json';
const NewsItem = () => {
  const router = useRouter();
  const {id} = router.query;
  const item = news.find((n) => n.id === parseInt(id));
  if (!item) {
    return <div>خبر پیدا نشد</div>;
  }
  return (
  <MainLayouts>
    <div className='bg-gray-700 w-full h-svh '>
      <h1 className='text-center font-bold ml-2 pt-5 text-3xl text-white'>{item.title}</h1>
      <p className='text-white text-2xl font-light  m-3'>{item.description}</p>
    </div>
    </MainLayouts>
  )
};
export default NewsItem;
