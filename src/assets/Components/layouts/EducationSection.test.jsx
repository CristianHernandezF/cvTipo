import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { EducationSection } from '../organism/EducationSection.jsx';

describe('EducationSection - Pruebas del Organismo', () => {
    it('debe renderizar el título de la sección de estudios', () => {
        render(<EducationSection />);

        expect(screen.getByRole('heading', { name: /estudios/i })).toBeInTheDocument();
    });

    it('debe renderizar la institución académica', () => {
        render(<EducationSection />);


        expect(screen.getByText(/Duoc UC/i)).toBeInTheDocument();
    });
});