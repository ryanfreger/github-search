import {
    CHANGE_PROJECT_FIELD,
    CHANGE_LANGUAGE_FIELD,
    REQUEST_PROJECTS_PENDING,
    REQUEST_PROJECTS_SUCCESS,
    REQUEST_PROJECTS_FAILED,
    REQUEST_PROJECTS_SUCCESS_NEXT,
    REQUEST_PROJECTS_SUCCESS_PREV
} from './constants';

export const setProjectField = (text) => ({
    type: CHANGE_PROJECT_FIELD, 
    payload: text
});

export const setLanguageField = (text) => ({
    type: CHANGE_LANGUAGE_FIELD, 
    payload: text
});

export const requestTrendingProjects = () => (dispatch) => {
    let todayDate = new Date().toISOString().slice(0,10);
    dispatch({type: REQUEST_PROJECTS_PENDING})
    fetch(`https://api.github.com/search/repositories?q=created:${todayDate}+sort:stars&order=desc`)
    .then(response => response.json())
    .then((data) => dispatch( {type: REQUEST_PROJECTS_SUCCESS, payload: data} ))
    .catch((error) => {dispatch( {type: REQUEST_PROJECTS_FAILED, payload: error} )})
}

export const requestSearchedProjects = () => (dispatch, getState) => {
    const state = getState();
    dispatch({type: REQUEST_PROJECTS_PENDING})
    fetch(`https://api.github.com/search/repositories?q=${state.projectSearchField.project}+language:${state.languageSearchField.language}&page=${state.requestProjects.page}&per_page=30`)
    .then(response => response.json())
    .then((data) => dispatch( {type: REQUEST_PROJECTS_SUCCESS, payload: data} ))
    .catch((error) => {dispatch( {type: REQUEST_PROJECTS_FAILED, payload: error} )})
}

export const nextPageProjects = () => (dispatch, getState) => {
    const state = getState();
    dispatch({type: REQUEST_PROJECTS_PENDING})
    fetch(`https://api.github.com/search/repositories?q=${state.projectSearchField.project}+language:${state.languageSearchField.language}&page=${state.requestProjects.page + 1}&per_page=30`)
    .then(response => response.json())
    .then((data) => dispatch( {type: REQUEST_PROJECTS_SUCCESS_NEXT, payload: data} ))
    .catch((error) => {dispatch( {type: REQUEST_PROJECTS_FAILED, payload: error} )})
}

export const prevPageProjects = () => (dispatch, getState) => {
    const state = getState();
    dispatch({type: REQUEST_PROJECTS_PENDING})
    fetch(`https://api.github.com/search/repositories?q=${state.projectSearchField.project}+language:${state.languageSearchField.language}&page=${state.requestProjects.page - 1}&per_page=30`)
    .then(response => response.json())
    .then((data) => dispatch( {type: REQUEST_PROJECTS_SUCCESS_PREV, payload: data} ))
    .catch((error) => {dispatch( {type: REQUEST_PROJECTS_FAILED, payload: error} )})
}