import "./portfolioitem.css";
export default function PortfolioItem({ website, name, description, logo }) {
  return (
    <div className="company_section experience__item">
      <a href={website} target="_blank" rel="noreferrer">
        <img src={logo} className="company__logo" alt={name} />
      </a>
      <div className="experience_text">{description}</div>
    </div>
  );
}
