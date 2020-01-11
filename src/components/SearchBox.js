import React from 'react';

const SearchBox = ({ projectChange, languageChange, requestProjects, projectField, languageField }) => {
    return (
        <div className='mt2'>
            <div className='pa2 mv2'>
                <input id='project' className='br2 pa3 h2 mr1 ba b--green bg-lightest-blue'
                    type='search' placeholder='Search for a project'
                    onChange={projectChange} />
                <select required className='pa3 h2 mr1 ba b--green bg-lightest-blue' name="languagelist" onChange={languageChange}>
                    <option disabled selected value> -- Select a Language -- </option>
                    <option value="assembly language">Assembly</option>
                    <option value="c">C</option>
                    <option value="clojure">Clojure</option>
                    <option value="coffeescript">CoffeeScript</option>
                    <option value="elixir">Elixir</option>
                    <option value="fortran">Fortran</option>
                    <option value="go">Go</option>
                    <option value="haskell">Haskell</option>
                    <option value="java">Java</option>
                    <option value="javascript">JavaScript</option>
                    <option value="matlab">MatLab</option>
                    <option value="pascal">Pascal</option>
                    <option value="python">Python</option>
                    <option value="r">R</option>
                    <option value="ruby">Ruby</option>
                    <option value="scala">Scala</option>
                    <option value="sql">SQL</option>
                    <option value="swift">Swift</option>
                </select>

                <div className='pt2 mt2'>
                {!projectField || languageField === '' ?
                    <button disabled className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib near-black' onClick={requestProjects}>Go!</button>
                    : <button className='f6 grow no-underline br-pill ba ph3 pv2 mb2 dib near-black' onClick={requestProjects}>Go!</button>}
                </div>

            </div>
        </div>
    )
}

export default SearchBox;