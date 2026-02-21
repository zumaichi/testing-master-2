import * as mapProjectFromApiToVm from './project.mapper';
import * as viewModel from './project.vm';


describe('null or undefined', () => {
  describe('null', () => {
    it('deberia devolver proyecto vacio', () => {
      // Arrange
      const project = null;

      // Act
      const result = mapProjectFromApiToVm.mapProjectFromApiToVm(
        project as any
      );

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });
  });
  describe('undefined', () => {
    it('deberia devolver proyecto vacio', () => {
      // Arrange
      const project = undefined;

      // Act
      const result = mapProjectFromApiToVm.mapProjectFromApiToVm(
        project as any
      );

      // Assert
      expect(result).toEqual(viewModel.createEmptyProject());
    });
  });
});
describe('employees null or undefined', () => {
  describe('lista ', () => {
    it('deberia devolver expected al recivir lista null', () => {
      // Arrange
      const project = {
        id: '1',
        name: 'Proyecto 1',
        description: 'description',
        comments: 'comments',
        isActive: true,
        employees: null,
      };
      const expected: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        description: 'description',
        comments: 'comments',
        isActive: true,
        employees: [],
      };

      // Act
      const result = mapProjectFromApiToVm.mapProjectFromApiToVm(
        project as any
      );

      // Assert
      expect(result).toEqual(expected);
    });
  });
  describe('lista ', () => {
    it('deberia devolver expected al recibir la lista de empleados', () => {
      // Arrange
      const project = {
        id: '1',
        name: 'Proyecto 1',
        description: 'description',
        comments: 'comments',
        isActive: true,
        employees: [
          { id: '1', employeeName: 'paco' },
          { id: '2', employeeName: 'maria' },
        ],
      };
      const expected: viewModel.Project = {
        id: '1',
        name: 'Proyecto 1',
        description: 'description',
        comments: 'comments',
        isActive: true,
        employees: [
          { id: '1', employeeName: 'paco' },
          { id: '2', employeeName: 'maria' },
        ],
      };

      // Act
      const result = mapProjectFromApiToVm.mapProjectFromApiToVm(
        project as any
      );

      // Assert
      expect(result).toEqual(expected);
    });
  });
});
