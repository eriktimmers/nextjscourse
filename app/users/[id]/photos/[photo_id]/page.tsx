import React from 'react';

interface Props {
    params: {
        id: number;
        photo_id: number;
    }
}

const UserPhoto = ({ params: { id, photo_id } }: Props) => {
    return (
        <div>
            User: {id} | Photo: {photo_id}
        </div>
    );
};

export default UserPhoto;