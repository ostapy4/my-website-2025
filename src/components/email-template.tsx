type EmailTemplateProps = {
  email: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <div>
    <p>Client email: {email}</p>
  </div>
);
