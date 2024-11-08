const images = [
    "https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png"  
];

const ImageComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {Array(3).fill(images[0]).map((src, index) => (  
                <img 
                    key={index} 
                    src={src} 
                    alt={`Описание ${index}`} 
                    style={{ width: '350px', height: 'auto', margin: '30px' }} 
                />
            ))}
        </div>
    );
};

export default ImageComponent;
