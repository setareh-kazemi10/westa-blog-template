/*----------------------HEADER-----------------------------*/
const main=document.createElement("main")
document.body.appendChild(main);
main.style.width="80%";
main.style.height="auto";
main.style.margin="10px auto";

const header=document.createElement("header")
main.appendChild(header);

const div_tel=document.createElement("i")
div_tel.style.position="absolute";
div_tel.style.fontSize="25px"
div_tel.className="fa fa-telegram";
div_tel.style.cursor="pointer";
header.appendChild(div_tel);

const div_wapp=document.createElement("i");
div_wapp.style.position="absolute";
div_wapp.style.fontSize="25px"
div_wapp.style.margin="auto 38px";
div_wapp.className="fa fa-whatsapp";
div_wapp.style.cursor="pointer";

header.appendChild(div_wapp);

const div_twitter=document.createElement("i");
div_twitter.style.position="absolute";
div_twitter.style.fontSize="25px"
div_twitter.style.margin="auto 68px";
div_twitter.className="fa fa-twitter";
div_twitter.style.cursor="pointer";

header.appendChild(div_twitter);

const p1=document.createElement("h2")
p1.innerText="Westa.";
p1.style.textAlign="center";
p1.style.fontSize="50px";
p1.style.display="table";
p1.style.marginLeft="auto";
p1.style.marginRight="auto";
header.appendChild(p1);

const p2=document.createElement("h5")
p2.innerText="Personal Blog Template";
p2.style.textAlign="center";
p2.style.display="table";
p2.style.marginLeft="auto";
p2.style.marginRight="auto";
p2.style.color="#565454";
header.appendChild(p2);

const search=document.createElement("i");
search.className="fa fa-search";
header.appendChild(search);
search.style.float="right";
search.style.marginTop="-80px";
search.style.fontSize="25px";
search.style.color="#505050";
search.style.cursor="pointer";


/*----------------------SLIDER-----------------------------*/
const slider=document.createElement("div");
main.appendChild(slider);
slider.style.maxWidth="1100px";
slider.style.height="auto";
slider.style.margin="50px auto";
slider.style.position="relative"

const image=document.createElement("div");
slider.appendChild(image);
image.innerHTML="<img src='images/img3.jpg'>";

var imgstyle=document.getElementsByTagName("img");
imgstyle[0].style.maxWidth="100%";
imgstyle[0].style.display="block";

const box=document.createElement("div");
image.appendChild(box);
box.style.width="500px";
box.style.height="200px";
box.style.backgroundColor="#ffffff";
box.style.zIndex="40";
box.style.display="block";
box.style.position="absolute";
box.style.left="50%";
box.style.top="50%";
box.style.transform="translate(-50% , -50%)";

const text1=document.createElement("h5");
box.appendChild(text1);
text1.innerText="Skills That You Can Learn From Book(1)";
text1.style.color="#3a3939";
text1.style.textAlign="center";
text1.style.marginTop="35px";
text1.style.fontSize="25px"

const text2=document.createElement("h6");
box.appendChild(text2);
text2.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, mollitia?"
text2.style.color="#3a3939";
text2.style.textAlign="center";
text2.style.fontSize="20px";
text2.style.margin="25px"

const chevronleft=document.createElement("i");
chevronleft.className="fa fa-chevron-left";
chevronleft.style.color="white";
chevronleft.style.position="absolute";
chevronleft.style.height="40px";
chevronleft.style.width="40px";
chevronleft.style.fontSize="30px";
chevronleft.style.top="50%";
chevronleft.style.marginTop="-20px";
chevronleft.style.cursor="pointer";
chevronleft.style.left="30px";
image.appendChild(chevronleft);

const chevronright=document.createElement("i");
chevronright.className="fa fa-chevron-right";
image.appendChild(chevronright);
chevronright.style.color="white";
chevronright.style.position="absolute";
chevronright.style.height="40px";
chevronright.style.width="40px";
chevronright.style.fontSize="30px";
chevronright.style.top="50%";
chevronright.style.marginTop="-20px";
chevronright.style.cursor="pointer";
chevronright.style.right="30px";

