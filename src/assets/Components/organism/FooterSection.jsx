import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

export const FooterSection = () => {
    // Date() toma la fecha del sistema y get full year obtiene el año.
    const currentYear = new Date().getFullYear();

    return (
        <Footer style={{ textAlign: 'center', backgroundColor: '#fafafa', borderRadius: '12px', marginTop: '24px' }}>
            <Text type="secondary">
                © {currentYear} Portafolio Personal Cristian Hernandez. Todos los derechos reservados. Desarrollado en React + Ant Design.
            </Text>
        </Footer>
    );
};