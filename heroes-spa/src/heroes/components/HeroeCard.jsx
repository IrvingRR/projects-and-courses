import { Link } from "react-router-dom";

export const HeroeCard = ({ heroe }) => {

    const heroImage = `/assets/heroes/${heroe.id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImage} alt={heroe.superhero} className="card-img" />
                </div>
                <div className="col-8">
                    <div className="card-">
                        <h5 className="card-title">{heroe.superhero}</h5>
                        <p className="card-text">{heroe.alter_ego}</p>
                        <p>{heroe.alter_ego !== heroe.characters && heroe.characters}</p>
                        <p className="card-text">
                            <small className="text-muted">{heroe.first_appearance}</small>
                        </p>
                        <Link to={`/hero/${heroe.id}`}>More info</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
