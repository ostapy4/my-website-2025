type EmailTemplateProps = {
  email: string;
};

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  email,
}) => (
  <html lang={"en"}>
    <body>
      <div>
        <p>Client email: {email}</p>
      </div>
    </body>
  </html>
);
