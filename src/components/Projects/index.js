import React, {useState} from 'react';

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
            name: 'Weather Forecast',
            description: 'Simple forecasting app for any location you select.'
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
    const [currentProject, setCurrentProject] = useState();
    const toggleModal = (image, i) => {
        setCurrentProject({...image, index: i});
        setIsModalOpen(!isModalOpen);
    }
    return(
        <div>
            {isModalOpen && <Modal currentProject}
        </div>
    )
}