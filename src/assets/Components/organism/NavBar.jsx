import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, AppstoreOutlined, SolutionOutlined, ReadOutlined, MailOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Text } = Typography;
// los items nos indica a que parte se va a mover de la pagina
export const Navbar = () => {
    const items = [
        { label: <a href="#personal">Sobre mí</a>, key: 'personal', icon: <UserOutlined /> },
        { label: <a href="#experiencia">Experiencia</a>, key: 'experiencia', icon: <SolutionOutlined /> },
        { label: <a href="#estudios">Estudios</a>, key: 'estudios', icon: <ReadOutlined /> },
        { label: <a href="#proyectos">Proyectos</a>, key: 'proyectos', icon: <AppstoreOutlined /> },
        { label: <a href="#contacto">Contacto</a>, key: 'contacto', icon: <MailOutlined /> },
    ];

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid #e2e8f0',
                padding: '0 24px',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Text strong style={{ fontSize: '1.1rem', color: '#0f172a' }}>
                    <span style={{ color: '#4f46e5' }}>Mi Nuevo CV</span>
                </Text>
            </div>

            <Menu
                mode="horizontal"
                items={items}
                style={{
                    borderBottom: 'none',
                    backgroundColor: 'transparent',
                    minWidth: '400px',
                    justifyContent: 'flex-end',
                }}
            />
        </Header>
    );
};