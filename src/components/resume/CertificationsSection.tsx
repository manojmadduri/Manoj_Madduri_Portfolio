
interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection = ({ certifications }: CertificationsSectionProps) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 gradient-text">Certifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="border border-border rounded-lg p-4 hover:border-secondary transition-colors animate-fade-in"
          >
            <h4 className="text-lg font-semibold">{cert.name}</h4>
            <p className="text-foreground/70">{cert.issuer} • {cert.date}</p>
            <a href={cert.link} className="text-secondary hover:underline text-sm mt-2 inline-block">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
