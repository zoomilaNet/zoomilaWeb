import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang='fa' >
                <Head />
                <body dir='rtl' className="bg-gradient-to-b from-upgray_gradient via-with_gray to-downgray_gradient font-iransans">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;