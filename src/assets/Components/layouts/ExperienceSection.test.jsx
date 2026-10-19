import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ExperienceSection } from '../organism/ExperienceSection.jsx';

describe('ExperienceSection - Pruebas del Organismo', () => {
    it('debe renderizar el título de la sección de experiencia', () => {
        render(<ExperienceSection />);

        expect(screen.getByRole('heading', { name: /experiencia laboral/i })).toBeInTheDocument();
    });

    it('debe renderizar al menos un cargo laboral', () => {
        render(<ExperienceSection />);

        // Comprueba que los ítems del array de experiencia se renderizan
        expect(screen.getByText(/Tecnologo Medico Area Rayos X/i)).toBeInTheDocument();
    });
});