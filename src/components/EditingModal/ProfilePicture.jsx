import React from 'react';


const ProfilePicture = ({imageChangeHandler, imageSubmitHandler, imageURL}) => {
    return (
        <div className = "picture">
            <div className = "profilePicture">
            {
                imageURL != null? <img className = "displayPic" src={imageURL} alt="boohoo"/> : null
            }
                
            </div>
            <div className = "upload">
                <input className = "fileChoose" type = 'file' onChange ={(e) => imageChangeHandler(e)} />
                <button className = 'button' onClick = {imageSubmitHandler}>
                    Upload
                </button>
            </div>
        </div>
    )
}

export default ProfilePicture;