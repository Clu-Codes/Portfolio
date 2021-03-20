import React, {useState} from 'react';
import Modal from '../Modal';
import './Projects.css'

function ProjectList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const projects = [
        {
            name: 'Something Special',
            description: 'Local marketplace for event decor',
            url: 'https://cmnw-something-special.herokuapp.com/login'
        },
        {
            name: "Dungeon's End",
            description: 'Dunegons and Dragons-based web app.',
            url: 'https://clu-codes.github.io/dungeons-end/'
        },
        {
            name: 'Tech Blog',
            description: 'Web blog where techies can chat all things tech!',
            url: 'https://clu-codes-tech-blog.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            description: 'Budget Tracking PWA utilizing indexed DB for offline functionality.',
            url: 'https://clu-budget-tracker.herokuapp.com/'
        },
        {
            name: 'Team Profile Generator',
            description: 'Node CLI to quickly compile company labor data.',
            url: 'https://github.com/Clu-Codes/team-profile-generator'
        },
        {
            name: 'Pizza-Hunt',
            description: 'Pizza blog... need I say more?!',
            url: 'https://obscure-brook-94041.herokuapp.com/'
        }
    ];
    // const currentProjects = photos;

    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return(
        <div className='container'>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div>
                {projects.map((image, i) => (
                <div className='test'>
                    <img
                        src={require(`../../assets/Projects/${i}.png`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image, i)}
                        className='img-thumbnail project-img'
                        key={image.name}
                    />
                    <a href={image.url} target='_blank' rel='noreferrer' className='dest-links'>Go To Project</a>
                </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectList;