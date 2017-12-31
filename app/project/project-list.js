/**
 * Created by tarva on 19.11.2017.
 */

function ProjectListController() {
  var ctrl = this;

  /**
   * Handle select project event
   * @param project - project to select
   */
  ctrl.selectProject = function (project) {
    if (ctrl.isLocked) return;
    ctrl.onSelectProject({project: project});
  }
}

angular.module('myApp').component('projectList', {
  templateUrl: 'project/project-list.html',
  controller: ProjectListController,
  bindings: {
    projects: '<',
    isLocked: '<',
    selectedProject: '<',
    onSelectProject: '&'
  }
});