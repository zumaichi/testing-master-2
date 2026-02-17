export interface Project {
  id: string;
  name: string;
  externalId?: string;
  comments?: string;
  isActive: boolean;
  employees: EmployeeSummary[] | null;
}

export interface EmployeeSummary {
  id: string;
  isAssigned?: boolean;
  employeeName: string;
}
