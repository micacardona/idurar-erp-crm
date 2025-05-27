import { ConfigProvider } from 'antd';

export default function Localization({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#222',
          colorLink: '#222',
          borderRadius: 0,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
