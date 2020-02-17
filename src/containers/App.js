import React from 'react';
import './App.css';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import ResultCardList from '../components/ResultCardList';
import ResultCount from '../components/ResultCount';
import Scroll from '../components/Scroll';
import { setProjectField, setLanguageField, requestTrendingProjects, requestSearchedProjects, prevPageProjects, nextPageProjects } from '../actions';
import { connect } from 'react-redux';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

//mapping state from Redux store to props to be passed down from this container component
const mapStateToProps = (state) => {
  return {
    projectField: state.projectSearchField.project,
    languageField: state.languageSearchField.language,
    projects: state.requestProjects.projects,
    isPending: state.requestProjects.isPending,
    error: state.requestProjects.error,
    requestHasFailed: state.requestProjects.requestHasFailed,
    page: state.requestProjects.page
  }
};

//mapping actions to props to be passed down from this container component
const mapDispatchToProps = (dispatch) => {
  return {
    onProjectChange: (event) => dispatch(setProjectField(event.target.value)),
    onLanguageChange: (event) => dispatch(setLanguageField(event.target.value)),
    onRequestTrendingProjects: () => dispatch(requestTrendingProjects()),
    onRequestSearchedProjects: () => dispatch(requestSearchedProjects()),
    onNextPageProjects: () => dispatch(nextPageProjects()),
    onPrevPageProjects: () => dispatch(prevPageProjects()),
  }
}

class App extends React.Component {

  //On initial load, request trending repositories for the day
  componentDidMount() {
    this.props.onRequestTrendingProjects();
  }

  render() {
    //destructuring props
    const { onProjectChange, onLanguageChange, onRequestSearchedProjects, onNextPageProjects, onPrevPageProjects, page, isPending, requestHasFailed, projects, projectField, languageField } = this.props;
    return (

      <div className='pt0'>
        {/* header will be fixed at top, with all results scrollable underneath */}
        <header class="bg-navy fixed w-100 tc pb4">
        <nav class="tracked">
          <Header />
          <SearchBox projectChange={onProjectChange} languageChange={onLanguageChange} requestProjects={onRequestSearchedProjects} projectField={projectField} languageField={languageField} />
        </nav>
        </header>
        <div className='pt7'>
          <Scroll>
            <ErrorBoundary requestHasFailed={requestHasFailed} isPending={isPending}>
            <ResultCount projects={projects} projectField={projectField}/>
              <ResultCardList projects={projects} />
            </ErrorBoundary>
          </Scroll>
          {/*/ div for buttons. if page > 1 show back button. if more than 30 results, show next button */}
          <div className='tc pt3'>
            {projects !== undefined && page > 1 ? <button className='no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4' onClick={onPrevPageProjects}><FiArrowLeft /></button> : null}
            {projects !== undefined && projects.total_count > 30 ? <button className='no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4' onClick={onNextPageProjects}><FiArrowRight /></button> : null}
          </div>

        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
