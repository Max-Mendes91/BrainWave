import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautifull content at
      </h5>
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={134} alt="logo" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
