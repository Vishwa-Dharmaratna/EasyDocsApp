import * as React from 'react';
import { View, Button, StyleSheet,Image } from 'react-native';
import Constants from 'expo-constants';
import * as Print from 'expo-print';

import { AuthContextNew } from '../../components/newContext';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';



const LetterTemplate=({route})=> {

    const {value,setValue}=React.useContext(AuthContextNew);
    

    let FullName

  return (
    <View style={styles.container}>
      <Button title="downlode your cv" onPress={() => {
        Print.printAsync({
      html: `

      <html>
      <head>
      
          <title>Jonathan Doe | Web Designer, Director | name@yourdomain.com</title>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      
          <meta name="keywords" content="" />
          <meta name="description" content="" />
      
          <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" /> 
          <style>
              .msg { padding: 10px; background: #222; position: relative; }
              .msg h1 { color: #fff;  }
              .msg a { margin-left: 20px; background: #408814; color: white; padding: 4px 8px; text-decoration: none; }
              .msg a:hover { background: #266400; }
      
          /* //-- yui-grids style overrides -- */
              body { font-family: Georgia; color: #444; }
              #inner { padding: 10px 80px; margin: 80px auto; background: #f5f5f5; border: solid #666; border-width: 8px 0 2px 0; }
              .yui-gf { margin-bottom: 2em; padding-bottom: 2em; border-bottom: 1px solid #ccc; }
      
          /* //-- header, body, footer -- */
              #hd { margin: 2.5em 0 3em 0; padding-bottom: 1.5em; border-bottom: 1px solid #ccc }
              #hd h2 { text-transform: uppercase; letter-spacing: 2px; }
              #bd, #ft { margin-bottom: 2em; }
      
          /* //-- footer -- */
              #ft { padding: 1em 0 5em 0; font-size: 92%; border-top: 1px solid #ccc; text-align: center; }
              #ft p { margin-bottom: 0; text-align: center;   }
      
          /* //-- core typography and style -- */
              #hd h1 { font-size: 48px; text-transform: uppercase; letter-spacing: 3px; }
              h2 { font-size: 152% }
              h3, h4 { font-size: 122%; }
              h1, h2, h3, h4 { color: #333; }
              p { font-size: 100%; line-height: 18px; padding-right: 3em; }
              a { color: #990003 }
              a:hover { text-decoration: none; }
              strong { font-weight: bold; }
              li { line-height: 24px; border-bottom: 1px solid #ccc; }
              p.enlarge { font-size: 144%; padding-right: 6.5em; line-height: 24px; }
              p.enlarge span { color: #000 }
              .contact-info { margin-top: 7px; }
              .first h2 { font-style: italic; }
              .last { border-bottom: 0 }
      
      
          /* //-- section styles -- */
      
              a#pdf { display: block; float: left; background: #666; color: white; padding: 6px 50px 6px 12px; margin-bottom: 6px; text-decoration: none;  }
              a#pdf:hover { background: #222; }
      
              .job { position: relative; margin-bottom: 1em; padding-bottom: 1em; border-bottom: 1px solid #ccc; }
              .job h4 { position: absolute; top: 0.35em; right: 0 }
              .job p { margin: 0.75em 0 3em 0; }
      
              .last { border: none; }
              .skills-list {  }
              .skills-list ul { margin: 0; }
              .skills-list li { margin: 3px 0; padding: 3px 0; }
              .skills-list li span { font-size: 152%; display: block; margin-bottom: -2px; padding: 0 }
              .talent { width: 32%; float: left }
              .talent h2 { margin-bottom: 6px; }
      
              #srt-ttab { margin-bottom: 100px; text-align: center;  }
              #srt-ttab img.last { margin-top: 20px }
      
          /* --// override to force 1/8th width grids -- */
              .yui-gf .yui-u{width:80.2%;}
              .yui-gf div.first{width:12.3%;}
          </style>
      
      </head>
      <body>
      
      <div id="doc2" class="yui-t7">
          <div id="inner">
          
              <div id="hd">
                  <div class="yui-gc">
                      <div class="yui-u first">
                          <h1>${value.FName}</h1> 
                          <h1>${value.LName}</h1> 
                         
                          <h2>${value.JobRole}</h2>
                      </div>
      
                      <div class="yui-u">
                          <div class="contact-info">
                              <h3><a id="pdf" href="#">Download PDF</a></h3>
                              <h3><a href="mailto:name@yourdomain.com">${value.Email}</a></h3>
                              <h3>${value.Phone}</h3>
                          </div><!--// .contact-info -->
                      </div>
                  </div><!--// .yui-gc -->
              </div><!--// hd -->
      
              <div id="bd">
                  <div id="yui-main">
                      <div class="yui-b">
      
                          <div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Profile</h2>
                              </div>
                              <div class="yui-u">
                                  <p class="enlarge">
                                  ${value.Profile}
                                      <!--Progressively evolve cross-platform ideas before impactful 
                                      infomediaries. Energistically visualize tactical initiatives 
                                      before cross-media catalysts for change.--> 
                                  </p>
                              </div>
                          </div><!--// .yui-gf -->
      
                          <div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Project</h2>
                              </div>
                              <div class="yui-u">
      
                                      <div>
                                          <h2>${value.ProjectName1}</h2>
                                          <p>${value.PDescription1}	</p>
                                          </br>
                                      </div>
      
                                      <div >
                                          <h2>${value.ProjectName2}</h2>
                                          <p>${value.PDescription2} </p>
                                          </br>
                                      </div>
      
                                      <div>
                                          <h2>${value.ProjectName3}</h2>
                                          <p>${value.PDescription3}</p>
                                          </br>
                                      </div>

                                       <div>
                                          <h2>${value.ProjectName4}</h2>
                                          <p>${value.PDescription4}</p>
                                          </br>
                                      </div>

                                       <div>
                                          <h2>${value.ProjectName5}</h2>
                                          <p>${value.PDescription5}</p>
                                          </br>
                                      </div>

                                       <div>
                                          <h2>${value.ProjectName6}</h2>
                                          <p>${value.PDescription6}</p>
                                          </br>
                                      </div>
                              </div>
                              
                          </div><!--// .yui-gf -->
      
                          <div class="yui-gf">
                              <div class="yui-u first">
                                  <h2>Technical Skill</h2>
                              </div>
                              <div class="yui-u">
                                  <ul class="talent">
                                      <li class="last">${value.TSkill1}</li>
                                      <li class="last">${value.TSkill2}</li>

                                  </ul>
      
                                  <ul class="talent">
                                    <li class="last">${value.TSkill3}</li>
                                    <li class="last">${value.TSkill4}</li>
                                     
                                  </ul>
      
                                  <ul class="talent">
                                      <li class="last">${value.TSkill5}</li>
                                      <li class="last">${value.TSkill6}</li>
                                     
                                  </ul>
                              </div>
                          </div><!--// .yui-gf-->
      
                          <div class="yui-gf">
          
                              <div class="yui-u first">
                                  <h2>Experience</h2>
                              </div><!--// .yui-u -->
      
                              <div class="yui-u">
      
                                  <div class="job">
                                      <h2>${value.Company1}</h2>
                                      <h3>${value.CTitle1}</h3>
                                      <h4>${value.CPeriod1}</h4>
                                      <p>${value.PDescription1}</p>
                                      <!--<p>Intrinsicly enable optimal core competencies through 
                                      corporate relationships. Phosfluorescently implement worldwide 
                                      vortals and client-focused imperatives. Conveniently initiate 
                                      virtual paradigms and top-line convergence. </p>-->
                                  </div>
      
                                  <div class="job">
                                      <h2>${value.Company2}</h2>
                                      <h3>${value.CTitle2}</h3>
                                      <h4>${value.CPeriod2}</h4>
                                      <p>Progressively reconceptualize multifunctional
                                       "outside the box" thinking through inexpensive methods 
                                       of empowerment. Compellingly morph extensive niche markets
                                        with mission-critical ideas. Phosfluorescently deliver 
                                        bricks-and-clicks strategic theme areas rather than scalable benefits. </p>
                                  </div>
      
                                  <div class="job">
                                      <h2>${value.Company3}</h2>
                                      <h3>${value.CTitle3}</h3>
                                      <h4>${value.CPeriod3}</h4>
                                      <!--<p>Intrinsicly transform flexible manufactured 
                                      products without excellent intellectual capital.
                                       Energistically evisculate orthogonal architectures 
                                       through covalent action items. Assertively incentivize 
                                       sticky platforms without synergistic materials. </p>-->
                                  </div>
                                  </br>
                               
                                 
      
      
                                  <div class="job">
                                      <h2>${value.Company4}</h2>
                                      <h3>${value.CTitle4}</h3>
                                      <h4>${value.CPeriod4}</h4>
                                      <p>Globally re-engineer cross-media schemas through viral 
                                      methods of empowerment. Proactively grow long-term high-impact 
                                      human capital and highly efficient innovation. Intrinsicly iterate 
                                      excellent e-tailers with timely e-markets.</p>
                                  </div>

                                  <div class="job">
                                  <h2>${value.Company5}</h2>
                                  <h3>${value.CTitle5}</h3>
                                  <h4>${value.CPeriod5}</h4>
                                  <p>Globally re-engineer cross-media schemas through viral 
                                  methods of empowerment. Proactively grow long-term high-impact 
                                  human capital and highly efficient innovation. Intrinsicly iterate 
                                  excellent e-tailers with timely e-markets.</p>
                              </div>
      
                              </div><!--// .yui-u -->
                          </div><!--// .yui-gf -->
      
      
                          <div class="yui-gf last">
                              <div class="yui-u first">
                                  <h2>Education</h2>
                              </div>
                              <div class="yui-u">
                                  <h2>${value.Institute1}</h2></br>
                                
                                  <h3>${value.ITitle1} <strong>${value.IPeriod1}</strong> </h3>
                                  <h3>${value.IDescription1}<h3></br></br>
                              </div>
                            </br>
                            </br>

                              <div class="yui-u">
                              <h2>${value.Institute2}</h2></br>
                            
                              <h3>${value.ITitle2} <strong>${value.IPeriod2}</strong> </h3>
                              <h3>${value.IDescription2}<h3></br></br>
                            </div>
                            

                            <div class="yui-u">
                            <h2>${value.Institute3}</h2></br>
                            <h3>${value.ITitle3} <strong>${value.IPeriod3}</strong> </h3>
                            <h3>${value.IDescription3}<h3></br></br>
                            </div>
                            </br>
                            </br>

                            
                            <div class="yui-u">
                            <h2>${value.Institute4}</h2></br>
                            <h3>${value.ITitle4} <strong>${value.IPeriod4}</strong> </h3>
                            <h3>${value.IDescription4}<h3></br></br>
                            </div>
                            </br>
                            </br>

                            
                            <div class="yui-u">
                            <h2>${value.Institute5}</h2></br>
                            <h3>${value.ITitle5} <strong>${value.IPeriod5}</strong> </h3>
                            <h3>${value.IDescription5}<h3></br></br>
                            </div>
                            </br>
                            </br>


                            
                            <div class="yui-u">
                            <h2>${value.Institute6}</h2></br>
                            <h3>${value.ITitle6} <strong>${value.IPeriod6}</strong> </h3>
                            <h3>${value.IDescription6}<h3></br></br>
                            </div>
                            </br>
                            </br>


                        
                          </div><!--// .yui-gf -->
      
      
                      </div><!--// .yui-b -->
                  </div><!--// yui-main -->
              </div><!--// bd -->
      
              <div id="ft">
                  <p>${value.FName}${value.LName}<a href="mailto:name@yourdomain.com">${value.Email}</a> ${value.Phone}</p>
              </div><!--// footer -->
      
          </div><!-- // inner -->
      
      
      </div><!--// doc -->
      
      
      </body>
      </html>
      `
    });
      }} />

      <Image
        style={styles.sliderImage}
        source={require('../../assets/easy.jpg')}
        resizeMode="stretch"/>

    </View>
  );
}



export default LetterTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sliderImage: {
    height: '50%',
    width: '100%',
   
   
  },
});