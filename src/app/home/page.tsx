import Image from "next/image"

const Home = () => {
    // "/personas_onboarding.png"
    return (
        <div className="h-dvh flex bg-gray-100" style={{maxWidth: "600px", margin: "0 auto"}}>
          <div className="h-dvh bg-white rounded-xl shadow-lg overflow-hidden" style={{ width: "100%", minWidth: "350px"}}>
            
            {/* Sección de imagen con corte diagonal */}
            <div className="relative h-3/5">
              <div className="overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 40%)', height: '100%' }}>
                <Image
                  src="/personas_onboarding.png" // Asegúrate de que la imagen esté en la carpeta public con este nombre
                  alt="welcome"
                  fill={true}
                  objectFit="fill"
                //   className="rounded-t-xl"
                />
              </div>
            </div>
            
            {/* Sección de contenido de bienvenida */}
            <div className="p-6 h-1/2">
            <div className="absolute top-1/2">
              <h1 className="text-3xl font-bold mb-3 text-gray-800">BnK</h1>
              <p className="text-gray-400">Un banco para toda la familia</p>
            </div>
              
              <div className="flex mt-24">
                {/* Botón de inicio de sesión */}
                <button className="bg-white text-roseBackground font-semibold py-2 px-6 rounded-full mb-6 border-solid border-2 border-roseBackground shadow-lg">
                    INICIAR SESIÓN
                </button>
        
                {/* Enlace de registro */}
                <p className=" text-gray-400 text-sm">
                    ¿Aún no tienes cuenta?{' '}
                    <a href="/registro" className="text-roseBackground font-semibold">
                    Regístrate aquí
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Home
