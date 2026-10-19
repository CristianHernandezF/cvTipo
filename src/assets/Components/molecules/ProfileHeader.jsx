import { Typography, Space } from 'antd';
import { UserAvatar } from '../atoms/UserAvatar';

const { Title, Paragraph, Text } = Typography;

export const ProfileHeader = ({ name, role, bio, avatarUrl }) => {
    return (
        <Space direction="vertical" align="center" style={{ width: '100%', textAlign: 'center' }}>
            <UserAvatar src={avatarUrl} alt={name} />
            <div>
                <Title level={2} style={{ marginBottom: 4 }}>{name}</Title>
                <Text type="secondary" strong style={{ fontSize: '1.1rem' }}>{role}</Text>
            </div>
            <Paragraph style={{ maxWidth: 600, fontSize: '1rem', marginTop: 12 }}>
                {bio}
            </Paragraph>
        </Space>
    );
};