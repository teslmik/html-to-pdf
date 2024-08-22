import { Document, Font, Page, Text } from '@react-pdf/renderer';
import parse from 'html-react-parser';
import { Fragment } from 'react';

import { renderComponents } from 'src/utils/render-components';
import suisseIntlBoldSource from 'src/assets/fonts/SuisseBPIntl-Bold.ttf';
import suisseIntlMediumSource from 'src/assets/fonts/SuisseBPIntl-Medium.ttf';
import suisseIntlRegularSource from 'src/assets/fonts/SuisseBPIntl-Regular.ttf';
import suisseIntlBoldItalicSource from 'src/assets/fonts/SuisseIntl-BoldItalic.ttf';
import suisseIntlRegularItalicSource from 'src/assets/fonts/SuisseIntl-RegularItalic.ttf';
import { Footer, Header } from './common';

import { styles } from '../styles';

Font.register({
  family: 'Suisse Intl', fonts: [
    { src: suisseIntlRegularSource },
    { src: suisseIntlMediumSource, fontWeight: 500 },
    { src: suisseIntlBoldSource, fontWeight: 700 },
    { src: suisseIntlRegularItalicSource, fontStyle: 'italic' },
    { src: suisseIntlBoldItalicSource, fontStyle: 'italic', fontWeight: 700 },
  ]
});

const MainPDF: React.FC<{markdown: string}> = ({markdown}) => {
  const domNodes = parse(markdown);
  return (
    <Document style={styles.document}>
      <Page size="A4" style={styles.page}>
        <Header />

        {
          Array.isArray(domNodes)
            ? domNodes.map((item, index) => <Fragment key={index}>{renderComponents(item)}</Fragment>)
            : <Text>{domNodes}</Text>
        }

        <Footer />
      </Page>
    </Document>
  );
};

export default MainPDF;
