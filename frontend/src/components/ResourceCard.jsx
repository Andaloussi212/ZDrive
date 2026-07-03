import { useState } from 'react';
import Button from './Button';

function ResourceCard({ resource }) {
  const [fileMessage, setFileMessage] = useState('');

  function handleFileAction() {
    setFileMessage("Le fichier réel n'est pas encore stocké sur le serveur.");
  }

  return (
    <article className="resource-card">
      <h2>{resource.title}</h2>

      {resource.description && <p>{resource.description}</p>}

      <div className="resource-meta">
        <span className="resource-badge">{resource.type}</span>
        <span className="resource-badge">{resource.format}</span>
        <span className="resource-badge">
          {resource.fileName || 'Aucun fichier'}
        </span>
      </div>

      <div className="resource-actions">
        {resource.fileUrl ? (
          <>
            <Button
              text="Consulter"
              variant="secondary"
              onClick={handleFileAction}
            />
            <Button text="Télécharger" onClick={handleFileAction} />
          </>
        ) : (
          <p className="empty-message">Aucun fichier disponible</p>
        )}
      </div>

      {fileMessage && <p className="empty-message">{fileMessage}</p>}
    </article>
  );
}

export default ResourceCard;
