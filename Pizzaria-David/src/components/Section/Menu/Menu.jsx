import { MenuStyles } from './style'
import PhotoPizza from "../../../share/Photo/PhotoPizza.jpg";
import PhotoCoffe from "../../../share/Photo/PhotoCoffe.jpg";
import PhotoMaking from "../../../share/Photo/PhotoMaking.jpg";
{/*AQUI PODERIA TER FACILMENTE UM ARRAY DE PRATOS  */}

const Pratos = [ 
  {
    id:1,
    cardName: "Raspberry French Toast",
    cardMeta: "Time: 10 - 15 Minutes | Serves: 1",
    cardprice:"$12.50",
    cardOldprice:"$13.20",
    img:PhotoMaking,
  },
  {
    id:2,
    cardName: "Raspberry French Toast",
    cardMeta: "Time: 10 - 15 Minutes | Serves: 1",
    cardprice:"$12.50",
    cardOldprice:"$13.20",
    img:PhotoCoffe,
  },
{
    id:3,
    cardName: "Raspberry French Toast",
    cardMeta: "Time: 10 - 15 Minutes | Serves: 1",
    cardprice:"$12.50",
    cardOldprice:"$13.20",
    img:PhotoPizza,
  }

]

export default function Menu () { 

    return (
        <>  
        <section className={MenuStyles.section}>
 
      {/* Header */}
      <div className={MenuStyles.header}>
        <span className={MenuStyles.label}>MENU</span>
        <h2 className={MenuStyles.title}>Explore Our Foods</h2>
        <p className={MenuStyles.description}>
          Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
          Facilisis eget cras sit semper sit enim. Turpis aliquet at ac eu donec ut.
          Sagittis vestibulum at quis non massa netus.
        </p>
      </div>
 
      {/* Grid */}
      <div className={MenuStyles.grid}>

        {Pratos.map((prato) => (
          <div key={prato.id} className={MenuStyles.card}>
            <div className={MenuStyles.cardImageWrapper}>
              <img src={prato.img} alt={prato.cardName} className={MenuStyles.cardImage} />
            </div>
            <div className={MenuStyles.cardBody}>
              <h4 className={MenuStyles.cardName}>{prato.cardName}</h4>
              <p className={MenuStyles.cardMeta}>{prato.cardMeta}</p>
              <div className={MenuStyles.pricing}>
                <span className={MenuStyles.price}>{prato.cardprice}</span>
                <span className={MenuStyles.oldPrice}>{prato.cardOldprice}</span>
              </div>
              <button className={MenuStyles.button}>Order Now</button>
            </div>
          </div>
        ))}

      </div>
    </section>
        
        </>
    ) 
}