import React from 'react'
import './App.css'
import {PersonalSection} from "./assets/Components/organism/PersonalSection.jsx";
import {ConfigProvider, Layout} from "antd";
import {ExperienceSection} from "./assets/Components/organism/ExperienceSection.jsx";
import {EducationSection} from "./assets/Components/organism/EducationSection.jsx";
import {ProjectsSection} from "./assets/Components/organism/ProjectSection.jsx";
import {ContactSection} from "./assets/Components/organism/ContactSection.jsx";
import {FooterSection} from "./assets/Components/organism/FooterSection.jsx";
import {Navbar} from "./assets/Components/organism/NavBar.jsx";
const { Content } = Layout;
function App() {
  return (

      <ConfigProvider
          theme={{
            token: {
                colorPrimary: '#4f46e5',
                colorBgBase: '#f8fafc',
                borderRadius: 12,
                fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            },
              components: {
                  Card: {
                      colorBgContainer: '#ffffff',
                      boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)', // Sombra sutil elegante
                  },
                  Button: {
                      fontWeight: 600,
                  }
              }
          }}
      >
        <Layout style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            <Navbar />
          <Content
              style={{
                padding: '24px 50px',
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%'
              }}
          >
                <PersonalSection />
                <ExperienceSection />
                <EducationSection />
                <ProjectsSection />
                <ContactSection />
                <FooterSection />
          </Content>
        </Layout>
      </ConfigProvider>

  )
}

export default App
