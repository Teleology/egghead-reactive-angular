import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {
  Customer,
  Project,
  ProjectsService,
  NotificationsService,
  CustomersService,
  ProjectsState, AddProject, UpdateProject, DeleteProject, LoadProject, selectAllProjects
} from '@workshop/core-data';
import { select, Store } from '@ngrx/store';

const emptyProject: Project = {
  id: null,
  title: '',
  details: '',
  percentComplete: 0,
  approved: false,
  customerId: null
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Observable<Project[]>;
  customers$: Observable<Customer[]>;
  currentProject: Project;

  constructor(
    private customerService: CustomersService,
    private store: Store<ProjectsState>,
    private ns: NotificationsService) {
    this.projects$ = store.pipe(
      select(selectAllProjects)
    )
  }

  ngOnInit() {
    this.getProjects();
    this.getCustomers();
    this.resetCurrentProject();
  }

  resetCurrentProject() {
    this.currentProject = emptyProject;
  }

  selectProject(project) {
    this.currentProject = project;
  }

  cancel(project) {
    this.resetCurrentProject();
  }

  getCustomers() {
    this.customers$ = this.customerService.all();
  }

  getProjects() {
    this.store.dispatch(new LoadProject());
    // this.projects$ = this.projectsService.all();
  }

  saveProject(project) {
    if (!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.store.dispatch(new AddProject(project));
    // this.projectsService.create(project)
    //   .subscribe(response => {
        this.ns.emit('Project created!');
        // this.getProjects();
        // this.resetCurrentProject();
      // });
  }

  updateProject(project) {
    this.store.dispatch(new UpdateProject(project));
    // this.projectsService.update(project)
    //   .subscribe(response => {
        this.ns.emit('Project saved!');
        // this.getProjects();
        // this.resetCurrentProject();
      // });
  }

  deleteProject(project) {
    this.store.dispatch(new DeleteProject(project.id));
    // this.projectsService.delete(project)
    //   .subscribe(response => {
        this.ns.emit('Project deleted!');
        // this.getProjects();
        // this.resetCurrentProject();
      // });
  }
}

