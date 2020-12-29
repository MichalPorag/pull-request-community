module.exports = {
  async redirects() {
    return [
      {
        source: '/youtube',
        destination: `https://www.youtube.com/channel/UC9TfgtLt0500BXqPVVmfuTA`,
        permanent: true,
      },
    ];
  },
};
