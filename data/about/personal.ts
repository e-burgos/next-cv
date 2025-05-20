export interface IPersonalInfo {
  title: string;
  btnLabel: string;
  data: { meta: string; metaInfo: string; hasColor: string }[];
}

export const personalInfoEn: IPersonalInfo = {
  title: 'Personal Info',
  btnLabel: 'Download CV',
  data: [
    { meta: 'first name', metaInfo: 'Esteban', hasColor: '' },
    { meta: 'last name', metaInfo: 'Burgos', hasColor: '' },
    { meta: 'Age', metaInfo: '40 Years', hasColor: '' },
    { meta: 'Nationality', metaInfo: 'Argentine', hasColor: '' },
    { meta: 'Freelance', metaInfo: 'Available', hasColor: 'green' },
    { meta: 'Address', metaInfo: 'Buenos Aires, Argentina', hasColor: '' },
    { meta: 'phone', metaInfo: '+5491126790610', hasColor: '' },
    { meta: 'Email', metaInfo: 'info@estebanburgos.com.ar', hasColor: '' },
    {
      meta: 'Languages',
      metaInfo: 'Spanish (Native), English (Intermediate)',
      hasColor: '',
    },
    {
      meta: 'Personal Email',
      metaInfo: 'estebanburgos85@gmail.com',
      hasColor: '',
    },
  ],
};

export const personalInfoEs: IPersonalInfo = {
  title: 'Información Personal',
  btnLabel: 'Descargar CV',
  data: [
    { meta: 'Nombre', metaInfo: 'Esteban', hasColor: '' },
    { meta: 'Apellido', metaInfo: 'Burgos', hasColor: '' },
    { meta: 'Edad', metaInfo: '40 Años', hasColor: '' },
    { meta: 'Nacionalidad', metaInfo: 'Argentino', hasColor: '' },
    { meta: 'Freelance', metaInfo: 'Disponible', hasColor: 'green' },
    { meta: 'Dirección', metaInfo: 'Buenos Aires, Argentina', hasColor: '' },
    { meta: 'Teléfono', metaInfo: '+5491126790610', hasColor: '' },
    { meta: 'Email', metaInfo: 'info@estebanburgos.com.ar', hasColor: '' },
    {
      meta: 'Idiomas',
      metaInfo: 'Español (Nativo), Inglés (Intermedio)',
      hasColor: '',
    },
    {
      meta: 'Email Personal',
      metaInfo: 'estebanburgos85@gmail.com',
      hasColor: '',
    },
  ],
};
