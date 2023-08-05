import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const PhotoUploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const handleFileUpload = () => {
    // Handle file upload logic here (e.g., send files to server or process them)
    console.log(selectedFiles);
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop} accept="image/*" multiple>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag and drop photos here or click to select files.</p>
          </div>
        )}
      </Dropzone>
      {selectedFiles.length > 0 && (
        <div>
            <br></br>
          <b>Uploaded Photos:</b>
          <br></br>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PhotoUploadForm;