/*----------------------SIDEBAR-----------------------------*/
const section=document.createElement("section");
main.appendChild(section);
section.style.height="2500px";
section.style.width="450px";
section.style.float="right";
section.style.right="1500px";

const sidebar=document.createElement("div");
section.appendChild(sidebar);
sidebar.style.width="300px";
sidebar.style.height="900px";
sidebar.style.position="sticky";
sidebar.style.float="right";
sidebar.style.top="0";

const about=document.createElement("h5");
sidebar.appendChild(about);
about.innerText="ABOUT ME";
about.style.left="50%";
about.style.transform="translate(-50% , -50%)";
about.style.fontWeight="bold";
about.style.position="absolute";
about.style.top="50px";

const imgsidebar=document.createElement("img");
sidebar.appendChild(imgsidebar);
imgsidebar.setAttribute("src","images/about-me.jpg");
imgsidebar.style.position="absolute";
imgsidebar.style.width="100%";
imgsidebar.style.height="30%";
imgsidebar.style.top="65px";

const abouttext=document.createElement("h6");
sidebar.appendChild(abouttext);
abouttext.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias!";
abouttext.style.position="absolute";
abouttext.style.top="350px";
abouttext.style.textAlign="center";

const button=document.createElement("button");
sidebar.appendChild(button);
button.innerText="READ MORE";
button.style.fontSize="15px";
button.style.border="0px solid white";
button.style.position="absolute";
button.style.left="50%";
button.style.top="46%";
button.style.transform="translate(-50% , -50%)";
button.style.fontWeight="bold";
button.style.backgroundColor="white";

const abouttext4=document.createElement("h4");
sidebar.appendChild(abouttext4);
abouttext4.innerText="FOLLOW ME";
abouttext4.style.position="absolute";
abouttext4.style.color="#1e1d1d";
abouttext4.style.fontWeight="bold";
abouttext4.style.fontSize="13px";
abouttext4.style.backgroundColor="white";
abouttext4.style.position="absolute";
abouttext4.style.color="#1e1d1d";
abouttext4.style.fontSize="15px";
abouttext4.style.fontWeight="bold";
abouttext4.style.left="50%";
abouttext4.style.top="53%";
abouttext4.style.transform="translate(-50% , -50%)";

const socialmedia=document.createElement("div")
sidebar.appendChild(socialmedia);
socialmedia.style.position="absolute";
socialmedia.style.left="50%";
socialmedia.style.top="57%";
socialmedia.style.transform="translate(-50% , -50%)";
socialmedia.style.fontSize="18px";

var facebook=document.createElement("i");
facebook.className="fa fa-facebook";
socialmedia.appendChild(facebook);
facebook.style.margin="7px";

var twitter=document.createElement("i");
twitter.className="fa fa-twitter";
socialmedia.appendChild(twitter);
twitter.style.margin="7px";

var google=document.createElement("i");
google.className="fa fa-google";
socialmedia.appendChild(google);
google.style.margin="7px";

var pinterest=document.createElement("i");
pinterest.className="fa fa-pinterest";
socialmedia.appendChild(pinterest);
pinterest.style.margin="7px";

var instagram=document.createElement("i");
instagram.className="fa fa-instagram";
instagram.style.margin="7px";
socialmedia.appendChild(instagram);

const imgsidebar2=document.createElement("img");
sidebar.appendChild(imgsidebar2);
imgsidebar2.setAttribute("src","images/banner.jpg");
imgsidebar2.style.position="absolute";
imgsidebar2.style.width="100%";
imgsidebar2.style.height="25%";
imgsidebar2.style.left="50%";
imgsidebar2.style.top="72%";
imgsidebar2.style.transform="translate(-50% , -50%)";

/*----------------------POSTS-----------------------------*/

