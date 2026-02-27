// Aqui poderia ser um components de tamanho da pizza, e a imagem mudaria de acordo com o tamanho escolhido utilizando as props ,porém eu n tenho as imagens rs 



const Small = () => {
        return (
        <>
        <button>Small</button>
        </>
        )
         }
    const Medium = () => {
        return (
        <>
        <button>Medium</button>
        </>
        
        )
    }

    const Large = () => {
    return (
    <>
    <button>Large</button>
    </>
    )
    
    }

export default function SizePizza () { 
    return (
        <>
            <Small />
            <Medium />
            <Large />
        </>
    );
}
