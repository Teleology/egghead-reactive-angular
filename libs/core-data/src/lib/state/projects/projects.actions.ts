import {Action} from '@ngrx/store';
import { Project } from '@workshop/core-data';

export enum ProjectsActionTypes {
  ProjectSelected = '[Projects] Selected',
  LoadProject = '[Projects] Load Project',
  AddProject = '[Projects] Add Data',
  UpdateProject = '[Projects] Update Data',
  DeleteProject = '[Projects] Delete Data'
}

export class SelectProject implements Action {
  public readonly type = ProjectsActionTypes.ProjectSelected;
  constructor(private payload: Project) {
  }
}

export class LoadProject implements Action {
  public readonly type = ProjectsActionTypes.LoadProject;
  constructor(private payload: Project[]) {
  }
}

export class AddProject implements Action {
  public readonly type = ProjectsActionTypes.AddProject;
  constructor(private payload: Project) {
  }
}
export class UpdateProject implements Action {
  public readonly type = ProjectsActionTypes.UpdateProject;
  constructor(private payload: Project) {
  }
}
export class DeleteProject implements Action {
  public readonly type = ProjectsActionTypes.DeleteProject;
  constructor(private payload: Project) {
  }
}

export type ProjectsActions = SelectProject | AddProject | UpdateProject | DeleteProject | LoadProject;