for (var i=0; i<5;i++) {
 const posts = document.createElement("div");
 main.appendChild(posts);
 posts.style.height = "800px";
 posts.style.position = "relative";
 posts.style.width = "700px";
 const TEXTS = document.createElement("div");
 posts.appendChild(TEXTS);

 const textP1 = document.createElement("h5");
 TEXTS.appendChild(textP1).innerText = "Category";

 const textP2 = document.createElement("h2");
 TEXTS.appendChild(textP2).innerText = "Why Glass Had Been So Popular Till Now?";

 const textP3 = document.createElement("h5");
 TEXTS.appendChild(textP3).innerText = "Author Name  January 2023 Comments";
 TEXTS.style.textAlign = "center";
 TEXTS.style.marginTop="70px";

 const imgpost1 = document.createElement("img");
 posts.appendChild(imgpost1);
 imgpost1.setAttribute("src", "images/img0.jpg");
 imgpost1.style.width = "700px";
 imgpost1.style.height = "500px";
 imgpost1.style.display = "block";

 const textP4 = document.createElement("p");
 posts.appendChild(textP4).innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor dolorum earum est, itaque molestiae veniam? A ab beatae corporis debitis ex exercitationem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, quis!expedita explicabo, facere hic illum laboriosam minus modi molestias quam quasi, quod recusandae saepe tempore totam . Amet, autem cum iste itaque laboriosam nam necessitatibus Lorem ipsum dolor sit amet, consectetur adipisicing.nesciunt unde.";
 textP4.style.position = "absolute";
 textP4.style.textAlign = "justify";
 textP4.style.bottom = "-100px";
 textP4.style.height = "270px";

 const buttonP = document.createElement("button");
 textP4.appendChild(buttonP).innerText = "Read More";
 buttonP.style.position = "relative";
 buttonP.style.top = "10%";
 buttonP.style.border = "0 solid white";
 buttonP.style.color = "black";
 buttonP.style.fontSize = "15px";
 buttonP.style.cursor = "pointer";
 buttonP.style.fontWeight = "bold";
 buttonP.style.backgroundColor="white";

 const socialposts = document.createElement("div");
 posts.appendChild(socialposts).innerText = "share:";
 var facebookP = document.createElement("i");
 facebookP.className = "fa fa-facebook";
 socialposts.appendChild(facebookP);
 var twitterP = document.createElement("i");
 twitterP.className = "fa fa-twitter";
 socialposts.appendChild(twitterP);
 var googleP = document.createElement("i");
 googleP.className = "fa fa-google";
 socialposts.appendChild(googleP);
 var pinterestP = document.createElement("i");
 pinterestP.className = "fa fa-pinterest";
 socialposts.appendChild(pinterestP);
 socialposts.style.position = "absolute";
 socialposts.style.fontSize = "15px";
 socialposts.style.left = "75%";
 socialposts.style.top = "97%";
 socialposts.style.fontWeight = "bold";
 socialposts.style.transform = "translate(-50% , -50%)";
 facebookP.style.margin = "10px";
 twitterP.style.margin = "10px";
 googleP.style.margin = "10px";
 pinterestP.style.margin = "10px";
}

/*----------------------POPULAR-----------------------------*/

const popular=document.createElement("div");
main.appendChild(popular);
popular.style.width="300px";
popular.style.height="620px";
popular.style.position="relative";
popular.style.float="right";
popular.style.backgroundColor="#ece9e9";
popular.style.transform="translateY(-300%)";

const titlepop=document.createElement("h5");
popular.appendChild(titlepop).innerText="POPULAR POSTS";
titlepop.style.color=" #1e1d1d";
titlepop.style.textAlign="center";

const imgpopulars=document.createElement("a");
popular.appendChild(imgpopulars);

const imgpopular = document.createElement("img");
imgpopulars.appendChild(imgpopular);
imgpopular.setAttribute("src", "images/sidebar1.jpg");
imgpopular.style.border="1px solid #ddd";
imgpopular.style.borderRadius="4px";
imgpopular.style.padding="5px";
imgpopular.style.width="100px";
imgpopular.style.height="100px";
imgpopular.style.position="absolute";

