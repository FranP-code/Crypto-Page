import React, {useState} from 'react';
import Background from '../Background/Background';
import CryptoGalleryLoading from '../CryptoGalleryLoading/CryptoGalleryLoading';
import Header from '../Header/Header';
import CryptoGallery from './CryptoGallery';

const CryptoGalleryContainer = () => {


    const [loading, setLoading] = useState(true)
    const [loadingURL, setLoadingURL] = useState('https://i.ibb.co/Dwygw0t/Logo-reduced.png')

    React.useEffect(() => {

        if (loading) {
    
          document.body.style.overflow = "hidden"
        
        } else {
    
          setTimeout(() => {
            
            document.body.style.overflow = "visible"
          
          }, 2000);
          
        } //https://stackoverflow.com/questions/39962757/prevent-scrolling-using-css-on-react-rendered-components
      }, [loading])
    
    return (
        <>
            <CryptoGalleryLoading loading={loading} loadingURL={loadingURL} setLoading={setLoading}/>
            <Header />
            <Background
                loading={loading}
            />
            <CryptoGallery
                loading={loading}
                setLoading={setLoading}
                setLoadingURL={setLoadingURL}
            />
        </>
    )
};

export default CryptoGalleryContainer;
