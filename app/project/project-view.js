/**
 * Created by tarva on 19.11.2017.
 */

function ProjectViewController($scope, projectService) {
    var ctrl = this;
    ctrl._isLocked = projectService.getLock();

    ctrl.main = function () {
        projectService.subscribeLock($scope, function (event, data) {
            ctrl._isLocked = data;
        });
    };

    /**
     * Set project to edit
     */
    ctrl.clickEditProject = function () {
        if (ctrl._isLocked) return;
      ctrl.onClickEditProject({project: ctrl.project})
    };

    /**
     * Delete current project
     */
    ctrl.deleteProject = function () {
        if (ctrl._isLocked) return;
        ctrl.onDeleteProject({project: ctrl.project});
    };

    /**
     * Toggle project done state
     * @param value - new project done state
     */
    ctrl.setProjectDone = function (value) {
        ctrl.project.done = value;
        ctrl.onEditProject({project: ctrl.project});
    };

    /**
     * Update project time
     * @param time - new project time
     */
    ctrl.onUpdateTime = function (time) {
        ctrl.project.timeInSeconds = time;
        projectService.updateProject(ctrl.project).then(function (data) {
            ctrl.project = data;
        });
    };

    ctrl.main();
}

angular.module('myApp').component('projectView', {
    templateUrl: 'project/project-view.html',
    controller: ProjectViewController,
    bindings: {
        project: '<',
        onEditProject: '&',
        onClickEditProject: '&',
        onDeleteProject: '&'
    }
});