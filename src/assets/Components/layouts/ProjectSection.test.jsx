import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectsSection } from '../organism/ProjectSection.jsx';

describe('ProjectsSection - Pruebas del Organismo', () => {
    it('debe renderizar el título de la sección de proyectos', () => {
        render(<ProjectsSection />);

        expect(screen.getByRole('heading', { name: /desarrollos y proyectos/i })).toBeInTheDocument();
    });

    it('debe renderizar los enlaces a los repositorios de GitHub', () => {
        render(<ProjectsSection />);


        const repoButtons = screen.getAllByText(/Ver Repositorio/i);
        expect(repoButtons.length).toBeGreaterThan(0);
    });
});