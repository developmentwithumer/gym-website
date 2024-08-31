import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Image from "next/image";

const TestimonialCard = ({ name, ratings, quote, img, profession }) => {
  return (
    <div className="flex items-center justify-center p-8 rounded-lg bg-secondaryBG">
      <div className="flex flex-col gap-6">
        <div className="self-end">
          <div
            className={`flex items-center gap-0.5 text-xl text-balance text-yellow-200`}
          >
            {/* Render filled stars based on ratings */}
            {[...Array(ratings)].map((_, i) => (
              <StarIcon key={i} className="text-2xl" />
            ))}
            {/* Render border stars for the remainder */}
            {[...Array(5 - ratings)].map((_, i) => (
              <StarBorderIcon key={i} className="text-2xl" />
            ))}
          </div>
        </div>
        <div className="flex">
          <p className="text-balance text-start opacity-80 text-lg">“ {quote} ”</p>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <Image src={img} alt="Person Image" width={30} height={30} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-lg text-balance text-start opacity-80">{name}</span>
            <span className="text-start text-balance opacity-50">{profession}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
