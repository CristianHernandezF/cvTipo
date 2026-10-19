import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from '../organism/NavBar.jsx';

describe('Navbar - Pruebas del Organismo', () => {
    it('debe renderizar el logotipo/nombre del portafolio', () => {
        render(<Navbar />);

        // Verifica la marca visual del Header
        expect(screen.getByText(/Mi Nuevo CV/i)).toBeInTheDocument();
    });

    it('debe renderizar los enlaces de navegación con sus correspondientes anclas (#id)', () => {
        render(<Navbar />);

        const sobreMiLink = screen.getByRole('link', { name: /sobre mí/i });
        const experienciaLink = screen.getByRole('link', { name: /experiencia/i });
        const estudiosLink = screen.getByRole('link', { name: /estudios/i });
        const proyectosLink = screen.getByRole('link', { name: /proyectos/i });
        const contactoLink = screen.getByRole('link', { name: /contacto/i });

        // Validamos que cada enlace tenga el href correcto para el scroll suave
        expect(sobreMiLink).toHaveAttribute('href', '#personal');
        expect(experienciaLink).toHaveAttribute('href', '#experiencia');
        expect(estudiosLink).toHaveAttribute('href', '#estudios');
        expect(proyectosLink).toHaveAttribute('href', '#proyectos');
        expect(contactoLink).toHaveAttribute('href', '#contacto');
    });
});