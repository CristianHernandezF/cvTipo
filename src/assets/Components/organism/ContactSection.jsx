import { useState } from 'react';
import { Card, Form, Input, Button, Space, message, Typography, Divider } from 'antd';
import { MailOutlined, UserOutlined, GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons';
import { personalInfo } from '../Datos/portfolioData.js';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export const ContactSection = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        setLoading(true);
        // Simulación de envío de formulario con estado
        setTimeout(() => {
            console.log('Mensaje recibido:', values);
            message.success('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
            form.resetFields();
            setLoading(false);
        }, 1200);
    };

    return (
        <section id="contacto" style={{ padding: '20px 0' }}>
            <Card variant="borderless" style={{ borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                <Title level={3} style={{ textAlign: 'center', marginBottom: 8 }}>Contacto</Title>
                <Paragraph style={{ textAlign: 'center', color: '#595959', marginBottom: 24 }}>
                    ¿Tienes un proyecto en mente o quieres conversar? ¡Escríbeme! o ¡Revisa mis redes Sociales!
                </Paragraph>

                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                    <Space size="middle">
                        <Button
                            type="primary"
                            icon={<LinkedinOutlined />}
                            href={personalInfo.socials.linkedin}
                            target="_blank"
                        >
                            LinkedIn
                        </Button>
                        <Button
                            icon={<GithubOutlined />}
                            href={personalInfo.socials.github}
                            target="_blank"
                        >
                            GitHub
                        </Button>
                    </Space>
                </div>

                <Divider style={{ margin: '24px 0' }} />

                <div style={{ maxWidth: 600, margin: '0 auto' }}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        requiredMark="optional"
                    >
                        <Form.Item
                            name="name"
                            label="Nombre completo"
                            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Ej. Ana María" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Correo electrónico"
                            rules={[
                                { required: true, message: 'Por favor ingresa tu correo' },
                                { type: 'email', message: 'Ingresa un correo válido (ej. usuario@dominio.com)' }
                            ]}
                        >
                            <Input prefix={<MailOutlined />} placeholder="ejemplo@correo.com" />
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label="Mensaje"
                            rules={[
                                { required: true, message: 'Escribe tu mensaje' },
                                { min: 10, message: 'El mensaje debe tener al menos 10 caracteres' }
                            ]}
                        >
                            <TextArea rows={4} placeholder="Escribe aquí tu mensaje..." />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 0 }}>
                            <Button type="primary" htmlType="submit" icon={<SendOutlined />} loading={loading} block>
                                Enviar Mensaje
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Card>
        </section>
    );
};