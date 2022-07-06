import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
const clientSideEmotionCache = createCache({ key: "css" });

// se envuelve toda  la app en el CacheProvider
//le paso el valor de emotionCache

function MyApp({ Component, pageProps, emotionCache=clientSideEmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  
  
  );
}

export default MyApp;
