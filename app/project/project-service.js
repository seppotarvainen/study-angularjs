/**
 * Created by tarva on 19.11.2017.
 */

function ProjectService(http) {
    var projectService = this;

    var URL =  "http://localhost:8080/projects";

    /**
     * Load all projects
     * @returns {Promise} - list of projects
     */
    projectService.loadProjects = function() {
        return http.get(URL).then(function (response) {
            return response.data;
        });
    };

    /**
     * Add new project
     * @param project - project data
     * @returns {Promise} - added project
     */
    projectService.addProject = function (project) {
        return http.post(URL, project).then(function (response) {
            return response.data;
        })
    };

    /**
     * Delete project
     * @param project - project to delete
     * @returns {Promise} - null
     */
    projectService.deleteProject = function (project) {
        return http.delete(URL + "/" + project.id).then(function (response) {
            return response.data;
        })
    };

    /**
     * Update project
     * @param project - project to update
     * @returns {Promise} - updated project
     */
    projectService.updateProject = function (project) {
        return http.put(URL + "/" + project.id, project).then(function (response) {
            return response.data;
        })
    };

    return projectService;
}

angular.module('myApp').factory('projectService', ['$http', ProjectService]);