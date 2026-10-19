import { Card, Timeline, Typography } from 'antd';
import { ExperienceCard } from '../molecules/ExperienceCard';
import { experiences } from '../Datos/portfolioData.js';

const { Title } = Typography;

export const ExperienceSection = () => {
    const timelineItems = experiences.map((item) => ({
        children: (
            <ExperienceCard
                key={item.id}
                company={item.company}
                role={item.role}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
            />
        ),
    }));

    return (
        <section id="experiencia" style={{ padding: '20px 0' }}>
            <Card variant="borderless" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <Title level={3} style={{ marginBottom: 24 }}>Experiencia Laboral</Title>
                <Timeline items={timelineItems} />
            </Card>
        </section>
    );
};