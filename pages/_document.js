import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Rate My Dorm" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className="w-full h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}