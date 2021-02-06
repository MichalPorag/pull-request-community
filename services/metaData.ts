import metaData from '../static/metadata';

export const getMetaData = (route): MetaData => {
  let meta: MetaData = metaData['/'];

  try {
    meta = metaData[route] ?? meta;
  } catch (e) {
    console.error(e);
  }

  return meta;
};

interface MetaData {
  title?: string;
  metaContents?: object[];
}
