import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

export const CaptineThankYouEmail = ({ fullName, vehicleType, vehicleModel, phone, phoneType, address }) => (
    <Html>
        <Head />
        <Preview>Thank you for registering with Kabseh, {fullName}!</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={logoSection}>
                    <Img
                        src="https://media.licdn.com/dms/image/v2/D4E0BAQHvAL7d2ZoJZA/company-logo_200_200/B4EZeCxNSVG4AQ-/0/1750245627884/kabseh_jo_logo?e=1755734400&v=beta&t=TYR8ZrHcyUJwOsL_DYlzczA6SY79OMJ9MhBBblshXFc"
                        alt="Kabseh Logo"
                        style={logo}
                    />
                </Section>

                <Section style={header}>
                    <Heading style={h1}>Welcome Aboard, Captain!</Heading>
                    <Text style={subtitle}>We&apos;re excited to have you join the Kabseh delivery team.</Text>
                </Section>

                <Section style={content}>
                    <Text style={greeting}>Hello {fullName},</Text>

                    <Text style={text}>
                        Thank you for registering to be a captain with us! Your application has been successfully
                        received and our team will review it and get back to you within 24-48 hours.
                    </Text>

                    <Section style={messageContainer}>
                        <Text style={messageLabel}>📋 Your Registration Details</Text>
                        <Section style={messageDetails}>
                            <Text style={messageText}><span style={labelText}>Full Name:</span> {fullName}</Text>
                            <Text style={messageText}><span style={labelText}>Vehicle Type:</span> {vehicleType}</Text>
                            <Text style={messageText}><span style={labelText}>Vehicle Model:</span> {vehicleModel}</Text>
                            <Text style={messageText}><span style={labelText}>Phone Number:</span> {phone}</Text>
                            <Text style={messageText}><span style={labelText}>Phone Type:</span> {phoneType}</Text>
                            <Text style={messageText}><span style={labelText}>Address:</span> {address}</Text>
                        </Section>
                    </Section>

                    <Section style={ctaSection}>
                        <Text style={text}>
                            In the meantime, you can check our resources or contact us if you have any questions.
                        </Text>
                        <Text style={contactInfo}>
                            📞 Call us: +1 (555) 123-4567<br />
                            ✉️ Email: support@kabseh.com
                        </Text>
                    </Section>

                    <Text style={signatureText}>
                        Best regards,<br />
                        <span style={teamName}>The Kabseh Team</span>
                    </Text>
                </Section>

                <Section style={footer}>
                    <Text style={footerText}>
                        You received this email because you submitted a captain registration form on kabseh.com
                    </Text>
                    <Text style={footerCopyright}>
                        © 2024 Kabseh. All rights reserved.
                    </Text>
                     <Section style={socialSection}>
                        <Text style={footerText}>
                            Follow us for delicious updates!
                        </Text>
                    </Section>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default CaptineThankYouEmail;

const main = {
    backgroundColor: '#fff8f2',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    padding: '20px 0',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    maxWidth: '600px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 8px 32px rgba(240, 74, 36, 0.1)',
};

const logoSection = {
    backgroundColor: '#f04a24',
    padding: '32px 24px',
    textAlign: 'center',
};

const logo = {
    margin: '0 auto',
    display: 'block',
};

const header = {
    backgroundColor: 'linear-gradient(135deg, #f04a24 0%, #4f8765 100%)',
    padding: '40px 24px 32px',
    textAlign: 'center',
    background: '#f04a24',
};

const h1 = {
    color: '#ffffff',
    fontSize: '32px',
    fontWeight: '700',
    margin: '0 0 12px 0',
    letterSpacing: '-0.5px',
};

const subtitle = {
    color: '#ffffff',
    fontSize: '16px',
    margin: '0',
    opacity: '0.9',
    fontWeight: '400',
};

const content = {
    padding: '40px 32px',
};

const greeting = {
    color: '#f04a24',
    fontSize: '20px',
    fontWeight: '600',
    margin: '0 0 24px 0',
};

const text = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '0 0 24px 0',
};

const messageContainer = {
    backgroundColor: '#fff8f2',
    border: '2px solid #f04a24',
    borderRadius: '16px',
    padding: '24px',
    margin: '32px 0',
};

const messageLabel = {
    color: '#f04a24',
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 20px 0',
    textAlign: 'center',
};

const messageDetails = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid rgba(240, 74, 36, 0.1)',
};

const labelText = {
    color: '#4f8765',
    fontWeight: '600',
    marginRight: '8px',
};

const messageText = {
    color: '#333333',
    fontSize: '15px',
    margin: '0 0 12px 0',
    lineHeight: '22px',
};

const ctaSection = {
    backgroundColor: '#fff8f2',
    borderRadius: '12px',
    padding: '24px',
    margin: '32px 0',
    textAlign: 'center',
};

const contactInfo = {
    color: '#4f8765',
    fontSize: '16px',
    fontWeight: '600',
    margin: '16px 0 0 0',
    lineHeight: '28px',
};

const signatureText = {
    color: '#333333',
    fontSize: '16px',
    lineHeight: '26px',
    margin: '32px 0 0 0',
};

const teamName = {
    color: '#f04a24',
    fontWeight: '600',
};

const footer = {
    backgroundColor: '#4f8765',
    padding: '32px 24px',
    textAlign: 'center',
};

const footerText = {
    color: '#ffffff',
    fontSize: '14px',
    lineHeight: '22px',
    margin: '0 0 12px 0',
    opacity: '0.9',
};

const footerCopyright = {
    color: '#ffffff',
    fontSize: '13px',
    margin: '20px 0 0 0',
    fontWeight: '600',
};

const socialSection = {
    margin: '24px 0 0 0',
    paddingTop: '20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
}; 