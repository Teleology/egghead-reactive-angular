import {Action} from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadProject = '[Projects] Load Data',
  ProjectsLoaded = '[Projects] Data Loaded',
  AddProject = '[Projects] Add Data',
  ProjectAdded = '[Projects] Data Added',
  UpdateProject = '[Projects] Update Data',
  ProjectUpdated = '[Projects] Data Updated ',
  DeleteProject = '[Projects] Delete Data',
  ProjectDeleted = '[Projects] Data deleted'
}

export class SelectProject implements Action {
  public readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(private payload: Project) {
  }
}

export class LoadProject implements Action {
  public readonly type = ProjectsActionTypes.LoadProject;
  constructor() {
  }
}

export class ProjectsLoaded implements Action {
  readonly type = ProjectsActionTypes.ProjectsLoaded;
  constructor(public payload: Project[]) {
  }
}

export class AddProject implements Action {
  public readonly type = ProjectsActionTypes.AddProject;
  constructor(private payload: Project) {
  }
}

export class ProjectAdded implements Action {
  public readonly type = ProjectsActionTypes.ProjectAdded;
  constructor(private payload: Project) {
  }
}

export class UpdateProject implements Action {
  public readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Project) {
  }
}

export class ProjectUpdated implements Action {
  public readonly type = ProjectsActionTypes.ProjectUpdated;
  constructor(private payload: Project) {
  }
}

export class DeleteProject implements Action {
  public readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: Project) {
  }
}
export class ProjectDeleted implements Action {
  public readonly type = ProjectsActionTypes.ProjectDeleted;
  constructor(private payload: Project) {
  }
}


export type ProjectsActions = SelectProject | AddProject | ProjectAdded |UpdateProject | ProjectUpdated |DeleteProject | ProjectDeleted|LoadProject | ProjectsLoaded;
