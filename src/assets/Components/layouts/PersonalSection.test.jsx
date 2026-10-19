import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PersonalSection } from '../organism/PersonalSection.jsx';

describe('PersonalSection - Pruebas del Organismo', () => {
    it('debe renderizar la información personal básica', () => {
        render(<PersonalSection />);

        expect(screen.getByText(/Analista Programador - Tecnologo Medico/i)).toBeInTheDocument();
    });

    it('debe renderizar el avatar del perfil', () => {
        render(<PersonalSection />);

        const avatarImg = screen.getByRole('img');
        expect(avatarImg).toBeInTheDocument();
    });
});