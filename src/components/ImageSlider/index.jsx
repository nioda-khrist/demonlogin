import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import demon from '@/assets/demon.png';

const index = () => {
  return (
    <div className='image-slider'>
      <OwlCarousel className='owl-theme' items={1} loop margin={10} nav={false}>
        <div className='item'>
          <img src={demon} />
          <div>
            <h4>
              anime<span>yabu.</span>
            </h4>
            <p>
              Assista animes online em HD, legendado ou dublado, no seu celular
              ou computador.
            </p>
            <p>
              <b>Animeyabu, o seu portal de animes online!</b>
            </p>
          </div>
        </div>
        <div className='item'>
          <img src={demon} />
          <div>
            <h4>
              anime<span>yabu.</span>
            </h4>
            <p>
              Assista animes online em HD, legendado ou dublado, no seu celular
              ou computador.
            </p>
            <p>
              <b>Animeyabu, o seu portal de animes online!</b>
            </p>
          </div>
        </div>
        <div className='item'>
          <img src={demon} />
          <div>
            <h4>
              anime<span>yabu.</span>
            </h4>
            <p>
              Assista animes online em HD, legendado ou dublado, no seu celular
              ou computador.
            </p>
            <p>
              <b>Animeyabu, o seu portal de animes online!</b>
            </p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default index;
