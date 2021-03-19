import React, {useState} from 'react';
import Modal from '../Modal';
import './Projects.css'

function ProjectList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [photos] = useState([
        {
            name: 'Something Special',
            description: 'Local marketplace for event decor'
        },
        {
            name: "Dungeon's End",
            description: 'Dunegons and Dragons-based web app.'
        },
        {
            name: 'Tech Blog',
            description: 'Web blog where techies can chat all things tech!'
        },
        {
            name: 'Budget Tracker',
            description: 'Budget Tracking PWA utilizing indexed DB for offline functionality.'
        },
        {
            name: 'Team Profile Generator',
            description: 'Node CLI to quickly compile company labor data.'
        },
        {
            name: 'Pizza-Hunt',
            description: 'PWA Pizza blog... need I say more?!'
        }
    ]);
    const currentProjects = photos;

    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return(
        <div>
            {isModalOpen && <Modal currentProject={currentProject} onClose={toggleModal} />}
            <div className='flex-ports'>
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/Projects/${i}.png`).default}
                        alt={image.name}
                        onClick={() => toggleModal(image, i)}
                        className='img-thumbnail project-img'
                        key={image.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectList;