import {Card, Typography, Tag, theme} from 'antd';


const { Title, Text, Paragraph } = Typography;

export const ExperienceCard = ({ company, role, startDate, endDate, description }) => {
    const { token: { colorPrimary } } = theme.useToken();
    return (
        <Card hoverable style={{ marginBottom: 12 }}>
            <Title level={4} style={{ marginBottom: 4 }}>{role}</Title>
            <Text strong style={{ color: colorPrimary}}>{company}</Text>
            <div style={{ marginTop: 8 }}>
                <Tag color="indigo">{startDate} - {endDate}</Tag>
            </div>
            <Paragraph style={{ marginTop: 12, marginBottom: 0 }}>
                {description}
            </Paragraph>
        </Card>
    );
};