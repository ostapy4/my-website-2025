import { z } from "zod";

import { contactsSchema } from "utils/zod-schemas";

export const ContactsTemplate: React.FC<
  Readonly<z.infer<typeof contactsSchema>>
> = ({ email, firstname, message, plan, phone }) => (
  <html lang={"en"}>
    <body>
      <div>
        <h2>
          <span>New client: </span>
          <span>{firstname}</span>
        </h2>
        <ul style={{ listStyle: "none" }}>
          {email && (
            <li>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Email:{" "}
              </span>
              <span>{email}</span>
            </li>
          )}
          {phone && (
            <li>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Phone:{" "}
              </span>
              <span>{phone}</span>
            </li>
          )}
          {plan && (
            <li>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Package:{" "}
              </span>
              <span>{plan}</span>
            </li>
          )}
          {message && (
            <li>
              <span style={{ fontWeight: "bold", textTransform: "uppercase" }}>
                Message:{" "}
              </span>
              <span>{message}</span>
            </li>
          )}
        </ul>
      </div>
    </body>
  </html>
);
