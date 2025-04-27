import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import VideoPlayer from "./components/VideoPlayer";
import Home from "./components/Home";


import BackgroundVideo from "./components/BackgroundVideo";
import BlogSection from "./components/BlogSection";
import Logos from "./components/Logo";
import PDFCardViewer from "./components/PDFCardViewer";

import pdf1 from "./assets/Brochure/BRANDING - CLIK CATALYST.pdf";
import pdf2 from "./assets/Brochure/Talenoid brand guide (2).pdf";

import pdf3 from "./assets/Brand Guide/Brochure_07 november.pdf";

function App() {
  const home = [
    {
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500737/Img1_yrmjh9.jpg",
      video: undefined,
    },
    {
      image: undefined,
      video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501571/1_rj99it.mp4",
    },
    {
      image: undefined,
      video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501218/Zara_Deep_Garden_Demo_CGI_ztzved.mp4",
    },
    {
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500738/Img7_ymps78.jpg",
      video: undefined,
    },
    {
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500735/Img3_qbg6fx.jpg",
      video: undefined,
    },
    {
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500736/Img4_tg1mro.jpg",
      video: undefined,
    },
    // {
    //   image: Img3,
    //   video: undefined,
    // },
  ];

  const products = [
    {
      title: "Mutual Funds (MF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500747/Img5_b92kmi.jpg",
    },
    {
      title: "Alternative Investment Funds (AIF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500738/Img7_ymps78.jpg",
    },
    {
      title: "Portfolio Management Services (PMS)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500737/Img6_cpenkr.jpg",
    },
    {
      title: "Fixed Deposits (FD)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500737/Img2_rauw36.jpg",
    },
    {
      title: "Unlisted Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500737/Img1_yrmjh9.jpg",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500736/Img4_tg1mro.jpg",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745500735/Img3_qbg6fx.jpg",
    },
  ];

  const Videos = [
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501571/1_rj99it.mp4", video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501571/1_rj99it.mp4" },
    // { video: Vid2 },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501617/3_fgm9uy.mov",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501617/3_fgm9uy.mov" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501652/4_fwn45o.mov",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755738/Vid4_zf1wff.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501566/5_hhsmja.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755706/Vid5_ab8o9b.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501661/6_zdl1rb.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755711/Vid6_uasjii.mp4"},
    // { video: Vid7 },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501668/8_mv2uyt.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755706/Vid8_nustz8.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501661/9_umhbvd.mov",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755705/Vid9_fs8cpf.mp4" },
    // { video: Vid10 },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501668/11_u5ml0u.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755685/Vid11_facp29.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501645/12_qbwqoo.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755692/Vid12_ukjl7y.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501622/13_usdd91.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755691/Vid13_tbbeto.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501576/14_r7nu5h.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755687/Vid14_vgutar.mp4" },
    {link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501584/15_dwbwjw.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755679/Vid15_ngyfdk.mp4" },
    // { video: Vid16 },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501635/17_nsftce.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755678/Vid17_pzd6db.mp4" },
    { link: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501638/18_bffj3i.mp4",video:"https://res.cloudinary.com/dy9viqy4s/video/upload/v1745755696/Vid18_h3eji2.mp4" },
  ];

  const CGIVIDEO = [
    { video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501218/Zara_Deep_Garden_Demo_CGI_ztzved.mp4" },
    { video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501240/T_shirt_iyu2lw.mp4" },
    // { video: CGIVid3 },
    { video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501218/Zara_Deep_Garden_Demo_CGI_ztzved.mp4" },
    { video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501240/T_shirt_iyu2lw.mp4" },
    { video: "https://res.cloudinary.com/dy9viqy4s/video/upload/v1745501218/Zara_Deep_Garden_Demo_CGI_ztzved.mp4" },
  ];

  const Blogs = [
    {
      title: "Mutual Funds (MF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502389/Blog16_sogpwa.jpg",
      link: "https://www.thesuitconcierge.com/whats-the-difference-between-a-womans-and-a-mans-suit/",
    },
    {
      title: "Alternative Investment Funds (AIF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502373/Blog3_fpmqsg.jpg",
      link: "https://www.thesuitconcierge.com/a-guide-to-wedding-tuxedo-shirts-and-styles/",
    },
    {
      title: "Portfolio Management Services (PMS)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502384/Blog13_rl2y0q.jpg",
      link: "https://www.thesuitconcierge.com/tips-to-take-womens-suiting-to-the-next-level/",
    },
    {
      title: "Fixed Deposits (FD)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502381/Blog10_ecde17.jpg",
      link: "https://www.byliving.com.au/how-cafes-in-melbourne-used-concrete-pendant-lights/",
    },
    {
      title: "Unlisted Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502375/Blog4_myobum.jpg",
      link: "https://designerplants.com.au/blog/adding-a-touch-of-green-elegance-to-the-mercure-hotel/",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502378/Blog8_a5el7n.jpg",
      link: "https://www.designerverticalgardens.com.au/blogs/news/creating-a-bohemian-vibe-10-macrame-hanging-plant-ideas-for-stylish-decor",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502373/Blog2_kasfvc.jpg",
      link: "https://docs.google.com/document/d/1MuPWNaUYr9e_B_9LEK7V81fvMzarGtbi/edit",
    },
    {
      title: "Mutual Funds (MF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502372/Blog1_d8zarg.jpg",
      link: "https://lendco.com.au/finding-a-home-loan-in-melbourne/",
    },
    {
      title: "Alternative Investment Funds (AIF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502381/Blog9_ihfsqz.jpg",
      link: "https://sikrifarms.com/blog/post/farmyard-manure-vs-vermicompost",
    },
    {
      title: "Portfolio Management Services (PMS)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502382/Blog11_mui430.jpg",
      link: "https://au.kakaduaustralia.com/blogs/blogs/the-tale-of-kakadu-traders-australia?srsltid=AfmBOopS5Cn1tOVbcCotHAzsEOSCmNzQS4GGpWaEvLEFQHQRkO4syGHE",
    },
    {
      title: "Fixed Deposits (FD)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502386/Blog14_fn2ryv.jpg",
      link: "https://www.spaceo.ai/blog/top-machine-learning-consulting-companies/",
    },
    {
      title: "Unlisted Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502375/Blog5_m2bzki.jpg",
      link: "https://discovercloud.io/tactics-for-vulnerability-assessment-in-cloud/",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502377/Blog7_dvprda.jpg",
      link: "https://discovercloud.io/cloud-101-a-beginners-guide-to-private-public-hybrid-and-multi-cloud-deployments/",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502387/Blog15_znnk3e.jpg",
      link: "https://www.spinny.com/blog/types-of-automatic-transmission/",
    },
    {
      title: "Mutual Funds (MF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502376/Blog6_dhttwg.jpg",
      link: "https://www.spinny.com/blog/car-segment-india/",
    },
    {
      title: "Alternative Investment Funds (AIF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502383/Blog12_h6lgd7.jpg",
      link: "https://www.hotcars.com/things-you-need-to-unlearn-about-cars-from-movies/",
    },
  ];

  const logos = [
    {
      title: "Mutual Funds (MF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502280/BeFit_15_c7eae4.png",
    },
    {
      title: "Alternative Investment Funds (AIF)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502276/Polytune_page-0001_oz7kpz.jpg",
    },
    {
      title: "Portfolio Management Services (PMS)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502276/LOGO_BLack_1_3_r0rn5y.png",
    },
    {
      title: "Fixed Deposits (FD)",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502274/M.U_Traders_yvargp.jpg",
    },
    {
      title: "Unlisted Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502274/LITTI-LICIOUS_LOGO_6_j12tug.png",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502273/dave_sons_logo-06_wdieml.jpg",
    },
    {
      title: "Equity",
      image: "https://res.cloudinary.com/dy9viqy4s/image/upload/v1745502272/Asset_3_4x_jcox6b.png",
    },
  ];

  const pdfFiles = [
    { title: "Clik Catalyst", file: pdf1 },
    { title: "Talenoid", file: pdf2 },
  ];

  const brand = [{ title: "Brochure", file: pdf3 }];

  return (
    <div className="min-h-screen relative">
      <BackgroundVideo />
      <Header />
      <main>
        <Home products={home} />
        {/* <UserSelection /> */}
        <div id="graphic-work">
        <Products products={products} heading="Graphic Work" />
        </div>
        <div id="video-production">
        <VideoPlayer products={Videos} heading="Video Production" />
        </div>
        <div id="cgi-animation">
        <VideoPlayer products={CGIVIDEO} heading="CGI Animation" />
        </div>
        <div id="blogs">
        <BlogSection products={Blogs} heading="Blogs" />
        </div>
        <div id="logo">
        <Logos products={logos} heading="Logo" />
        </div>
        <>
        <div id="brand-guide">
          <h2 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-lg">
            Brand Guide
          </h2>
          <div className="h-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {pdfFiles.map((pdf, index) => (
              <PDFCardViewer key={index} title={pdf.title} file={pdf.file} />
            ))}
          </div>
        </div>
        <div id="brochure">
          <h2 className="text-white text-4xl font-bold text-center mb-4 drop-shadow-lg">
            Brochure
          </h2>
          <div className="h-full p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {brand.map((pdf, index) => (
              <PDFCardViewer key={index} title={pdf.title} file={pdf.file} />
            ))}
          </div>
          </div>
        </>

        {/* <AboutUs />
        <Stats />
        <Testimonials />
        <HowWeWork /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
