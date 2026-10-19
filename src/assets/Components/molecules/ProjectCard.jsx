import {Card, Tag, Space, theme} from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const ProjectCard = ({ title, description, image, repoUrl, tags }) => {
    const handleCardClick = () => {
        window.open(repoUrl, "_blank", "noopener,noreferrer");
    };
    const { token: { colorPrimary } } = theme.useToken();

    return (
        <Card
            hoverable
            onClick={handleCardClick}
            style={{ cursor: 'pointer' }}
            cover={
                <img
                    alt={`Previsualización de ${title}`}
                    src={image}
                    style={{ height: 180, objectFit: 'cover' }}
                />
            }
            actions={[
                <Space key="github" style={{ color: colorPrimary, fontWeight: 500 }}>
                    <GithubOutlined /> Ver Repositorio
                </Space>
            ]}
        >
            <Meta title={title} description={description} />
            <Space wrap style={{ marginTop: 16 }}>
                {tags?.map((tag, index) => (
                    <Tag color="indigo" key={index}>{tag}</Tag>
                ))}
            </Space>
        </Card>
    );
};