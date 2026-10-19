import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FooterSection } from '../organism/FooterSection.jsx';

describe('FooterSection - Pruebas del Organismo', () => {
    it('debe calcular y renderizar el año actual dinámicamente', () => {
        render(<FooterSection />);

        const currentYear = new Date().getFullYear().toString();

        expect(screen.getByText(new RegExp(currentYear, 'i'))).toBeInTheDocument();
    });
});