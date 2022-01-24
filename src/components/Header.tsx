import React from "react";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
};

const Header: React.FC<Props> = ({
  title = "",
  description = "7-Eleven Singapore Store located in singapore",
}) => {
  return (
    <Head>
      <title>7-Eleven Singapore{`: ${title}`}</title>
      <meta name="description" content={description} />
    </Head>
  );
};

export default Header;
