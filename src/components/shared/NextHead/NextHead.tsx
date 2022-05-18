import Head from 'next/head';

interface INextHeadProps {
  title: string;
  description: string;
}

export const NextHead = ({ title, description }: INextHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
