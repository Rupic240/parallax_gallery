import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";
import CardSwiper from "../components/CardSwiper";

import { Link } from "react-router-dom";
import data from "../data.json";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Tectonic = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {
  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10 max-sm:grid-cols-1 max-sm:my-20 max-sm:gap-10">
        <CardOne
          title={'Tectonic'}
          client={'Mia Sullivan'}
          year={2027}
        >
          {
            data.tectonicData.filter(item => item.category === "tOne").map(({ id, img }) => {
              return (
                <LazyLoadImage
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  delayTime={300}
                  effect="blur"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardOne>
        <CardTwo>
          {
            data.tectonicData.filter(item => item.category === "tTwo").map(({ id, img }) => {
              return (
                <LazyLoadImage
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  delayTime={300}
                  effect="blur"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardTwo>
      </div>
      <div className="w-full h-auto flex justify-between">
        <Link
          to='/mashup'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          &laquo; Prev Project
        </Link>
        <Link
          to='/figura'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          Next Project &raquo;
        </Link>
      </div>
      {
        showSwiper ? (
          <CardSwiper
            data={data.tectonicData}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
          />
        ) : (
          ''
        )
      }
    </div>
  )
}

export default Tectonic;