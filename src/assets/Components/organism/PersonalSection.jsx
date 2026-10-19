import { Card } from 'antd';
import { ProfileHeader } from '../molecules/ProfileHeader';
import { personalInfo } from '../Datos/portfolioData.js';


export const PersonalSection = () => {
    const { name, role, bio, avatarUrl } = personalInfo;
    return (
        <section id="personal" style={{ padding: '40px 0' }}>
            <Card
                variant="borderless"
                style={{
                    background: '#fafafa',
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                }}
            >
                <ProfileHeader
                    name={name}
                    role={role}
                    bio={bio}
                    avatarUrl={avatarUrl}
                />
            </Card>
        </section>
    );
};