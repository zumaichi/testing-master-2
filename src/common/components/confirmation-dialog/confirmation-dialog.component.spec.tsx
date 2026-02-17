import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('componente ConfirmacionDialogo', () => {
  describe('renderizado', () => {
    it('muestra titulo, contenido y botones cuando esta abierto', () => {
      // Arrange
      const props = {
        isOpen: true,
        title: 'Titulo de confirmacion',
        children: 'Contenido de confirmacion',
        labels: {
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
        onAccept: vi.fn(),
        onClose: vi.fn(),
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      // Assert
      expect(screen.getByText('Titulo de confirmacion')).toBeInTheDocument();
      expect(screen.getByText('Contenido de confirmacion')).toBeInTheDocument();
      expect(screen.getByText('Cancelar')).toBeInTheDocument();
      expect(screen.getByText('Aceptar')).toBeInTheDocument();
    });

    it('no muestra el contenido cuando esta cerrado', () => {
      // Arrange
      const props = {
        isOpen: false,
        title: 'Titulo de confirmacion',
        children: 'Contenido de confirmacion',
        labels: {
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
        onAccept: vi.fn(),
        onClose: vi.fn(),
      };
      // Act
      render(<ConfirmationDialogComponent {...props} />);

      // Assert
      expect(
        screen.queryByText('Titulo de confirmacion')
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText('Contenido de confirmacion')
      ).not.toBeInTheDocument();
      expect(screen.queryByText('Cancelar')).not.toBeInTheDocument();
      expect(screen.queryByText('Aceptar')).not.toBeInTheDocument();
    });
  });

  describe('acciones', () => {
    it('al aceptar llama onAccept y luego onClose', () => {
      // Arrange
      const onAccept = vi.fn();
      const onClose = vi.fn();
      const props = {
        isOpen: true,
        title: 'Titulo de confirmacion',
        children: 'Contenido de confirmacion',
        labels: {
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
        onAccept,
        onClose,
      };
      render(<ConfirmationDialogComponent {...props} />);

      // Act
      screen.getByText('Aceptar').click();

      // Assert
      expect(onAccept).toHaveBeenCalledTimes(1);
      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onAccept).toHaveBeenCalledBefore(onClose);
    });
    it('al cancelar llama solo onClose', () => {
      // Arrange
      const onAccept = vi.fn();
      const onClose = vi.fn();
      const props = {
        isOpen: true,
        title: 'Titulo de confirmacion',
        children: 'Contenido de confirmacion',
        labels: {
          closeButton: 'Cancelar',
          acceptButton: 'Aceptar',
        },
        onAccept,
        onClose,
      };
      render(<ConfirmationDialogComponent {...props} />);

      // Act
      screen.getByText('Cancelar').click();

      // Assert
      expect(onAccept).not.toHaveBeenCalled();
      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
