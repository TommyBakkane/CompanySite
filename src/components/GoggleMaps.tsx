import React from 'react';

export const GoogleMaps = () => {
  // Replace 'YOUR_GOOGLE_MAPS_EMBEDDED_URL' with the actual Google Maps embedded URL.
  const googleMapsEmbeddedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.5135181287646!2d10.741019577563186!3d59.9236207749076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e7a9986e079%3A0xfb16ed647312d9c8!2sBergstien%204C%2C%200172%20Oslo!5e0!3m2!1sno!2sno!4v1696586019910!5m2!1sno!2sno";

  return (
    <div>
      <iframe
        src={googleMapsEmbeddedUrl}
        title="Google Maps"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};
