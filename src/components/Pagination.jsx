import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({active,totalPages}) => {
  const [searchParams,setSearchParams] = useSearchParams();
  const changePage = (newPage) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('page', newPage);
    setSearchParams(newSearchParams.toString());
  };
  const displayPages = 5;
  const displayRange = 2;
  const getPaginationArray = () => {
    const pages = [];

    if (totalPages <= displayPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(1, active - displayRange);
      const endPage = Math.min(totalPages, startPage + displayPages - 1);

      if (startPage > 1) {
        pages.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages) {
        pages.push('...', totalPages);
      }
    }

    return pages;
  };
  return (
    <div className='pagination'>
        <ul className=''>
    <li>
    <button type='button' disabled={active===1} onClick={()=>changePage(active-1)}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="10"
        viewBox="0 0 320 512"
      >
        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
      </svg>
    </button>
    </li>
    {/* {
    Array.from({length:Math.ceil(total/itemsPerPage)}).map((_,i) => (
      <li key={"pagination"+i}>
        <button type='button' className={` ${active===i+1&&'active'}`} onClick={()=>changePage(i+1)}>{i+1}</button>
      </li>
    ))
    } */}
           {getPaginationArray().map((page, i) => (
          <li
          key={"pagination"+i}
          >
        <button type='button' className={` ${active===i+1&&'active'}`} onClick={()=>changePage(i+1)}>{page}</button>
          </li>
        ))}
    <li>
    <button type='button' disabled={active===totalPages} onClick={()=>changePage(active+1)}>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="10"
        viewBox="0 0 320 512"
      >
        <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
      </svg>
    </button>
    </li>
  </ul>
    </div>
);
};

Pagination.propTypes = {
  active:PropTypes.number,
  totalPages:PropTypes.number,
};

export default Pagination;