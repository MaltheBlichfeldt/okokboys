import React from "react"
import Menu from "../components/menu/menu"
import Layout from "../components/layout"
import Logo from "../components/logo/logo"

const Main = () => (
  <div>
    <Layout>
      <Menu></Menu>
      

      {/* LOGO AND CAPTION */}
      <section className="logo-section">
        <div className="row reverse">
          <div className="col-xs-12 col-sm-7">
            <Logo />
          </div>
          <div className="col-xs-12 col-sm-5 header-text">
            <h1 className="nomargintop responsive-font fadeInUp-40">OK OK Boys <br></br>- en musikpodcast</h1>
            <p className="fadeInUp-60">Hør et panel af musiknørder anmelde ny musik fra både Danmark og udlandet. Vi holder os ikke til én genre, men snakker om alt i øst og vest. Lyt med der hvor du lytter til podcasts.</p>
          </div>
        </div>
      </section>

      <h2>Seneste afsnit</h2>

      {/* EPISODE feed */}
      <section>
        <div className="row episode sectionpadding">
          <div className="col-xs-12 col-sm-4">
             <iframe title="Roskilde Festival-special" src="https://open.spotify.com/embed-podcast/episode/6CqEXGHxS0UyoXNLGalFoj" width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
          <div className="col-xs-12 col-sm-8 episodetextpadding">
          <h3>Roskilde Festival-special</h3>

            <p>Hvad skal man se på Roskilde Festival 2019? Det fortæller panelet i denne specialudgave af OK OK Boys, der er dedikeret til årets festival.<br></br>

            Vi har dykket ned i de 188 navne på plakaten, og fundet det bedste til jer. Der bliver anbefalet moshpit-venlig hip-hop, vild afro-jazz, god gedigen rock og alt muligt andet.
            <br></br><br></br>
            <i className="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
            <br></br>
            Jingle af Anders Belling.</i>
            </p>
            
         </div>

        </div>

        <div className="row sectionpadding episode">
          <div className="col-xs-12 col-sm-4">
            <iframe title="Album covers, Show Me the Body og Jenny Wilson" src="https://open.spotify.com/embed-podcast/episode/7n6uhlsydEVN1kcmTi9tey" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>        </div>
          <div className="col-xs-12 col-sm-8 episodetextpadding">
            <h3>Album covers, Show Me the Body og Jenny Wilson</h3>
            <p>Kan man lave spoken word punk? Har Anderson .Paak kun lavet grimme album covers? Og hvem af drengene var sulten, da de valgte numre til playlisten?
            <br></br> <br></br>
            Det bliver diskuteret i dette afsnit af OK OK Boys, hvor vi anmelder New Yorker-punkerne Show Me The Bodys album ‘Dog Whistle’ og Jenny Wilson meget personlige album ‘TRAUMA’ om et seksuelt overgreb. Og så snakker vi de bedste og værste album covers.
            <br></br> <br></br>
            <i className="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
            <br></br>
            Jingle af Anders Belling.</i>
            </p>
          </div>
        </div>

      <div className="row sectionpadding episode">
        <div className="col-xs-12 col-sm-4">
          <iframe src="https://open.spotify.com/embed-podcast/episode/0daGBiKIe61NC3OysbCWHZ" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          </div>
        <div className="col-xs-12 col-sm-8 episodetextpadding">
        <h3>Hans Philip og Little Simz</h3>
          <p>Hvad skal man se på Roskilde Festival 2019? Det fortæller panelet i denne specialudgave af OK OK Boys, der er dedikeret til årets festival.<br></br>

          Vi har dykket ned i de 188 navne på plakaten, og fundet det bedste til jer. Der bliver anbefalet moshpit-venlig hip-hop, vild afro-jazz, god gedigen rock og alt muligt andet.
          <br></br><br></br>
          <i className="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
          <br></br>
          Jingle af Anders Belling.</i>
          </p>
       </div>
      </div>
    </section>

    <section className="footer">
      <div className="row">
        <div className="col-xs-12">
        <a className="smalltext" href="okokboys@okokboys.dk" target="_blank">okokboys@okokboys.dk</a>
        </div>
      </div>
    </section>

    </Layout>
  </div>
)

export default Main