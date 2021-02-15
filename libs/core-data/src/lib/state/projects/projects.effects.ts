import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProjectAdded, ProjectDeleted, ProjectsActionTypes, ProjectsLoaded, ProjectUpdated } from './projects.actions';
import { map, switchMap } from 'rxjs/operators';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project.model';
import { DataPersistence } from '@nrwl/nx';
import { ProjectsState } from '@workshop/core-data';

@Injectable({providedIn: 'root'})
export class ProjectsEffects {
  @Effect()
  loadProjects$ = this.action$.pipe(
    ofType(ProjectsActionTypes.LoadProject),
    switchMap((action) => this.projectsService.all().pipe(map((res: Project[]) => new ProjectsLoaded(res))))
  )

  @Effect()
  addProject$ = this.action$.pipe(
    ofType(ProjectsActionTypes.AddProject),
    switchMap((action: {type: string, payload: any}) => this.projectsService.create(action.payload).pipe(map((res: Project) => new ProjectAdded(res))))
  )


  @Effect()
  updateProject$ = this.action$.pipe(
    ofType(ProjectsActionTypes.UpdateProject),
    switchMap((action: {type: string, payload: any}) => this.projectsService.update(action.payload).pipe(map((res: Project) => new ProjectUpdated(res))))
  )

  @Effect()
  deleteProject$ = this.action$.pipe(
    ofType(ProjectsActionTypes.DeleteProject),
    switchMap((action: {type: string, payload: any}) => this.projectsService.delete(action.payload).pipe(map((res: Project) => new ProjectDeleted(res))))
  )

  constructor(
    private action$: Actions,
    private dataPersistence: DataPersistence<ProjectsState>
    private projectsService: ProjectsService
  ) {
  }
}
