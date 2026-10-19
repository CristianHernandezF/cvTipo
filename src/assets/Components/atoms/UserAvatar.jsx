import {Avatar, theme} from 'antd';

export const UserAvatar = ({ src, alt = "Fotografía de perfil", size = 120 }) => {
    const { token: { colorPrimary } } = theme.useToken();
    return (
        <Avatar
            src={src}
            alt={alt}
            size={size}
            style={{
                border: `3px solid ${colorPrimary}`,
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
        />
    );
};