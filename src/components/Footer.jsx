export default function Footer() {
  const socialLinks = [
    { icon: 'linkedin', url: 'https://linkedin.com/in/maulanakevinp', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/maulanakevinp', label: 'GitHub' },
    { icon: 'facebook', url: 'https://facebook.com/maulanakevinp', label: 'Facebook' },
    { icon: 'instagram', url: 'https://instagram.com/maulanakevinp', label: 'Instagram' },
    { icon: 'twitter', url: 'https://twitter.com/maulanakevinp_', label: 'Twitter' },
    { icon: 'whatsapp', url: 'https://wa.me/6282331571857', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.icon}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={link.label}
            >
              <i className={`text-2xl ion-social-${link.icon}${link.icon === 'instagram' ? '-outline' : ''}`}></i>
            </a>
          ))}
        </div>
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Maulana Kevin Pradana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
