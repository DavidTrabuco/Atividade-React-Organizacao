import { AboutUsStyles } from "./styles";

export default function AboutUs() {
  return (
    <section className={AboutUsStyles.section}>

      <div className={AboutUsStyles.sectionHeader}>
        <span className={AboutUsStyles.sectionLabel}>OUR STORY</span>
        <div className={AboutUsStyles.sectionDivider} />
      </div>

      {/* Bloco 1 - About Us  */}
      <div className={AboutUsStyles.rowReverse}>
        <div className={AboutUsStyles.textBlock}>
          <span className={AboutUsStyles.label}>ABOUT US</span>
          <h3 className={AboutUsStyles.title}>
            We Invite You to Visit Our Pizzaria House
          </h3>
          <p className={AboutUsStyles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
            Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
            Sagittis vestibulum at quis non massa netus.
          </p>
          <button className={AboutUsStyles.button}>READ MORE</button>
        </div>

        <div className={AboutUsStyles.imageBlock}>
          <img src="" alt="Chef preparing dish" className={AboutUsStyles.image} />
        </div>
      </div>

      {/* Bloco 2 - Coffee Menu  */}
      <div className={AboutUsStyles.row}>
        <div className={AboutUsStyles.imageBlock}>
          <img src="" alt="Chef plating food" className={AboutUsStyles.image} />
        </div>

        <div className={AboutUsStyles.textBlock}>
          <span className={AboutUsStyles.label}>COFFEE MENU</span>
          <h3 className={AboutUsStyles.title}>Quality Kava Beans</h3>
          <p className={AboutUsStyles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
            Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
            Sagittis vestibulum at quis non massa netus.
          </p>
          <button className={AboutUsStyles.button}>READ MORE</button>
        </div>
      </div>

      {/* Bloco 3 - Our Team  */}
      <div className={AboutUsStyles.rowReverse}>
        <div className={AboutUsStyles.textBlock}>
          <span className={AboutUsStyles.label}>OUR TEAM</span>
          <h3 className={AboutUsStyles.title}>
            Use the Tips & Recipes of Our Barista
          </h3>
          <p className={AboutUsStyles.paragraph}>
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc varius.
            Facilisis eget cras semper sit enim. Turpis aliquet at ac eu donec.
            Sagittis vestibulum at quis non massa netus.
          </p>
          <button className={AboutUsStyles.button}>READ MORE</button>
        </div>

        <div className={AboutUsStyles.imageBlock}>
          <img src="" alt="Barista making coffee" className={AboutUsStyles.image} />
        </div>
      </div>

    </section>
  );
}