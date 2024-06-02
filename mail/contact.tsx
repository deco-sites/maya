import {
  Body,
  // Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  // Link,
  Preview,
  Section,
  Text,
} from "apps/resend/utils/reactEmail.ts";

interface Props {
  name: string;
  email: string;
  linkedin: string;
  skills?: string;
  insterestedCompanies?: string;
  additionalInterests?: string;
}

export const ContactEmailTemplate = ({
  name,
  email,
  linkedin,
  skills,
  insterestedCompanies,
  additionalInterests,
}: Props) => (
  <Html>
    <Head />
    <Preview>
      Email com dados preenchidos no formulário da página
      https://maya.deco.site/career
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4277/ce106e89-e920-43e4-bc2f-530da75d149e`}
            width="246"
            height="45"
            alt="Maya"
          />
          <Hr style={hr} />
          <Heading style={title}>
            Nome
          </Heading>
          <Text style={paragraph}>
            {name}
          </Text>
          <Hr style={hr} />
          <Heading style={title}>
            Email
          </Heading>
          <Text style={paragraph}>
            {email}
          </Text>
          <Hr style={hr} />
          <Heading style={title}>
            Linkedin
          </Heading>
          <Text style={paragraph}>
            {linkedin}
          </Text>
          <Hr style={hr} />
          {!!skills && (
            <>
              <Heading style={title}>
                Skills
              </Heading>
              <Text style={paragraph}>
                {skills}
              </Text>
              <Hr style={hr} />
            </>
          )}
          {!!insterestedCompanies && (
            <>
              <Heading style={title}>
                Insterested Companies
              </Heading>
              <Text style={paragraph}>
                {insterestedCompanies}
              </Text>
              <Hr style={hr} />
            </>
          )}

          <Heading style={title}>
            Additional Interests
          </Heading>
          <Text style={paragraph}>
            {additionalInterests}
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Maya, Deco site
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const title = {
  color: "#525f7f",
  fontSize: "18px",
  lineHeight: "24px",
  fontWeight: "bold",
  textAlign: "left" as const,
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

// const anchor = {
//   color: "#556cd6",
// };

// const button = {
//   backgroundColor: "#656ee8",
//   borderRadius: "5px",
//   color: "#fff",
//   fontSize: "16px",
//   fontWeight: "bold",
//   textDecoration: "none",
//   textAlign: "center" as const,
//   display: "block",
//   width: "100%",
//   padding: "10px",
// };

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
