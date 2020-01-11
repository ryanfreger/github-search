import React from 'react';

//Simple component for showing total results returned from request
const ResultCount = (projects, projectField) => {
    return (
        <div className='tc f3'>
             <p className='b underline'>{projects.projects.total_count} Results Found</p>
        </div>
    )
}

export default ResultCount;