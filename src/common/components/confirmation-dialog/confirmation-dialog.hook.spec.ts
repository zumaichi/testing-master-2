import { renderHook, waitFor } from '@testing-library/react';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog test', () => {
  describe('verifica useConfirmationDialog es una funcion', () => {
    it('deberia ser una funcion', () => {
      // Arrange

      // Act
      const { result } = renderHook(() => useConfirmationDialog());
      // Assert
      expect(result.current.onAccept).toEqual(expect.any(Function));
      expect(result.current.onClose).toEqual(expect.any(Function));
      expect(result.current.onOpenDialog).toEqual(expect.any(Function));
    });
  });

  describe('verifica el inicio del hook', () => {
    it('deberia abrir el dialogo y establecer el item a eliminar', async () => {
      // Arrange
      const newItem = { id: '1', name: 'Item 1' };
      // Act
      const { result } = renderHook(() => useConfirmationDialog());
      result.current.onOpenDialog(newItem);
      // Assert

      await waitFor(() => {
        expect(result.current.isOpen).toBe(true);
        expect(result.current.itemToDelete).toEqual(newItem);
      });
    });
  });

  describe('verifica el cierre del dialogo', () => {
    it('deberia cerrar el dialogo y limpiar el item a eliminar', async () => {
      // Arrange
      const newItem = { id: '1', name: 'Item 1' };
      // Act
      const { result } = renderHook(() => useConfirmationDialog());
      result.current.onOpenDialog(newItem);
      result.current.onClose();
      // Assert

      await waitFor(() => {
        expect(result.current.isOpen).toBe(false);
        expect(result.current.itemToDelete).toEqual(newItem);
      });
    });
  });
});
