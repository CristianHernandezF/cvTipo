import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ContactSection } from '../organism/ContactSection.jsx';

describe('ContactSection - Pruebas del Organismo', () => {
    it('debe renderizar el título de contacto y los campos del formulario', () => {
        render(<ContactSection />);

        // Verificar que el título principal de la sección está presente
        expect(screen.getByRole('heading', { name: /contacto/i })).toBeInTheDocument();

        // Verificar que los campos requeridos existen en el DOM
        expect(screen.getByPlaceholderText(/ej. ana maría/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/ejemplo@correo.com/i)).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/escribe aquí tu mensaje/i)).toBeInTheDocument();
    });

    it('debe renderizar los botones de redes sociales (LinkedIn y GitHub)', () => {
        render(<ContactSection />);

        expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    });
});