const popularP1=document.createElement("div");
popular.appendChild(popularP1);
popularP1.style.marginLeft="110px";
popularP1.style.color="#313030";

const imgpopulars2=document.createElement("a");
popular.appendChild(imgpopulars2);
const imgpopular2 = document.createElement("img");
imgpopulars2.appendChild(imgpopular2);
imgpopular2.setAttribute("src", "images/sidebar2.jpg");
imgpopular2.style.border="1px solid #ddd";
imgpopular2.style.borderRadius="4px";
imgpopular2.style.padding="5px";
imgpopular2.style.width="100px";
imgpopular2.style.height="100px";
imgpopular2.style.position="absolute";
imgpopular2.style.top="150px";

const imgpopulars3=document.createElement("a");
popular.appendChild(imgpopulars3);
const imgpopular3 = document.createElement("img");
imgpopulars3.appendChild(imgpopular3);
imgpopular3.setAttribute("src", "images/sidebar3.jpg");
imgpopular3.style.border="1px solid #ddd";
imgpopular3.style.borderRadius="4px";
imgpopular3.style.padding="5px";
imgpopular3.style.width="100px";
imgpopular3.style.height="100px";
imgpopular3.style.position="absolute";
imgpopular3.style.top="270px";

const imgpopulars4=document.createElement("a");
popular.appendChild(imgpopulars4);
const imgpopular4 = document.createElement("img");
imgpopulars4.appendChild(imgpopular4);
imgpopular4.setAttribute("src", "images/sidebar4.jpg");
imgpopular4.style.border="1px solid #ddd";
imgpopular4.style.borderRadius="4px";
imgpopular4.style.padding="5px";
imgpopular4.style.width="100px";
imgpopular4.style.height="100px";
imgpopular4.style.position="absolute";
imgpopular4.style.top="390px";

const imgpopulars5=document.createElement("a");
popular.appendChild(imgpopulars5);
const imgpopular5 = document.createElement("img");
imgpopulars5.appendChild(imgpopular5);
imgpopular5.setAttribute("src", "images/sidebar5.jpg");
imgpopular5.style.border="1px solid #ddd";
imgpopular5.style.borderRadius="4px";
imgpopular5.style.padding="5px";
imgpopular5.style.width="100px";
imgpopular5.style.height="100px";
imgpopular5.style.position="absolute";
imgpopular5.style.top="510px";

for (var k=0;k<15;k++){
 var textpopular=document.createElement("p");
 popularP1.appendChild(textpopular);
}
function popularP(){
 var para=document.getElementsByTagName("p")
 para[5].innerText="lorem One"
 para[6].innerText="lorem Two"
 para[7].innerText="lorem Three"
 para[8].innerText="lorem Four"
 para[9].innerText="lorem Five"
 para[10].innerText="lorem Six"
 para[11].innerText="lorem Seven"
 para[12].innerText="lorem Eight"
 para[13].innerText="lorem Nine"
 para[14].innerText="lorem Eleven"
 para[15].innerText="lorem Twelve"
 para[16].innerText="lorem THirteen"
 para[17].innerText="lorem Fourteen"
 para[18].innerText="lorem Fifteen"
 para[19].innerText="lorem Sixteen"
}
popularP();

/*----------------------GALLERY-----------------------------*/
const Gallery=document.createElement("div");
main.appendChild(Gallery);
Gallery.style.width="400px";
Gallery.style.height="500px";
Gallery.style.position="relative";
Gallery.style.left="40%";
Gallery.style.transform="translate(108%,-235%)"

const titlegall=document.createElement("h4");
Gallery.appendChild(titlegall).innerText="INSTAGRAM";
titlegall.style.marginLeft="20%";
titlegall.style.left="40%";

const footergall=document.createElement("h4");
Gallery.appendChild(footergall).innerText="SUBSCRIBE";
footergall.style.position="absolute";
footergall.style.left="40%";
footergall.style.top="75%";
footergall.style.transform="translate(-50% , -50%)";

