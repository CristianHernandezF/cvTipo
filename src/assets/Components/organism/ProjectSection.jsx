import { Card, Row, Col, Typography } from 'antd';
import { ProjectCard } from '../molecules/ProjectCard';
import { projects } from '../Datos/portfolioData.js';

const { Title } = Typography;

export const ProjectsSection = () => {
    return (
        <section id="proyectos" style={{ padding: '20px 0' }}>
            <Card variant="borderless" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <Title level={3} style={{ marginBottom: 24, textAlign: 'center' }}>
                    Desarrollos y Proyectos
                </Title>
                <Row gutter={[16, 16]}>
                    {projects.map((project) => (
                        <Col xs={24} sm={12} lg={12} key={project.id}>
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                repoUrl={project.repoUrl}
                                tags={project.tags}
                            />
                        </Col>
                    ))}
                </Row>
            </Card>
        </section>
    );
};