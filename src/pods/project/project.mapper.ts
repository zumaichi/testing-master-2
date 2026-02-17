import { mapToCollection } from '#common/mappers';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

const mapEmployeeSummaryFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary
): viewModel.EmployeeSummary => ({
  ...employeeSummary,
});

const mapEmployeeSummaryListFromApiToVm = (
  employeeSummary: apiModel.EmployeeSummary[]
): viewModel.EmployeeSummary[] =>
  mapToCollection(employeeSummary, (es) => mapEmployeeSummaryFromApiToVm(es));

export const mapProjectFromApiToVm = (
  project: apiModel.Project
): viewModel.Project => {
  return Boolean(project)
    ? {
        ...project,
        description: project.description, //agregado para q funcione los test de las listas vacias o con datos
        employees: mapEmployeeSummaryListFromApiToVm(project.employees || []),
      }
    : viewModel.createEmptyProject();
};
