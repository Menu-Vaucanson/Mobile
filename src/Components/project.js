import ProjectLight from '../Themes/Project/Light';
import ProjectDark from '../Themes/Project/Dark';

function motivation() {
    return (
        <div className='motivation'>
            <div className="motivation-title">motivation</div><div className="motivation-text">Bonjour a tous,
                Nous avons créer ce site, car chaque matin, nous allions consulter le menu... avant de l’oublier quelques instants plus tard.
                Ce site a donc été créer dans l’optique d’être un menu de poche, pratique à l’utilisation.
            </div>
        </div>
    )
}

function Project({ theme }) {
    return (
        motivation()
    )
}

export default Project;