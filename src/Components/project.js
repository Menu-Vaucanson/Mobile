import ProjectMotivationLight from '../Themes/Project/motivationLight.js';
import ProjectMotivationDark from '../Themes/Project/motivationDark.js';
import contributorLight from '../Themes/Project/ContributorLight.js';
import contributorDark from '../Themes/Project/contributorDark.js';
import unel from '../Assets/unel.png'
import wiwok from '../Assets/wiwok.png'

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"

import "react-vertical-timeline-component/style.min.css"
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

function timeline() {
    // https://aleksandarpopovic.com/Build-Simple-Timeline-in-React/
    let timelineElements = [
        // default args:
        // {
        //     id: 1,
        //     title: "Frontend Developer",
        //     location: "Dragontail, Ascana",
        //     description:
        //         "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
        //     buttonText: "View Frontend Projects",
        //     date: "August 2016 - present",
        //     icon: "work",
        // }, 
        {
            id: 1,
            title: "Début du projet",
            description:
                "Wiwok écrit les premières lignes de code de ce projet.",
            date: "25 Mars 2022"
        },
        {
            id: 1,
            title: "Premier menu en ligne",
            description:
                "Wiwok met en ligne le premier menu sur le site.",
            date: "4 avril 2022"
        },
        {
            id: 1,
            title: "Création du bot Discord",
            description:
                "Wiwok écrit les premières lignes du bot Discord.",
            date: "10 avril 2022",
        },
        {
            id: 1,
            title: "Unel rejoint le projet",
            description:
                "Unel rejoint le projet, il aide Wiwok dans le développement.",
            date: "24 juillet 2022",
        },
        {
            id: 1,
            title: "Un nouveau site ?",
            description:
                "Wiwok et Unel reflechisse serieusement a refaire l’interface complete du site",
            date: "24 juillet 2022",
        },
        {
            id: 1,
            title: "Un nouveau site !",
            description:
                "Il est maintenant decidé que le site doit être refait de manière plus propre. Les premières maquettes sont créées.",
            date: "24 juillet 2022",
        },
        {
            id: 1,
            title: "Corinan nous rejoint",
            description:
                "On a jamais trop d’aide, Corinan vient en renfort sur les maquettes, les corrections, etc... ",
            date: "9 aout 2022",
        },
        {
            id: 1,
            title: "le site et en test",
            description:
                "le site est terminée il est een teste et des peutit fignolage sont en cours",
            date: "1 septembre 2022",
        },
    ]

    return (
        <VerticalTimeline>
            {timelineElements.map(element => {
                return (
                    <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName="date"
                    >
                        <h3 className="vertical-timeline-element-title">
                            {element.title}
                        </h3>
                        <h5 className="vertical-timeline-element-subtitle">
                            {element.location}
                        </h5>
                        <p id="description">{element.description}</p>
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline >
    );
}

function Project() {
    return (
        <div className='project-box'>
            {motivation()}
            {Contributors()}
            {timeline()}
        </div>
    )
}

export default Project;