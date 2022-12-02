import { BsFillPatchCheckFill } from 'react-icons/bs';
export default function SectionCard({items, title}) {
    return <div className="skills__frontend">
    <h3>{title}</h3>
    <div className="skills__content">
      {
        items.map((language)=> {
          return <article className="skills__details">
          <BsFillPatchCheckFill className="skills__details-icon" />
          <h4>{language}</h4>
        </article>
        })
      }
    </div>
  </div>
}