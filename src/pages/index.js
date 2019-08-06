import React from "react"
import Menu from "../components/menu/menu"
import Footer from "../components/footer/footer"
import Text from "../components/text-section/text-section"
import Layout from "../components/layout"
import Logo from "../components/logo/logo"

export default () => (
  
    <div>
    <Menu></Menu>
    <Layout>
 

  
      {/* LOGO AND CAPTION */}
      <section className="logo-section">
        <div className="row reverse">
          <div className="col-xs-12 col-sm-7">
            <Logo />
          </div>
          <div className="col-xs-12 col-sm-5 header-text">
            <h1 class="nomargintop">OK OK Boys <br></br>- en musikpodcast</h1>
            <p>Hør et panel af musiknørder anmelde ny musik fra både Danmark og udlandet. Vi holder os ikke til én genre, men snakker om alt i øst og vest. Lyt med der hvor du lytter til podcasts.</p>
          </div>
        </div>
      </section>

      {/* Poadbean feed */}
      <section class="sectionpadding">

      <h2>Seneste afsnit</h2>


        <div class="row">
          <div class="col-sm-4">
            <iframe class="noborder" title="Roskilde Festival-special" src="https://www.podbean.com/media/player/n8bzf-b5ebcd?from=yiiadmin&download=1&version=1&vjs=1&skin=2&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" height="300" width="300" scrolling="yes" data-name="pb-iframe-player"></iframe>
          </div>
          <div class="col-sm-8">
          <h3>Roskilde Festival-special</h3>

            <p>Hvad skal man se på Roskilde Festival 2019? Det fortæller panelet i denne specialudgave af OK OK Boys, der er dedikeret til årets festival.<br></br>

            Vi har dykket ned i de 188 navne på plakaten, og fundet det bedste til jer. Der bliver anbefalet moshpit-venlig hip-hop, vild afro-jazz, god gedigen rock og alt muligt andet.
            <br></br><br></br>
            <i class="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
            <br></br>
            Jingle af Anders Belling.</i></p>
         </div>
        </div>
      </section>

      <hr></hr>

      <section class="sectionpadding">
      <div class="row">
        <div class="col-sm-4">
        <iframe class="noborder" title="Album covers, Show Me the Body og Jenny Wilson" src="https://www.podbean.com/media/player/8tupx-b27346?from=yiiadmin&download=1&version=1&vjs=1&skin=2&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" height="300" width="300" border="none" scrolling="yes" data-name="pb-iframe-player"></iframe>        </div>
        <div class="col-sm-8">
          <h3>Album covers, Show Me the Body og Jenny Wilson</h3>
          <p>Kan man lave spoken word punk? Har Anderson .Paak kun lavet grimme album covers? Og hvem af drengene var sulten, da de valgte numre til playlisten?
          <br></br> <br></br>
          Det bliver diskuteret i dette afsnit af OK OK Boys, hvor vi anmelder New Yorker-punkerne Show Me The Bodys album ‘Dog Whistle’ og Jenny Wilson meget personlige album ‘TRAUMA’ om et seksuelt overgreb. Og så snakker vi de bedste og værste album covers.
          <br></br> <br></br>
          Fra playlisten anbefaler vi Naxatras, Talk Talk, Scott Walker, Loyle Carner, Your Old Droog, Rian Treanor, Amnesia Scanner, Bob Dylan, Death Grips, INTET ALTID og Rodrigo Gallardo.
          <br></br><br></br>
          <i class="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
          <br></br>
          Jingle af Anders Belling.</i></p>
          
       </div>
      </div>
    </section>

    <hr></hr>

    <section class="sectionpadding">
      <div class="row">
        <div class="col-sm-4">
        <iframe class="noborder" title="Hans Philip & Little Simz" src="https://www.podbean.com/media/player/6acex-ae66db?from=yiiadmin&download=1&version=1&vjs=1&skin=2&auto=0&share=1&fonts=Helvetica&download=1&rtl=0&pbad=1" height="300" width="300" border="none" scrolling="yes" data-name="pb-iframe-player"></iframe>        </div>
        <div class="col-sm-8">
        <h3>Hans Philip og Little Simz</h3>
          <p>Hvad skal man se på Roskilde Festival 2019? Det fortæller panelet i denne specialudgave af OK OK Boys, der er dedikeret til årets festival.<br></br>

          Vi har dykket ned i de 188 navne på plakaten, og fundet det bedste til jer. Der bliver anbefalet moshpit-venlig hip-hop, vild afro-jazz, god gedigen rock og alt muligt andet.
          <br></br><br></br>
          <i class="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
          <br></br>
          Jingle af Anders Belling.</i></p>
       </div>
      </div>
    </section>

    <hr></hr>

    <section class="footer">
      <div class="row">
        <div class="col-xs-12">
        <a class="smalltext" href="okokboys@okokboys.dk" target="_blank">okokboys@okokboys.dk</a>
        </div>
      </div>

    </section>
    
      </Layout>
      <Footer></Footer>
    </div>  
)
