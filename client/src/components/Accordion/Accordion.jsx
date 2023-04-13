import React, { useState } from 'react';
import './Accordion.scss';

// Material UI icon
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const newContent = content.split('\n');

  return (
    <div className="accordion">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <RemoveIcon className="icon" />
          ) : (
            <AddIcon className="icon" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {newContent.map((line) => (
            <p key={title} className="accordion-p">
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