const footergall2=document.createElement("h6");
Gallery.appendChild(footergall2).innerText="follow my...";
footergall2.style.position="absolute";
footergall2.style.left="40%";
footergall2.style.top="82%";
footergall2.style.transform="translate(-50% , -50%)";

const imgparent=document.createElement("div");
Gallery.appendChild(imgparent);
for (var j=0;j<4;j++){
 var agallery=document.createElement("img");
 imgparent.appendChild(agallery);
}
function Galleryimage(){
 var imageGall=document.getElementsByTagName("img")
 imageGall[13].setAttribute("src", "images/instagram1.jpg");
 imageGall[14].setAttribute("src", "images/instagram2.jpg");
 imageGall[15].setAttribute("src", "images/instagram3.jpg");
 imageGall[16].setAttribute("src", "images/instagram4.jpg");
 imageGall[13].style.border="1px solid #ddd";
 imageGall[14].style.border="1px solid #ddd";
 imageGall[15].style.border="1px solid #ddd";
 imageGall[15].style.border="1px solid #ddd";
 imageGall[13].style.position="absolute";
 imageGall[14].style.position="absolute";
 imageGall[15].style.top="39%"
 imageGall[16].style.top="39%";
 imageGall[16].style.left="39%";
 imageGall[14].style.left="39%";
 imageGall[13].style.width="150px";
 imageGall[14].style.width="150px";
 imageGall[15].style.width="150px";
 imageGall[16].style.width="150px";
 imageGall[15].style.position="absolute";
 imageGall[16].style.position="absolute";
}
Galleryimage();

/*----------------------SEARCH-----------------------------*/
 const myform=document.createElement("form");
 main.appendChild(myform);
myform.style.position="absolute";
myform.style.top="4500px";
myform.style.left="1060px";

const input=document.createElement("input");
myform.appendChild(input).type="text";
input.placeholder="Search...";
input.name="search";
const buttonform=document.createElement("button");
myform.appendChild(buttonform);
buttonform.type="submit";
buttonform.innerHTML="<div class='fa fa-search'></div>";
for (i in document.getElementsByName("search")){
document.getElementsByName("search").item(0).style.width="300px";
document.getElementsByName("search").item(0).style.height="40px";
document.getElementsByName("search").item(0).style.border="2px solid black";
}
buttonform.style.position="absolute"
buttonform.style.width="40px"
buttonform.style.height="40px"
buttonform.style.fontSize="20px"

/*----------------------IMAGESIDE-----------------------------*/
const side=document.createElement("div");
main.appendChild(side);
side.style.position="relative";
side.style.width="400px";
side.style.height="550px"
side.style.top="-1100px";
side.style.left="300px";
side.style.float="right";

const imgside=document.createElement("img");
side.appendChild(imgside);
imgside.setAttribute("src", "images/single-post3.jpg");
imgside.style.width="400px";
imgside.style.height="550px";
imgside.style.position="absolute";
imgside.style.left="30px"

const Titleside=document.createElement("h6")
side.appendChild(Titleside)
Titleside.innerText="Fall In Love With Cat...";
Titleside.style.position="absolute";
Titleside.style.left="50%";
Titleside.style.top="50%";
Titleside.style.transform="translate(-50% , -50%)";
Titleside.style.textAlign="center"
Titleside.style.color="white";
Titleside.style.fontSize="30px";
Titleside.style.fontWeight="bold";

/*----------------------FOOTER-----------------------------*/
const footer=document.createElement("footer");
document.body.appendChild(footer);
footer.style.backgroundColor="#010123";
footer.style.padding="70px 0";
footer.style.height="500px"
// footer.style.transform="translateY(-450px)";
footer.style.position="relative";

const Titlefooter=document.createElement("h4");
footer.appendChild(Titlefooter);
Titlefooter.innerText="WESTA";
Titlefooter.style.left="400px";
Titlefooter.style.top="60px";
Titlefooter.style.position="absolute";

