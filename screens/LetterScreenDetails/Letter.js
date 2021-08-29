import React from 'react';
import { View, Text, Button, FlatList, StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as Print from 'expo-print';



const Letter = ({navigation}) => {
    return (
      <View style={styles.container}>

      <Text style={styles.text}>CHOOSE YOUR LETTER TYPE</Text>
     

        <ScrollView>
          
      <TouchableOpacity onPress={()=>{navigation.navigate('FormalLetter')}}>

      <View style={styles.menuItem}>
      <SimpleLineIcons name="envelope-letter" size={24} color="black" />
      <Text style={styles.menuItemText}>Formal Letter</Text>

      </View>
  </TouchableOpacity>

  <Button title="Priview of a Formal Letter" onPress={() => {
        Print.printAsync({
      html:  `
            
      <html>
      <head>
          <style type="text/css">
              .bodyBody {
                  margin: 10px;
                  font-size: 1.50em;
              }
              .divHeader {
                  text-align: right;
                  border: 1px solid;
              }
              .divReturnAddress {
                  text-align: left;
                  float: right;
              }
              .divSubject {
                  clear: both;
                  
                  padding-top: 80px;
              }
              .divAdios {
                  float: right;
                  padding-top: 50px;
              }
          </style>
      </head>
      <body class="bodyBody">
          <div class="divReturnAddress">
           K.L.M.N.Perera,<br/>
            27/8,Katubadda,Moratuwa.<br/>
          2021/05/14
          </div>
  
          <div class="divSubject">
              R.S.H.Silva,<br/>
              21/1,Waligama,Matara
          </div>
  
          <div class="divContents">
              <p>
              Dear Sir,
              </p>
  
              <p>
              Potholes in our locality is causing difficulties
              </p>
              <p>
              With due respect, I would like inform you that due to potholes in 
              roads we are facing a lot of difficulties in our area. Monsoon season
               has already started a few days ago and is increasing our problems. 
               There is a risk that people might get hurt while driving on the roads
                having potholes especially with the childrens who play outside. Even 
                for pedestrians it has become quite difficult to wšlk through the road. 
                Therefore I wish to draw the attention of the concerned authorities with
                 the help of your newspaper. Hopefully, you will be able to help us in
               drawing their attention and resolving this matter at the earliest.
              </p>
          </div>
  
          <div class="divAdios">
              
              
          Thanking You, STO<br/>
              
          </div>
      </body>
  </html>
      
      `
    });
    }} />

  <TouchableOpacity onPress={()=>{navigation.navigate('InformalLetter')}}>

      <View style={styles.menuItem}>
      <SimpleLineIcons name="envelope-letter" size={24} color="black" />
      <Text style={styles.menuItemText}>Informal Letter</Text>

      </View>

      <Button title="Priview of a Informal Letter" onPress={() => {
        Print.printAsync({
      html:  ``
    });
    }} />

  </TouchableOpacity>

  <TouchableOpacity onPress={()=>{navigation.navigate('BusinessLetter')}}>

      <View style={styles.menuItem}>
      <SimpleLineIcons name="envelope-letter" size={24} color="black" />
      <Text style={styles.menuItemText}>Business Letter</Text>

      </View>

      <Button title="Priview of a Business Letter" onPress={() => {
        Print.printAsync({
      html:  `
      <html>
      <head>
      <style>
      @import url(https://fonts.googleapis.com/css?family=Varela+Round);
       @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700);
       *, *::after, *::before {
         box-sizing: border-box;
      }
       html, body {
         height: 100%;
      }
       body {
         font-family: 'Open Sans', sans-serif;
         font-size: 16px;
         line-height: 1.5em;
      }
       a {
         color: #6c9;
         text-decoration: none;
      }
       .clearfix::after, .clearfix::before {
         content: " ";
         display: table;
      }
       .clearfix::after {
         clear: both;
      }
       .bold {
         color: #4a4e51;
         font-weight: 400;
      }
       .resume-wrapper {
         position: relative;
         text-align: center;
         height: 100%;
      }
       .container {
         min-height: 600px;
      }
       .profile {
         background: #fff;
         width: 40%;
         float: left;
         color: #9099a0;
      }
       @media (max-width: 850px) {
         .profile {
           width: 100%;
        }
      }
       .profile .name-wrapper {
         float: left;
         width: 60%;
      }
       .profile h1 {
         font-size: 2.5em;
         text-align: left;
         font-family: 'Varela Round', sans-serif;
         color: #4a4e51;
         text-transform: uppercase;
         line-height: 1em;
         padding-top: 40px;
      }
       @media (max-width: 1200px) {
         .profile h1 {
           padding-top: 20px;
        }
      }
       @media (max-width: 450px) {
         .profile h1 {
           font-size: 1.8em;
           padding-top: 20px;
        }
      }
       .profile li {
         margin-bottom: 10px;
      }
       .profile .picture-resume-wrapper {
         width: 40%;
         display: block;
         float: left;
      }
       @media (max-width: 1200px) {
         .profile .picture-resume-wrapper {
           width: 100%;
        }
      }
       .profile .picture-resume {
         width: 220px;
         height: 220px;
         background-size: cover;
         border-radius: 50%;
         margin-right: 0px;
         display: table;
         position: relative;
         vertical-align: middle;
      }
       .profile .picture-resume span {
         display: table-cell;
         vertical-align: middle;
         position: relative;
         margin: 0 auto;
         z-index: 10;
         text-align: center;
      }
       .profile .picture-resume img {
         border-radius: 50%;
         width: 130px;
      }
       @media (max-width: 1500px) {
         .profile .picture-resume img {
           width: 80px;
        }
      }
       @media (max-width: 1200px) {
         .profile .picture-resume img {
           width: 120px;
           height: 120px;
        }
      }
       @media (max-width: 1500px) {
         .profile .picture-resume {
           width: 150px;
           height: 150px;
        }
      }
       @media (max-width: 1200px) {
         .profile .picture-resume {
           width: 200px;
           height: 200px;
        }
      }
       @media (max-width: 450px) {
         .profile .picture-resume {
           width: 180px;
           height: 180px;
        }
      }
       .profile .contact-info {
         margin-top: 100px;
         font-weight: 300;
      }
       @media (max-width: 1200px) {
         .profile .contact-info {
           margin-top: 70px;
        }
      }
       @media (max-width: 450px) {
         .profile .contact-info {
           margin-top: 50px;
        }
      }
       .profile .list-titles {
         float: left;
         text-align: left;
         font-weight: 600;
         width: 40%;
         color: #4a4e51;
      }
       .profile .list-content {
         float: left;
         width: 60%;
         text-align: left;
         font-weight: 300;
      }
       .profile .contact-presentation {
         text-align: left;
         font-weight: 300;
         margin-top: 100px;
         margin-bottom: 100px;
      }
       @media (max-width: 1200px) {
         .profile .contact-presentation {
           margin-top: 70px;
           margin-bottom: 70px;
        }
      }
       @media (max-width: 850px) {
         .profile .contact-presentation {
           margin-top: 50px;
           margin-bottom: 50px;
        }
      }
       .profile svg {
         width: 100%;
         position: absolute;
         top: 0;
         left: 0;
      }
       .profile .st0, .profile .st1 {
         fill: #6c9;
      }
       .experience {
         background: #3d3e42;
         width: 60%;
         float: left;
         position: relative;
         color: #9099a0;
         font-weight: 300;
         min-height: 100%;
         min-height: 100vh;
      }
       @media (max-width: 850px) {
         .experience {
           width: 100%;
        }
      }
       .experience h3.experience-title {
         color: #6c9;
         text-align: left;
         text-transform: uppercase;
         font-size: 1.2em;
         margin-bottom: 20px;
         font-weight: 400;
      }
       .experience .company-wrapper {
         width: 30%;
         float: left;
         text-align: left;
         padding-right: 5%;
         margin-bottom: 60px;
      }
       @media (max-width: 450px) {
         .experience .company-wrapper {
           width: 100%;
           margin-bottom: 20px;
        }
      }
       .experience .job-wrapper {
         width: 70%;
         float: left;
         text-align: left;
         padding-right: 5%;
         margin-bottom: 60px;
      }
       @media (max-width: 450px) {
         .experience .job-wrapper {
           width: 100%;
           margin-bottom: 40px;
        }
      }
       .experience .experience-title {
         color: white;
         margin-bottom: 15px;
      }
       .section-padding {
         padding: 60px 60px 40px 40px;
      }
       @media (max-width: 850px) {
         .section-padding {
           padding: 80px 15% 40px 10%;
        }
      }
       @media (max-width: 450px) {
         .section-padding {
           padding: 40px 10% 20px 5%;
        }
      }
       .section-wrapper {
         width: 50%;
         float: left;
         text-align: left;
         color: #9099a0;
         font-weight: 300;
         margin-bottom: 20px;
      }
       @media (max-width: 450px) {
         .section-wrapper {
           width: 100%;
        }
      }
       .section-wrapper:nth-child(3) {
         padding-right: 8%;
      }
       .section-wrapper h3.section-title {
         color: #6c9;
         text-align: left;
         text-transform: uppercase;
         font-size: 1.2em;
         margin-bottom: 20px;
         font-weight: 400;
      }
       .section-wrapper .skill-percentage {
         margin-bottom: 10px;
         position: relative;
      }
       .section-wrapper .skill-percentage::after {
         content: "";
         width: 100%;
         height: 6px;
         background: #4a4e51;
         display: block;
         margin-top: 3px;
      }
       .section-wrapper .skill-percentage::before {
         content: "";
         height: 6px;
         background: #6c9;
         position: absolute;
         margin-top: 3px;
         bottom: 0;
      }
       .section-wrapper .skill-percentage:nth-child(1)::before {
         width: 80%;
         animation: skill_1 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(2)::before {
         width: 90%;
         animation: skill_2 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(3)::before {
         width: 50%;
         animation: skill_3 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(4)::before {
         width: 60%;
         animation: skill_4 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(5)::before {
         width: 70%;
         animation: skill_5 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(6)::before {
         width: 70%;
         animation: skill_6 0.6s ease;
      }
       .section-wrapper .skill-percentage:nth-child(7)::before {
         width: 70%;
         animation: skill_6 0.6s ease;
      }
       @keyframes skill_1 {
         from {
           width: 0%;
        }
         to {
           width: 80%;
        }
      }
       @keyframes skill_2 {
         from {
           width: 0%;
        }
         to {
           width: 90%;
        }
      }
       @keyframes skill_3 {
         from {
           width: 0%;
        }
         to {
           width: 50%;
        }
      }
       @keyframes skill_4 {
         from {
           width: 0%;
        }
         to {
           width: 60%;
        }
      }
       @keyframes skill_5 {
         from {
           width: 0%;
        }
         to {
           width: 70%;
        }
      }
       @keyframes skill_6 {
         from {
           width: 0%;
        }
         to {
           width: 70%;
        }
      }
       @keyframes skill_7 {
         from {
           width: 0%;
        }
         to {
           width: 70%;
        }
      }
       
      </style>
      
      </head>
      <body>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <div class="resume-wrapper">
        <section class="profile section-padding">
          <div class="container">
            <div class="picture-resume-wrapper">
              <div class="picture-resume">
              <span><img src="https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg" alt="" /></span>
              <svg version="1.1" viewBox="0 0 350 350">
        
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
          </filter>
        </defs>
        
        
      <g filter="url(#goo)" >  
        
        <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130"/>
        
        <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7"/>
        <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7"/>
      
      </g>  
      </svg>
            </div>
               <div class="clearfix"></div>
       </div>
            <div class="name-wrapper">
              <h1>John <br/>Anderson</h1><!-- YOUR NAME AND LAST NAME  -->
            </div>
            
            <div class="clearfix"></div>
           
            <div class="contact-info clearfix">
              <ul class="list-titles">
              
                <li>Phone:</li>
                <li>Email:</li>
                <li>Address:</li>
              </ul>
              <ul class="list-content ">
                <li>+34 123 456 789</li> <!-- YOUR PHONE NUMBER  -->
                <li>j.anderson@gmail.com</li> <!-- YOUR EMAIL -->
                
                <li>Colombo,Sri lanka</li> <!-- YOUR STATE AND COUNTRY  -->
              </ul>
            </div>
            <div class="contact-presentation"> <!-- YOUR PRESENTATION RESUME  -->
              <p><span class="bold">Profile
              </br></span> ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
               congue nisi, nec consequat quam. In consectetur faucibus turpis eget laoreet.
                Sed nec imperdiet purus. </p>
            </div>
            <div class="contact-social clearfix">
              <ul class="list-titles">
                <li>Linkedin:</li>
                <li>GitHub:</li>
                <li>Facebook:</li>
              </ul>
              <ul class="list-content"> <!-- REMEMBER TO PUT THE URL ON THE HREF TAG  -->
                <li><a href="">www.linkedin.com</a></li> <!-- YOUR TWITTER USER  -->
                <li><a href=""></a></li> <!-- YOUR DRIBBBLE USER  -->
                <li><a href="">janderson</a></li> <!-- YOUR BEHANCE USER  -->
              </ul>
            </div>
          </div>
        </section>
        
        <section class="experience section-padding">
          <div class="container">
            <h3 class="experience-title">Experience</h3>
            
            <div class="experience-wrapper">
              <div class="company-wrapper clearfix">
                <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                <div class="time">Nov 2012 - Present</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
              </div>
              
              <div class="job-wrapper clearfix">
                <div class="experience-title">Front End Developer </div> <!-- JOB TITLE  -->
                <div class="company-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  <!-- JOB DESCRIPTION  -->
                </div>
              </div>
              
              <div class="company-wrapper clearfix">
                <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                <div class="time">Nov 2010 - Present</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
              </div>
              
               <div class="job-wrapper clearfix">
                <div class="experience-title">Freelance, Web Designer / Web Developer</div> <!-- JOB TITLE  -->
                <div class="company-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>  <!-- JOB DESCRIPTION  -->
                </div>
              </div>
              
              <div class="company-wrapper clearfix">
                <div class="experience-title">Company name</div> <!-- NAME OF THE COMPANY YOUWORK WITH  -->
                <div class="time">Nov 2009 - Nov 2010</div> <!-- THE TIME YOU WORK WITH THE COMPANY  -->
              </div> 
              
               <div class="job-wrapper clearfix">
                <div class="experience-title">Web Designer </div> <!-- JOB TITLE  -->
                <div class="company-description">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>   <!-- JOB DESCRIPTION  -->
                </div>
              </div>
              
            </div><!--Skill experience-->
            
            <div class="section-wrapper clearfix">
              <h3 class="section-title">Skills</h3>  <!-- YOUR SET OF SKILLS  -->
                <ul>
                  <li class="skill-percentage">HTML / HTML5</li>
                  <li class="skill-percentage">CSS / CSS3 / SASS / LESS</li>
                  <li class="skill-percentage">Javascript</li>
                  <li class="skill-percentage">Jquery</li>
                  <li class="skill-percentage">Wordpress</li>
                  <li class="skill-percentage">Photoshop</li>
                  
                </ul>
              
            </div>
            
            <div class="section-wrapper clearfix">
              <h3 class="section-title">Hobbies</h3>  <!-- DESCRIPTION OF YOUR HOBBIES -->
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p>
              
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.</p> 
            </div>
            
          </div>
        </section>
        
        <div class="clearfix"></div>
      </div>
      </body>
      </html>
      
      `
    });
    }} />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>{navigation.navigate('OfficialLetter')}}>

      <View style={styles.menuItem}>
      <SimpleLineIcons name="envelope-letter" size={24} color="black" />
      <Text style={styles.menuItemText}>Official Letter</Text>

      </View>

      <Button title="Priview of a Official Letter" onPress={() => {
        Print.printAsync({
      html:  ``
    });
    }} />
  </TouchableOpacity>

  <TouchableOpacity onPress={()=>{navigation.navigate('SocialLetter')}}>

      <View style={styles.menuItem}>
      <SimpleLineIcons name="envelope-letter" size={24} color="black" />
      <Text style={styles.menuItemText}>Social Letter</Text>

      </View>
      <Button title="Priview of a Social Letter" onPress={() => {
        Print.printAsync({
      html:  ``
    });
    }} />
  </TouchableOpacity>

 


    <TouchableOpacity onPress={()=>{navigation.navigate('Education')}}>

    <View style={styles.menuItem}>
    <SimpleLineIcons name="envelope-letter" size={24} color="black" />
    <Text style={styles.menuItemText}>Employment Letters</Text>

    </View>
    <Button title="Priview of a Employment Letter" onPress={() => {
        Print.printAsync({
      html:  ``
    });
    }} />
    </TouchableOpacity>




    </ScrollView>

      
  </View>
    );
};

export default Letter;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width: '90%',
        alignSelf: 'center'
      },
      menuItem: {
          flexDirection: 'row',
          paddingVertical: 35,
          paddingHorizontal: 30,
          
        },
  
        menuItemText: {
          color: '#777777',
          marginLeft: 20,
          fontWeight: '600',
          fontSize: 20,
          lineHeight: 20,
          
        },
        text:{
          color: '#404040',
          marginLeft: 30,
          fontSize: 20,
          marginTop:20,
          fontWeight:'bold'
  
        }
});