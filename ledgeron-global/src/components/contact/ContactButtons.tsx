import { Button } from '../ui/Button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

interface ContactButtonsProps {
  phoneNumber: string;
  whatsappNumber: string;
  email: string;
  className?: string;
}

export function ContactButtons({
  phoneNumber,
  whatsappNumber,
  email,
  className = ''
}: ContactButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        href={`tel:${phoneNumber}`}
        variant="primary"
        className="group"
        isExternal
      >
        <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        Call Now
      </Button>
      
      <Button
        href={`https://wa.me/${whatsappNumber}`}
        variant="secondary"
        className="group"
        isExternal
      >
        <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        WhatsApp
      </Button>
      
      <Button
        href={`mailto:${email}`}
        variant="outline"
        className="group"
        isExternal
      >
        <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        Email Us
      </Button>
    </div>
  );
}