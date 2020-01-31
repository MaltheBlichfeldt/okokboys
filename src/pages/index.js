import React from "react"
import Menu from "../components/menu/menu"
import Layout from "../components/layout"
import Logo from "../components/logo/logo"
import Header from "../components/Header/header"
import { useStaticQuery, graphql } from "gatsby"
import redaktionen from '../assets/images/okokboysredaktion.jpg'

const Main = () => {
const data = useStaticQuery(graphql`
{
  markdownRemark {
    html
    frontmatter {
      overskrift
    }
  }
}
`)

const overskrift = data.markdownRemark.frontmatter.overskrift

return (


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
            <h1 className="nomargintop responsive-font fadeInUp-40">OK OK Boys<br></br>- en musikpodcast</h1>
            <p className="fadeInUp-60">En podcast om musik, hvor et panel af musiknørder anmelder ny musik fra indland og udland.</p>
          </div>
        </div>
      </section>

      <Header />

      <h2>Seneste afsnit</h2>

      {/* EPISODE feed */}


      <div className="row episode sectionpadding">
      <div className="col-xs-12 col-sm-4">
      <iframe src="https://open.spotify.com/embed-podcast/episode/27dlYW7ABxxdeamtjZzzbh" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
     </div>
     <div className="col-xs-12 col-sm-8 episodetextpadding">
       <h3>De bedste albums</h3>
       <p>Hvad var de bedste albums i 2019? Det får du svaret på i dette afsnit, hvor vi giver dig de bedste danske plader og det bedste fra udlandet - og der er alt fra afrikanske energibomber, over fantastiske historiefortællere til dansk-russiske technobangers. </p>
          <p>Og så er der en omgang OK eller IKKE OK i en speciel 2019-udgave.</p>

          <i className="credits">
            I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
            Jingle af Anders Belling.
          </i>
     </div>
   </div>

      <div className="row episode sectionpadding">
        <div className="col-xs-12 col-sm-4">
          <iframe src="https://open.spotify.com/embed-podcast/episode/5huIe6YjWs2VymBRhwWWvA" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>      
        </div>
        <div className="col-xs-12 col-sm-8 episodetextpadding">
          <h3>Ganger og Alex Cameron</h3>

          <p>Har Ganger lavet et af de mest spændende danske albums i lang tid? Hvor sjove er Alex Camerons tekster egentlig? Er "far rock" fedt? Og kan man stadig bruge en iPod i 2019? 
          I dette afsnit af OK OK Boys tager vi Gangers 'Mørk' og Alex Camerons 'Miamy Memory' under kærlig behandling. 
          <br></br><br></br>
          Derudover anbefaler panelet bl.a. vokalimprovisationer, hård hård hård punk og hele tre slags hip hop. Og vi finder ud af om far rock, CD'er og Oasis er OK eller ikke OK. 
          <br></br><br></br>
          <i className="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
          <br></br>
          Jingle af Anders Belling.</i>
          </p>
        </div>
      </div>

      <div className="row episode sectionpadding">
        <div className="col-xs-12 col-sm-4">
          <iframe src="https://open.spotify.com/embed-podcast/episode/0rjyDs22kVCJcPZOBDeYys" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="col-xs-12 col-sm-8 episodetextpadding">
          <h3>Brockhampton og JÆRV</h3>

          <p>Har Brockhampton lavet et af nyere tids bedste hip-hop albums? Kan man blande The Knife og Rocazino? Og hvordan blev OK OK Boys-jinglen egentlig til? 
          <br></br>
          Få svaret på det hele i dette afsnit af OK OK Boys, hvor vi anmelder Brockhamptons 'GINGER' og JÆRVs 'Kriger'. 
          <br></br>
          <br></br>
          Derudover får du som altid stærke anbefalinger fra playlisten og endnu en omgang 'OK eller ikke OK?'.
          <br></br><br></br>
          <i className="credits">I studiet er Magnus Krog, Lars Andersen og Oliver Aabo.
          <br></br>
          Jingle af Anders Belling.</i>
          </p>
        </div>
      </div>




    <section className="redaktionen">
      <div className="row">
        <div className="col-xs-12">
          <h2 className="nopadding">Redaktionen</h2>
          <p>
            OK OK Boys-redaktionen består af Oliver Aabo, Lars Andersen og Magnus Krog.
          </p>
          <img className="redaktionenImg" src={redaktionen}></img>
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

)}
 
export default Main