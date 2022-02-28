import { Text, Row } from "@nextui-org/react";
import Link from "next/link";

export default function Header({ user }) {
  const links = [
    !user && { label: "Login", href: "/auth/signin" },
    !user && { label: "Register", href: "/auth/signup" },
    user && { label: "Sign Out", href: "/auth/signout" },
  ]
    .filter(Boolean)
    .map(({ label, href }) => {
      return (
        <Link key={href} href={href} passHref>
          <Text
            size={22}
            css={{ color: "$accents2", cursor: "pointer", ml: 35 }}
          >
            {label}
          </Text>
        </Link>
      );
    });

  return (
    <Row justify="flex-end" align="center" css={{ p: 20, background: "$text" }}>
      {links}
    </Row>
  );
}
