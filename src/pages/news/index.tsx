import {useState} from 'react';
import {useRouter} from 'next/router';
import news from '../../data/news.json';
import MainLayouts from '@/layouts/MainLayouts';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState(news);
  const router = useRouter();

  const handleSearch = (e: {target: {value: string}}) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredNews(
      news.filter((item) => item.title.toLowerCase().includes(query))
    );
  };

  const handleNewsClick = (id: number) => {
    router.push(`/news/${id}`);
  };

  return (
      <div className='bg-gray-700 w-full h-svh '>
        <span className='flex'>
           <h1 className='text-left ml-2 pt-5 text-3xl text-white font-bold grow w-1/12 ' >News</h1>
           <div className='grow w-9/12 '></div>
        <input className=' mr-2 text-center flex justify-items-center mt-3 rounded-md bg-gray-600 text-white  grow w-2/12 '
          type="text"
          placeholder="search..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className='grow'></div>
        </span>
        <ul>
          {filteredNews.map((item) => (
            <li className='text-white text-2xl font-light hover:underline m-3'
              key={item.id}
              onClick={() => handleNewsClick(item.id)}
              style={{cursor: 'pointer'}}
            >
              {item.id}.  {item.title}
            </li>
          ))}
        </ul>
      </div>
  );
}
