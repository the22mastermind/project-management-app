import HeroImage from "../../assets/images/hero-image.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="w-100 pt-4">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="text-center highlight my-4">
          Effortless control. Your projects, your way.
        </h4>
        <h1 className="text-center accent mt-3">
          The ultimate project management solution.
        </h1>
        <p className="lead text text-center mt-2">
          A robust toolkit to simplify project creation and onboarding
        </p>
        <h4 className="text text-center mb-4">
          No complexities. No hassle. No stress.
        </h4>
        <div className="mt-4">
          <Button label={`Start now`} target={`dashboard`} />
        </div>
        <div className="d-flex justify-content-center mt-2">
          <img src={HeroImage} alt="Hero" className="mt-4 w-50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
