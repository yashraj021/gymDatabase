import React from 'react';


const ProfilePicture = ({imageChangeHandler, imageSubmitHandler}) => {
    return (
        <div className = "picture">
            <div className = "profilePicture">

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