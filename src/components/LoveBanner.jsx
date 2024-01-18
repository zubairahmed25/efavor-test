import { useRef } from 'react';
import LoveImg from '../assets/img/LoveImg.jpg'
import { useNavigate } from 'react-router-dom'
function LoveBanner() {
  const navigate = useNavigate()
  const ref = useRef()
  return (
    <div className="container p-0">
      <div className="love_banner">
        <img src={LoveImg} alt="LoveImg" className="loveImg" onClick={() => {
          navigate(`/category?id=83&tag=&search=&page=1&look=&skus=&labels=`)
        }} />
        <div style={{ zIndex: 2 }}>
          <p>A Symphony of Love</p>
          <div className="search">
            <input type="text" placeholder="style, event, occasion..." ref={ref} />
            <button type='button' onClick={() => {
              navigate(`/category?tag=&search=${ref.current.value}&page=1&look=&skus=&labels=`)

            }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveBanner;
