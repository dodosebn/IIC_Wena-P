import { Html, Head, Preview, Body, Container, Text } from '@react-email/components';
import * as React from 'react';

interface FormalinShareProps {
  senderName: string;
  receiverName: string;
  url: string;
}

export const FormalinShare = ({ senderName, receiverName, url }: FormalinShareProps) => {
  return (
    <Html>
      <Head />
      <Preview>{`${senderName} shared something with you!`}</Preview>
      <Body style={{ fontFamily: 'sans-serif', backgroundColor: '#f4f4f5', padding: '20px' }}>
        <Container style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '8px' }}>
          <Text style={{ fontSize: '20px', fontWeight: 'bold' }}>
            Hey {receiverName}!
          </Text>
          <Text style={{ fontSize: '16px' }}>
            {senderName} just shared a special post from IDEAISCAPITAL LTD with you.
          </Text>
          <Text style={{ fontSize: '14px', color: '#555' }}>
            Click the link below to check it out. 👇
          </Text>
          <a href={url} style={{ color: '#000', fontWeight: 'bold' }}>
            View the post
          </a>
          <Text style={{ fontSize: '12px', marginTop: '20px', color: '#999' }}>
            If you don’t recognize this email, you can safely ignore it.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default FormalinShare;
