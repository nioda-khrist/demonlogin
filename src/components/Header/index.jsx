import demonLogo from '@/assets/demon-logo.png';
import back from '@/assets/back.svg';

const index = () => {
  return (
    <div className='header'>
      <div className='header--top'>
        <img src={demonLogo} />
        <div>
          anime<span>yabu.</span>
        </div>
      </div>
      <div className='header--btn'>
        <img src={back} />
      </div>
    </div>
  );
};

export default index;
