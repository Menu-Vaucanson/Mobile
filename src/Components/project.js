import ProjectLight from '../Themes/Project/Light';
import ProjectDark from '../Themes/Project/Dark';
import unel from '../Assets/unel.png'
import wiwok from '../Assets/wiwok.png'

function motivation() {
    return (
        <div className='motivation'>
            <div className="motivation-title">motivation</div><div className="motivation-text">Bonjour a tous,<br></br>
                Nous avons créer ce site, car chaque matin, nous allions consulter le menu... avant de l’oublier quelques instants plus tard.<br></br>Ce site a donc été créer dans l’optique d’être un menu de poche, pratique à l’utilisation.
            </div>
        </div>
    )
}

function Contributors() {
    return (
        <div className='contributors-box'>
            <div className='contributors-title'>contributeurs</div>
            <div className='contributorBox'>
                <img src={unel} className="icon" alt={'icon unel'} />
                <div className='contributor-name'>unel</div>
                <div className='contributor-description'>Développeur, Designer</div>
            </div>
            <div className='contributorBox'>
                <img src={wiwok} className="icon" alt={'icon unel'} />
                <div className='contributor-name'>wiwok</div>
                <div className='contributor-description'>Développeur, Designer</div>
            </div>
        </div>
    )
}

function Project({ theme }) {
    return (
        <div className='project-box'>
            {motivation()}
            {Contributors()}
        </div>
    )
}

export default Project;