const Titlefooter2=document.createElement("h4");
footer.appendChild(Titlefooter2);
Titlefooter2.innerText="CATEGORIES";
Titlefooter2.style.position="absolute";
Titlefooter2.style.left="630px";
Titlefooter2.style.top="60px";

const Titlefooter3=document.createElement("h4");
footer.appendChild(Titlefooter3);
Titlefooter3.innerText="RECENT POSTS";
Titlefooter3.style.position="absolute";
Titlefooter3.style.left="900px";
Titlefooter3.style.top="60px";

function paraghraph(){
for (i=0;i<4;i++){
var parafooter=document.createElement("p");
footer.appendChild(parafooter);
parafooter.style.position="relative";
parafooter.style.marginLeft="400px";
parafooter.style.top="50px";
}
 var paraF=document.getElementsByTagName("p")
 paraF[20].innerText="Lorem ipsum dolor sit amet.";
 paraF[21].innerText="Lorem ipsum dolor sit.";
 paraF[22].innerText="phone:+1234569785";
 paraF[23].innerText="email:mail@gmail.com";
}
paraghraph();

function paraghraph2(){
 for (i=0;i<4;i++){
  var parafooter2=document.createElement("p");
  footer.appendChild(parafooter2);
  parafooter2.style.position="relative";
  parafooter2.style.marginLeft="630px";
  parafooter2.style.top="-420px";
 }
 var paraF2=document.getElementsByTagName("p")
 paraF2[24].innerText="Lorem ipsum dolor sit amet.";
 paraF2[25].innerText="Lorem ipsum dolor sit.";
 paraF2[26].innerText="phone:+1234569785";
 paraF2[27].innerText="email:mail@gmail.com";
}
paraghraph2();

function paraghraph3(){
 for (i=0;i<4;i++){
  var parafooter3=document.createElement("p");
  footer.appendChild(parafooter3);
  parafooter3.style.position="relative";
  parafooter3.style.marginLeft="900px";
  parafooter3.style.top="-580px";
 }
 var paraF3=document.getElementsByTagName("p")
 paraF3[28].innerText="Lorem ipsum dolor sit amet.";
 paraF3[29].innerText="Lorem ipsum dolor sit.";
 paraF3[30].innerText="phone:+1234569785";
 paraF3[31].innerText="email:mail@gmail.com";

}
paraghraph3();
for (i in document.getElementsByTagName("footer")){
 footer.style.color="white";
}

const footersocial=document.createElement("div")
footer.appendChild(footersocial);
var facebookF=document.createElement("i");
facebookF.className="fa fa-facebook";
footersocial.appendChild(facebookF)
var twitterF=document.createElement("i");
twitterF.className="fa fa-twitter";
footersocial.appendChild(twitterF);
var googleF=document.createElement("i");
googleF.className="fa fa-google";
footersocial.appendChild(googleF);
var telegramF=document.createElement("i");
telegramF.className="fa fa-telegram";
footersocial.appendChild(telegramF);
var instagramF=document.createElement("i");
instagramF.className="fa fa-instagram";
footersocial.appendChild(instagramF);
var linkedinF=document.createElement("i");
linkedinF.className="fa fa-linkedin";
footersocial.appendChild(linkedinF);
var youtubeF=document.createElement("i");
youtubeF.className="fa fa-youtube";
footersocial.appendChild(youtubeF);
footersocial.style.position="absolute";
footersocial.style.left="45%";
footersocial.style.color="white";
footersocial.style.top="70%";
socialmedia.style.transform="translate(-50% , -50%)";
facebookF.style.margin="7px";
twitterF.style.margin="7px";
googleF.style.margin="7px";
telegramF.style.margin="7px";
instagramF.style.margin="7px";
linkedinF.style.margin="7px";
youtubeF.style.margin="7px";
for (i in document.getElementsByTagName("div")){
 footersocial.style.fontSize="20px";
}






