import React from 'react';

const ResultCardList = (projects) => {

    //if repositories returned from request, build table with results
    //results show repo name, username, description (if there is one), language (if there is one)
    if (projects.projects.items) {
        return (

            <div className='tc'>
                <div className="overflow-auto">
                    <table className='f6 w-100 center'>
                        {projects.projects.items.map((project, i) => {
                            return (
                                <tbody key={i} style={(i % 2 === 0 ? { backgroundColor: 'lightgray' } : null)}>
                                    <tr style={{ fontSize: 10, paddingTop: 10 }}>
                                        <td>
                                            <div style={{ display: 'inline' }}>
                                                <a href={project.html_url} target='blank' className='link dim dark-blue underline-hover'>
                                                    <h2>{project.name}</h2>
                                                </a>
                                                <h3>{project.owner.login}</h3>
                                                {project.description ? <p>Description: {project.description}</p> : null}
                                                {project.language ? <p>Language: {project.language}</p> : null}
                                                <p>Last Commit: {project.updated_at}</p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })}
                    </table>
                </div>
            </div>
        )
    } else {
        return <h1>wow</h1>
    }
}

export default ResultCardList;