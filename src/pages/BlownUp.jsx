import CardOne from "../cards/CardOne";
import CardTwo from "../cards/CardTwo";

import { Link } from "react-router-dom";
import CardSwiper from "../cards/CardSwiper";
import { blownUpData } from "../data";

const BlownUp = ({ showSwiper, setShowSwiper, selectedImageID, handleClick }) => {

  return (
    <div className="w-full h-auto bg-neutral-800 p-[10%]">
      <div className="grid grid-cols-2 gap-5 mb-10 max-sm:grid-cols-1 max-sm:my-20 max-sm:gap-10">
        <CardOne
          title={'Blown Up'}
          client={'Benjamin Garcia'}
          year={2025}
        >
          {
            blownUpData.filter(item => item.category === "bOne").map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardOne>
        <CardTwo>
          {
            blownUpData.filter(item => item.category === "bTwo").map(({ id, img }) => {
              return (
                <img
                  key={id}
                  src={img}
                  alt="image"
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-80 duration-300 max-sm:w-full max-sm:h-60"
                  onClick={() => handleClick(id)}
                />
              )
            })
          }
        </CardTwo>
      </div>
      <div className="w-full h-auto text-right">
        <Link
          to='/mashup'
          className="text-white text-xl hover:opacity-80 duration-300"
        >
          Next Project &raquo;
        </Link>
      </div>
      {
        showSwiper && (
          <CardSwiper
            data={blownUpData}
            setShowSwiper={setShowSwiper}
            selectedImageID={selectedImageID}
          />
        )
      }
    </div>
  )
}

export default BlownUp;