import "./portfolioitem.css";
export default function PortfolioItem({ website, company, experience, logo }) {
  return (
    <div className="company_section experience__item">
      <a href={website} target="_blank" rel="noreferrer">
        <img src={logo} className="company__logo" alt={company} />
      </a>
      <div className="experience_text">{experience}</div>
    </div>
  );
}
