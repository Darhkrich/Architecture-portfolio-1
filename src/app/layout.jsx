import './globals.css';
import { ModalProvider } from '../context/ModalContext';
import ContactModal from '../components/ContactModal';

export const metadata = {
  title: 'Arch.Studio Portfolio',
  description: 'Minimalist Architecture Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ModalProvider>
          {children}
          {/* The Modal sits here, waiting to be triggered */}
          <ContactModal />
        </ModalProvider>
      </body>
    </html>
  );
}