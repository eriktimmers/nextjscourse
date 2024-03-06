'use client'
import React from 'react';

interface Props {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: Props) => {
    // Log it somewhere
    console.log('Error', error)
    return (
        <>
            <div>Oeps. Foutje, bedankt.</div>
            <button className="btn" onClick={() => reset()}>Retry</button>
        </>

    );
};

export default Error;