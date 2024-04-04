/* eslint-disable jsx-a11y/alt-text */
'use client';
import React, { FC } from 'react';
import { Page, Text, View, Document, Image, Link } from '@react-pdf/renderer';
import { styles } from './styles';
import { IMainContent } from '@/data/main';

interface Props {
  data: IMainContent;
}

const Print: FC<Props> = ({ data: content }) => {
  return (
    <Document>
      <Page style={styles.body} size="A4">
        <Text style={styles.header} fixed>
          ~ Esteban Burgos CV ~
        </Text>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            marginBottom: '20px',
          }}
        >
          <Image
            style={styles.image}
            src="assets/img/hero/profile-mobile.jpeg"
          />
        </View>

        <Text style={styles.title}>{content.profile.profileTitleName}</Text>
        <Text style={styles.author}>{content.profile.profileDesignation}</Text>
        <Text style={styles.text}>{content.profile.profileDescriptions}</Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            height: '40px',
            marginTop: '60px',
          }}
        >
          {content.profile.profileBtn.map((btn) => (
            <Link key={btn.iconName} src={btn.link}>
              <Image
                style={{
                  height: '100%',
                  border: '4px solid #fff',
                  borderRadius: '50%',
                }}
                src={btn.iconLink}
              />
            </Link>
          ))}
        </View>

        <Text
          style={styles.title}
          break
        >{`${content.about.title} ${content.about.title2}`}</Text>
        <Text style={styles.author}>{content.about.subtitle}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default Print;
