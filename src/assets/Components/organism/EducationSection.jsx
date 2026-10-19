import { Card, List, Tag, Typography } from 'antd';
import { education } from '../Datos/portfolioData.js';

const { Title } = Typography;
//  tag nos sirve para darle un estilo definido a los item que se crean
// renderItem nos esta ayudando a decir que elemento se va a renderizar en este caso los datos en portfolioData.
export const EducationSection = () => {
    return (
        <section id="estudios" style={{ padding: '20px 0' }}>
            <Card variant="borderless" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <Title level={3} style={{ marginBottom: 24 }}>Estudios y Formación</Title>
                <List
                    itemLayout="horizontal"
                    dataSource={education}
                    renderItem={(item) => (
                        <List.Item extra={<Tag color="indigo" style={{ fontSize: '0.9rem', padding: '4px 12px' }}>{item.year}</Tag>}>
                            <List.Item.Meta
                                title={<span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{item.degree}</span>}
                                description={`${item.institution} — ${item.status}`}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        </section>
    );
};