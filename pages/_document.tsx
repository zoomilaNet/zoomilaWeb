import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='fa' className="font-iransans">
                <Head />
                <body dir='rtl' >
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;