// Import the Skill component as Skill for use in this component
import Skill from './Skill';

function Skills() {
    return (
        <div className="skills">
            {/* Heading for the title */}
            <h2>I have experience with these technologies</h2>
            {/* Create a div and give it a class of skillsGrid for styling */}
            <div className="skillsGrid">
                {/* Render multiple copies of the Skill component with updated source, alt, and title for each icon */}
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for React" title="React" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS 3" title="CSS 3" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="The logo icon for Tailwind CSS" title="Tailwind CSS" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="The logo icon for GitHub" title="GitHub" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="The logo icon for NPM" title="NPM" />
                <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS" />
            </div>            
        </div>
    );
}

export default Skills;